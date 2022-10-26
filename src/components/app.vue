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
            :play-state="currentPlayState" 
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
import { PlayState, TrackId, doesTrackMatchId, areTrackIdsEqual } from '../models/types';
import TrackList from './track-list.vue';
import MediaControls from './media-controls.vue';

export default defineComponent({
    components: {
        TrackList,
        MediaControls,
    },
    data(){
        return {
            currentTrackId: undefined as TrackId | undefined,
            currentPlayState: PlayState.IS_EMPTY,
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
        mediaControlsButtonClicked(){
            if(this.currentPlayState === PlayState.IS_PAUSED){
                // restart audio
            }
            else {
                // stop audio
            }
        },
        volumeChangeRequested(newVolume: number){
            this.volume = newVolume;
            // change volume level
        },
        trackButtonClicked(trackId: TrackId){
            if(areTrackIdsEqual(this.currentTrackId, trackId)){
                // either pause or restart
                return;
            }
            this.currentTrackId = trackId;
            // play audio
        },
    }
});
</script>