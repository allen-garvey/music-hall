<template>
    <div :class="$style.container">
        <h1 :class="$style.title">
            <a :href="shouldLinkToHome ? 'https://allengarvey.com' : '/'">
                Allen Garvey
            </a>
        </h1>
        <p :class="$style.description">
            Selected musical compositions and recordings
        </p>
        <AlbumComponent
            v-for="album in albums"
            :key="album.meta.title"
            :album="album"
            :is-track-playing="isTrackPlaying"
            :is-album-playing="isAlbumPlaying"
            :track-button-clicked="trackButtonClicked"
            :album-play-button-clicked="albumPlayButtonClicked"
            :show-share-links="shouldShowTrackShareLinks"
            :show-album-share-links="shouldShowAlbumShareLinks"
        />
        <MediaControls
            :current-track="currentTrack"
            :play-state="playState"
            :audio-volume="volume"
            :button-clicked="mediaControlsButtonClicked"
            :volume-changed="volumeChangeRequested"
            :elapsed-time="elapsedTime"
            :on-track-seek-requested="setCurrentTrackTime"
            v-if="currentTrack"
        />
    </div>
</template>

<style lang="scss" module>
.container {
    max-width: 1040px;
    margin: 0 auto;
}
.title {
    padding: 0 1rem;
    margin-bottom: 0.5rem;
}
.description {
    padding: 0 1rem;
    margin: 0 0 2rem;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import { Track, Album, albums } from '../models/tracks';
import {
    PlayState,
    mediaUrlForTrack,
    areAlbumsEqual,
} from '../models/media-helpers';
import { getUserVolume, saveUserVolume } from '../models/user-settings';
import AlbumComponent from './album.vue';
import MediaControls from './media-controls.vue';

export default defineComponent({
    components: {
        AlbumComponent,
        MediaControls,
    },
    created() {
        this.setup();
    },
    mounted() {
        this.volume = getUserVolume();
        this.audio = new Audio();
        this.audio.addEventListener('loadeddata', () => {
            this.playState = PlayState.IS_PLAYING;
            (this.audio as HTMLAudioElement).volume = this.volume;
        });
        this.audio.addEventListener('ended', () => {
            if (this.nextTrack) {
                this.currentTrackIndex = this.currentTrackIndex + 1;
                this.startAudio();
            } else {
                this.playState = PlayState.IS_PAUSED;
            }
        });
        this.audio.addEventListener('timeupdate', e => {
            this.elapsedTime = Math.floor(
                (e.target as HTMLAudioElement).currentTime
            );
        });
        this.canPlayOpus = this.audio.canPlayType('audio/ogg') !== '';
    },
    data() {
        return {
            albums: [] as Album[],
            shouldShowTrackShareLinks: true,
            shouldShowAlbumShareLinks: true,
            shouldLinkToHome: true,
            audio: undefined as HTMLAudioElement | undefined,
            canPlayOpus: true,
            currentAlbum: undefined as Album | undefined,
            currentTrackIndex: -1,
            playState: PlayState.IS_EMPTY,
            volume: 1,
            elapsedTime: 0,
        };
    },
    computed: {
        currentTrack(): Track | undefined {
            return this.currentAlbum?.tracks[this.currentTrackIndex];
        },
        nextTrack(): Track | undefined {
            return this.currentAlbum?.tracks[this.currentTrackIndex + 1];
        },
        isCurrentlyPlaying(): boolean {
            return (
                this.playState === PlayState.IS_PLAYING ||
                this.playState === PlayState.IS_LOADING
            );
        },
    },
    methods: {
        setup() {
            const urlParams = new URLSearchParams(window.location.search);
            if (urlParams.get('track')) {
                this.setupTrackPage(urlParams.get('track') || '');
            } else if (urlParams.get('album')) {
                this.setupAlbumPage(urlParams.get('album') || '');
            } else {
                this.setupDefaultPage();
            }
        },
        // for index page
        setupDefaultPage() {
            this.shouldShowAlbumShareLinks = true;
            this.shouldLinkToHome = true;
            this.shouldShowTrackShareLinks = true;
            this.albums = albums;
        },
        // for single album pages
        setupAlbumPage(albumSlug: string) {
            const album = albums.find(album => album.meta.slug === albumSlug);
            if (!album) {
                this.setupDefaultPage();
                return;
            }
            this.albums = [album];
            this.shouldShowAlbumShareLinks = false;
            this.shouldLinkToHome = false;
            this.shouldShowTrackShareLinks = true;
        },
        // for single track pages
        setupTrackPage(trackParam: string) {
            const currentAlbum = albums.find(album =>
                album.tracks.reduce(
                    (isFound, track) =>
                        isFound || track.filename === trackParam,
                    false
                )
            );
            if (!currentAlbum) {
                this.setupDefaultPage();
                return;
            }
            const currentTracks: Track[] = (
                currentAlbum as Album
            ).tracks.filter(track => track.filename === trackParam);

            this.albums = [
                {
                    ...currentAlbum,
                    tracks: currentTracks,
                },
            ];
            this.shouldShowTrackShareLinks = false;
            this.shouldShowAlbumShareLinks = false;
            this.shouldLinkToHome = false;
        },
        startAudio() {
            (this.audio as HTMLAudioElement).src = mediaUrlForTrack(
                this.currentTrack as Track,
                this.canPlayOpus
            );
            this.playState = PlayState.IS_LOADING;
            this.elapsedTime = 0;
            (this.audio as HTMLAudioElement).load();
            (this.audio as HTMLAudioElement).play();
        },
        stopAudio() {
            this.playState = PlayState.IS_PAUSED;
            (this.audio as HTMLAudioElement).pause();
        },
        restartAudio() {
            this.playState = PlayState.IS_PLAYING;
            (this.audio as HTMLAudioElement).play();
        },
        setCurrentTrackTime(seconds: number) {
            (this.audio as HTMLAudioElement).currentTime = seconds;
        },
        mediaControlsButtonClicked() {
            if (this.playState === PlayState.IS_PAUSED) {
                this.restartAudio();
            } else {
                this.stopAudio();
            }
        },
        volumeChangeRequested(newVolume: number) {
            this.volume = newVolume;
            (this.audio as HTMLAudioElement).volume = newVolume;
            saveUserVolume(newVolume);
        },
        trackButtonClicked(album: Album, trackIndex: number) {
            if (this.isCurrentTrack(album, trackIndex)) {
                if (this.playState === PlayState.IS_PAUSED) {
                    this.restartAudio();
                } else {
                    this.stopAudio();
                }
                return;
            }
            this.currentAlbum = album;
            this.currentTrackIndex = trackIndex;
            this.startAudio();
        },
        isCurrentTrack(album: Album, trackIndex: number): boolean {
            return (
                areAlbumsEqual(this.currentAlbum, album) &&
                this.currentTrackIndex === trackIndex
            );
        },
        isTrackPlaying(album: Album, trackIndex: number): boolean {
            return (
                this.isCurrentTrack(album, trackIndex) &&
                this.isCurrentlyPlaying
            );
        },
        isAlbumPlaying(album: Album): boolean {
            return (
                areAlbumsEqual(this.currentAlbum, album) &&
                this.isCurrentlyPlaying
            );
        },
        albumPlayButtonClicked(album: Album) {
            if (areAlbumsEqual(this.currentAlbum, album)) {
                this.trackButtonClicked(album, this.currentTrackIndex);
            } else {
                this.trackButtonClicked(album, 0);
            }
        },
    },
});
</script>
