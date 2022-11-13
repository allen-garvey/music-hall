<template>
    <Page :albums="albums" v-slot="slotProps: PageSlotProps">
        <router-view
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
import { Album, Track, albums } from '../models/tracks';
import Page from './page.vue';

export default defineComponent({
    components: {
        Page,
    },
    computed: {
        albums(): Album[]{
            let currentTrackFilename: string | undefined = this.$route.params.filename as string;
            if(!currentTrackFilename){
                return albums;
            }
            currentTrackFilename = currentTrackFilename.split('/').map(path => encodeURIComponent(path)).join('/');
            const currentAlbum = albums.find(album => 
                album.tracks.reduce((isFound, track) => isFound || track.filename === currentTrackFilename, false)
            );
            if(!currentAlbum){
                return albums;
            }
            const currentTracks: Track[] = (currentAlbum as Album).tracks.filter(track => track.filename === currentTrackFilename);

            if(currentTracks.length === 0){
                return albums;
            }
            
            return [
                {
                    ...currentAlbum,
                    tracks: currentTracks,
                }
            ];
        },
    },
});
</script>