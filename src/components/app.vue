<template>
    <div :class="$style.container">
        <h1>Allen Garvey</h1>
        <TrackList 
            :albums="albums"
            :current-track-id="currentTrackId"
            :track-button-clicked="trackButtonClicked"
            :play-state="playState"
        />
        <MediaControls 
            :current-track="currentTrack" 
            :play-state="playState" 
            :audio-volume="volume"
            :button-clicked="mediaControlsButtonClicked"
            :volume-changed="volumeChangeRequested"
        />
    </div>
</template>

<style lang="scss" module>
    .container {
        max-width: 1040px;
        margin: 0 auto;
    }
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import { Track, Album, albums } from '../models/tracks';
import { PlayState, TrackId, doesTrackMatchId, areTrackIdsEqual, mediaUrlForTrack } from '../models/types';
import TrackList from './track-list.vue';
import MediaControls from './media-controls.vue';

export default defineComponent({
    components: {
        TrackList,
        MediaControls,
    },
    mounted(){
        // this.volume = userSettings.getUserVolume();
        this.audio = new Audio();
        this.audio.addEventListener('loadeddata', () => {
            this.playState = PlayState.IS_PLAYING;
            (this.audio as HTMLAudioElement).volume = this.volume;
        });
        this.audio.addEventListener('ended', () => {
            this.playState = PlayState.IS_PAUSED;
        });
    },
    data(){
        return {
            audio: undefined as HTMLAudioElement | undefined,
            currentTrackId: undefined as TrackId | undefined,
            playState: PlayState.IS_EMPTY,
            volume: 1,
        };
    },
    computed: {
        albums(): Album[]{
            return albums;
        },
        tracks(): Track[]{
            return albums.flatMap(album => album.tracks);
        },
        currentTrack(): Track | undefined{
            return this.tracks.find(track => doesTrackMatchId(this.currentTrackId, track));
        }
    },
    methods: {
        startAudio(){
            (this.audio as HTMLAudioElement).src = mediaUrlForTrack(this.currentTrack as Track);
            this.playState = PlayState.IS_LOADING;
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
        adjustVolume(value){
            (this.audio as HTMLAudioElement).volume = value;
            this.volume = value;
            // userSettings.saveUserVolume(value);
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
            // userSettings.saveUserVolume(newVolume);
        },
        trackButtonClicked(trackId: TrackId){
            if(areTrackIdsEqual(this.currentTrackId, trackId)){
                if(this.playState === PlayState.IS_PAUSED){
                    this.restartAudio();
                }
                else {
                    this.stopAudio();
                }
                return;
            }
            this.currentTrackId = trackId;
            this.startAudio();
        },
    }
});
</script>