<template>
    <div :class="$style.container">
        <div :class="$style.titleContainer">
            <h3 :class="$style.title">{{ album.meta.title }}</h3>
            <div :class="$style.year">{{ yearDescriptionForAlbum(album) }}</div>
        </div>
        <div :class="$style.secondaryContainer">
            <div :class="$style.artist">{{ album.meta.artist }}</div>
            <div :class="$style.tags">{{ album.meta.tags.join(', ') }}</div>
        </div>
    </div>
</template>
    
<style lang="scss" module>
    .container {
        margin-bottom: 2rem;
    }
    .titleContainer {
        display: flex;
        align-items: flex-end;
    }
    .title {
        margin: 0;
    }
    .year {
        opacity: 0.5;
        margin-left: 1rem;
    }
    .secondaryContainer {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .artist {

    }
    .tags {
        opacity: 0.5;
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
    components: {
    },
    computed: {
    },
    methods: {
        yearDescriptionForAlbum,
    }
});
</script>