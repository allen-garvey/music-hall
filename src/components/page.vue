<template>
    <div :class="$style.container">
        <h1 :class="$style.title"><slot name="title" text="Allen Garvey"></slot></h1>
        <slot 
            :albums="albums"
            :current-track="currentTrack"
            :track-button-clicked="trackButtonClicked"
            :play-state="playState"
        ></slot>
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
    }
</style>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Track, Album } from '../models/tracks';
import { PlayState, mediaUrlForTrack, areTracksEqual } from '../models/media-helpers';
import { getUserVolume, saveUserVolume } from '../models/user-settings';
import MediaControls from './media-controls.vue';

export default defineComponent({
    props: {
        albums: {
            required: true,
            type: Object as PropType<Array<Album>>,
        },
    },
    components: {
        MediaControls,
    },
    mounted(){
        this.volume = getUserVolume();
        this.audio = new Audio();
        this.audio.addEventListener('loadeddata', () => {
            this.playState = PlayState.IS_PLAYING;
            (this.audio as HTMLAudioElement).volume = this.volume;
        });
        this.audio.addEventListener('ended', () => {            
            if(this.nextTrack){
                this.currentTrack = this.nextTrack;
                this.startAudio();
            }
            else {
                this.playState = PlayState.IS_PAUSED;
            }
        });
        this.audio.addEventListener('timeupdate', (e) => {
			this.elapsedTime = Math.floor((e.target as HTMLAudioElement).currentTime);
		});
        this.canPlayOpus = this.audio.canPlayType('audio/ogg') !== '';
    },
    data(){
        return {
            audio: undefined as HTMLAudioElement | undefined,
            canPlayOpus: true,
            currentTrack: undefined as Track | undefined,
            playState: PlayState.IS_EMPTY,
            volume: 1,
            elapsedTime: 0,
        };
    },
    computed: {
        nextTrack(): Track|undefined {
            if(!this.currentTrack){
                return undefined;
            }
            let currentTrackIndex = 0;
            const currentAlbum = this.albums.find(album => {
                let found = false;
                album.tracks.forEach((track, i) => {
                    if(areTracksEqual(this.currentTrack, track)){
                        currentTrackIndex = i;
                        found = true;
                    }
                });

                return found;
            });
            return currentAlbum?.tracks[currentTrackIndex + 1];
        },
    },
    methods: {
        startAudio(){
            (this.audio as HTMLAudioElement).src = mediaUrlForTrack(this.currentTrack as Track, this.canPlayOpus);
            this.playState = PlayState.IS_LOADING;
            this.elapsedTime = 0;
            (this.audio as HTMLAudioElement).load();
            (this.audio as HTMLAudioElement).play();
        },
        stopAudio(){
            this.playState = PlayState.IS_PAUSED;
            (this.audio as HTMLAudioElement).pause();
        },
        restartAudio(){
            this.playState = PlayState.IS_PLAYING;
            (this.audio as HTMLAudioElement).play();
        },
        setCurrentTrackTime(seconds: number){
            (this.audio as HTMLAudioElement).currentTime = seconds;
        },
        mediaControlsButtonClicked(){
            if(this.playState === PlayState.IS_PAUSED){
                this.restartAudio();
            }
            else {
                this.stopAudio();
            }
        },
        volumeChangeRequested(newVolume: number){
            this.volume = newVolume;
            (this.audio as HTMLAudioElement).volume = newVolume;
            saveUserVolume(newVolume);
        },
        trackButtonClicked(track: Track){
            if(areTracksEqual(this.currentTrack, track)){
                if(this.playState === PlayState.IS_PAUSED){
                    this.restartAudio();
                }
                else {
                    this.stopAudio();
                }
                return;
            }
            this.currentTrack = track;
            this.startAudio();
        },
    }
});
</script>