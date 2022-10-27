<template>
    <div :class="$style.container">
        <h1>Allen Garvey</h1>
        <TrackList 
            :tracks="tracks"
            :current-track-id="currentTrackId"
            :track-button-clicked="trackButtonClicked"
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
import { Track, Album, trackList } from '../models/tracks';
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
        this.audio.addEventListener('loadeddata', () => {
            this.playState = PlayState.IS_PLAYING;
            this.audio.volume = this.volume;
        });
        this.audio.addEventListener('ended', () => {
            this.playState = PlayState.IS_PAUSED;
        });
    },
    data(){
        return {
            audio: new Audio(),
            currentTrackId: undefined as TrackId | undefined,
            playState: PlayState.IS_EMPTY,
            volume: 1,
        };
    },
    computed: {
        tracks(): Array<Track | Album>{
            return trackList;
        },
        trackListFlat(): Array<Track>{
            return trackList.flatMap((item) => 'tracks' in item ? item.tracks : item);
        },
        currentTrack(): Track | undefined{
            return this.trackListFlat.find(track => doesTrackMatchId(this.currentTrackId, track));
        }
    },
    methods: {
        startAudio(){
            this.audio.src = mediaUrlForTrack(this.currentTrack as Track);
            this.playState = PlayState.IS_LOADING;
            this.audio.load();
            this.audio.play();
        },
        stopAudio(){
            this.playState = PlayState.IS_PAUSED;
            this.audio.pause();
        },
        restartAudio(){
            this.playState = PlayState.IS_PLAYING;
            this.audio.play();
        },
        adjustVolume(value){
            this.audio.volume = value;
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
            this.audio.volume = newVolume;
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