<template>
    <div>
        <h1>Allen Garvey</h1>
        <TrackList :tracks="tracks" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Track, Album, trackList } from '../models/tracks';
import TrackList from './track-list.vue';

export default defineComponent({
    components: {
        TrackList,
    },
    data(){
        return {
        };
    },
    computed: {
        tracks(): Array<Track | Album>{
            return trackList;
        },
    },
    methods: {
    }
});
</script>