<template>
    <div :class="$style.container">
        <h1>Allen Garvey</h1>
        <TrackList 
            :albums="albums"
            :current-track-filename="currentTrackFilename"
            :track-button-clicked="trackButtonClicked"
            :play-state="playState"
        />
        <MediaControls 
            :current-track="currentTrack" 
            :play-state="playState" 
            :audio-volume="volume"
            :button-clicked="mediaControlsButtonClicked"
            :volume-changed="volumeChangeRequested"
            :elapsed-time="elapsedTime"
            :on-track-seek-requested="setCurrentTrackTime"
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
import { PlayState, mediaUrlForTrack } from '../models/media-helpers';
import { getUserVolume, saveUserVolume } from '../models/user-settings';
import TrackList from './track-list.vue';
import MediaControls from './media-controls.vue';

export default defineComponent({
    components: {
        TrackList,
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
            this.playState = PlayState.IS_PAUSED;
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
            currentTrackFilename: undefined as string | undefined,
            playState: PlayState.IS_EMPTY,
            volume: 1,
            elapsedTime: 0,
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
            return this.tracks.find(track => track.filename === this.currentTrackFilename);
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
        adjustVolume(value){
            (this.audio as HTMLAudioElement).volume = value;
            this.volume = value;
            // userSettings.saveUserVolume(value);
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
        trackButtonClicked(trackFilename: string){
            if(trackFilename === this.currentTrackFilename){
                if(this.playState === PlayState.IS_PAUSED){
                    this.restartAudio();
                }
                else {
                    this.stopAudio();
                }
                return;
            }
            this.currentTrackFilename = trackFilename;
            this.startAudio();
        },
    }
});
</script>