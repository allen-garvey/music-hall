<template>
    <Page :albums="albums">
        <template v-slot:title="slotProps: PageTitleProps">
            <a href="https://allengarvey.com" v-if="shouldLinkToHome">
                {{ slotProps.text }}
            </a>
            <router-link :to="{ name: 'home' }" v-else>
                {{ slotProps.text }}
            </router-link>
        </template>
        <template v-slot="slotProps: PageSlotProps">
            <TrackList 
                :albums="slotProps.albums"
                :is-current-track="slotProps.isCurrentTrack"
                :track-button-clicked="slotProps.trackButtonClicked"
                :play-state="slotProps.playState"
                :show-share-links="shouldShowTrackShareLinks"
                :show-album-share-links="shouldShowAlbumShareLinks"
            />
        </template>
    </Page>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import TrackList from './track-list.vue';
import { PageSlotProps, PageTitleProps } from '../models/component-props';
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
        shouldShowTrackShareLinks: {
            type: Boolean,
            default: true,
        },
        shouldShowAlbumShareLinks: {
            type: Boolean,
            default: false,
        },
        shouldLinkToHome: {
            type: Boolean,
            default: false,
        },
    },
});
</script>