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
                    <td><h3 :class="$style.title">{{ album.meta.title }}</h3></td>
                    <td :class="$style.secondaryInfo">{{ yearDescriptionForAlbum(album) }}</td>
                </tr>
                <tr>
                    <td>{{ album.meta.artist }}</td>
                    <td :class="$style.secondaryInfo">{{ album.meta.tags.join(', ') }}</td>
                </tr>
                <tr v-if="album.meta.description">
                    <td rowspan="2">
                        <ul :class="$style.description">
                            <li v-for="row in album.meta.description">{{ row }}</li>
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
    }
    .imageContainer {
        padding-left: 1rem;
    }
    .table {
        padding: 0 1rem;

        td {
            height: 1em;
        }
    }
    .title {
        margin: 0;
    }
    .secondaryInfo {
        opacity: 0.5;
        padding-left: 1rem;
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
    },
    methods: {
        yearDescriptionForAlbum,
    }
});
</script>