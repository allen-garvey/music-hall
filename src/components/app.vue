<template>
    <Page :albums="albums">
        <template v-slot:title="slotProps: PageTitleProps">
            <a href="https://allengarvey.com">{{ slotProps.text }}</a>
        </template>
        <template v-slot="slotProps: PageSlotProps">
            <TrackList 
                :albums="slotProps.albums"
                :current-track="slotProps.currentTrack"
                :track-button-clicked="slotProps.trackButtonClicked"
                :play-state="slotProps.playState"
            />
        </template>
    </Page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { PageSlotProps, PageTitleProps } from '../models/component-props';
import { Album, albums } from '../models/tracks';
import Page from './page.vue';
import TrackList from './track-list.vue';

export default defineComponent({
    components: {
        Page,
        TrackList,
    },
    computed: {
        albums(): Album[]{
            return albums;
        },
    },
});
</script>