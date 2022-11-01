<template>
    <div :class="$style.container">
        <div>
            <img 
                :src="`/media/images/${album.meta.coverImage}`" 
                :alt="`${album.meta.title} by ${album.meta.artist} album cover`" 
                :class="$style.coverImage"
                loading="lazy"
            />
        </div>
        <div>
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
                <td rowspan="2"><pre>{{ album.meta.description }}</pre></td>
            </tr>
        </table>
        </div>
    </div>
</template>
    
<style lang="scss" module>
    .container {
        margin-bottom: 2rem;
        display: flex;
        flex-wrap: wrap;
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
        width: 220px;
        height: 220px;
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