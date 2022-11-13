<template>
    <Page v-slot="slotProps: PageSlotProps">
        <TrackList 
            :albums="slotProps.albums"
            :current-track-index="slotProps.currentTrackIndex"
            :track-button-clicked="slotProps.trackButtonClicked"
            :play-state="slotProps.playState"
        />
    </Page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { PageSlotProps } from '../models/component-props';
import Page from './page.vue';
import TrackList from './track-list.vue';

export default defineComponent({
    components: {
        Page,
        TrackList,
    },
});
</script>