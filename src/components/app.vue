<template>
    <div>
        <h1>Allen Garvey</h1>
        <ul v-for="item in tracks" :key="`${item.title}-${item.year}`">
            <div>{{ item.title }}</div><div>{{ item.year }}</div>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Track, Album, trackList } from '../models/tracks';

export default defineComponent({
    components: {
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