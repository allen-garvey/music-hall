<template>
    <div :class="$style.container">
        <ul 
            v-for="item in tracks" 
            :key="`${item.title}-${item.year}`"
        >
            <li :class="$style.trackItem">
                <div>{{ item.title }}</div>
                <div>{{ item.artist }}</div>
                <div>{{ item.year }}</div>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" module>
    .container {
    }
    .trackItem {
        display: flex;
        justify-content: space-between;
    }
</style>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Track, Album } from '../models/tracks';

export default defineComponent({
    props: {
        tracks: {
            required: true,
            type: Object as PropType<Array<Track | Album>>,
        }
    },
    components: {
    },
    data(){
        return {
        };
    },
    computed: {
    },
    methods: {
    }
});
</script>