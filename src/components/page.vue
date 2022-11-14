<template>
    <div :class="$style.container">
        <h1 :class="$style.title"><slot name="title" text="Allen Garvey"></slot></h1>
        <slot 
            :albums="albums"
            :current-track-index="currentTrackIndex"
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
import { PlayState, mediaUrlForTrack, TrackIndex, areTrackIndexesEqual } from '../models/media-helpers';
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
            const currentTrackIndex = (this.currentTrackIndex as TrackIndex);
            const nextTrackIndex = currentTrackIndex.trackIndex + 1;
            
            if(this.albums[currentTrackIndex.albumIndex].tracks.length > nextTrackIndex){
                this.currentTrackIndex = {
                    ...currentTrackIndex,
                    trackIndex: nextTrackIndex,
                };
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
            currentTrackIndex: undefined as TrackIndex | undefined,
            playState: PlayState.IS_EMPTY,
            volume: 1,
            elapsedTime: 0,
        };
    },
    computed: {
        currentTrack(): Track | undefined{
            if(this.currentTrackIndex === undefined){
                return undefined;
            }
            return this.albums[this.currentTrackIndex.albumIndex].tracks[this.currentTrackIndex.trackIndex];
        }
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
        trackButtonClicked(trackIndex: TrackIndex){
            if(areTrackIndexesEqual(this.currentTrackIndex, trackIndex)){
                if(this.playState === PlayState.IS_PAUSED){
                    this.restartAudio();
                }
                else {
                    this.stopAudio();
                }
                return;
            }
            this.currentTrackIndex = trackIndex;
            this.startAudio();
        },
    }
});
</script>