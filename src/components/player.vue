<template>
    <Page :albums="albums" v-slot="slotProps: PageSlotProps">
        <track-list
            :albums="slotProps.albums"
            :current-track-index="slotProps.currentTrackIndex"
            :track-button-clicked="slotProps.trackButtonClicked"
            :play-state="slotProps.playState"
        />
    </Page>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import TrackList from './track-list.vue';
import { PageSlotProps } from '../models/component-props';
import { Album } from '../models/tracks';
import Page from './page.vue';

export default defineComponent({
    components: {
        Page,
        TrackList,
    },
    props: {
        albums: {
            required: true,
            type: Object as PropType<Array<Album>>,
        },
    },
});
</script>