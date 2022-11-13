<template>
    <div :class="$style.container">
        <div :class="$style.imageContainer">
            <img 
                :src="`/media/images/${album.meta.coverImage}`" 
                :alt="`${album.meta.title} by ${album.meta.artist} album cover`" 
                :class="$style.coverImage"
                loading="lazy"
            />
        </div>
        <div :class="$style.infoContainer">
            <table :class="$style.table">
                <tr>
                    <td>
                        <h3 :class="$style.title">{{ album.meta.title }}</h3>
                    </td>
                    <td :class="$style.secondaryInfo">{{ yearDescriptionForAlbum(album) }}</td>
                </tr>
                <tr>
                    <td>{{ album.meta.artist }}</td>
                    <td :class="$style.secondaryInfo">{{ album.meta.tags.join(', ') }}</td>
                </tr>
                <tr v-if="descriptionRows.length > 0">
                    <td colspan="2">
                        <ul :class="$style.description">
                            <li v-for="row in descriptionRows">{{ row }}</li>
                        </ul>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>
    
<style lang="scss" module>
    $cover-image-width: 220px;

    .container {
        margin-bottom: 1.5rem;
        max-width: 784px;
    }
    .imageContainer {
        padding-left: 1rem;
    }
    .table {
        padding: 0 1rem;
        width: 100%;

        td {
            height: 1em;
        }
    }
    .title {
        margin: 0;
    }
    .secondaryInfo {
        opacity: 0.5;
        padding-left: 2.5rem;
        text-align: right;
    }
    .coverImage {
        width: $cover-image-width;
        height: $cover-image-width;
    }
    .description {
        list-style-type: none;
        font-family: monospace;
        font-size: 0.8rem;
        padding: 1em 0;
        margin: 0;

        li {
            min-height: 1em; // for empty rows for spacing purposes
        }
    }

    $breakpoint: 650px;
    
    @media screen and (min-width: $breakpoint) {
        .container {
            display: flex;
            flex-wrap: wrap;
        }
        .infoContainer {
            flex-basis: calc(100% - #{$cover-image-width} - 1rem);
        }
    }

    @media screen and (max-width: ($breakpoint - 1px)) {
        .secondaryInfo {
            display: none;
        }
    }
</style>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Album } from '../models/tracks';
import { yearDescriptionForAlbum } from '../models/album-helpers';

export default defineComponent({
    props: {
        album: {
            required: true,
            type: Object as PropType<Album>,
        },
    },
    computed: {
        descriptionRows(): string[]{
            const descriptionMap: Map<string, string[]> = new Map();
            
            const trackDescriptions: string[] = this.album.tracks
                .filter(track => {
                    if(!track.description){
                        return false;
                    }
                    if(descriptionMap.has(track.description)){
                        descriptionMap.get(track.description)?.push(track.title);
                        return false;
                    }
                    descriptionMap.set(track.description, [track.title]);
                    return true;
                })
                .map(track => `${descriptionMap.get(track.description as string)?.join(', ')}: ${track.description}`);

            return (this.album.meta.description || []).concat(trackDescriptions);
        }
    },
    methods: {
        yearDescriptionForAlbum,
    }
});
</script>