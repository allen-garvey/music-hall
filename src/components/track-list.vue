<template>
    <table :class="$style.table">
        <thead>
            <tr>
                <th :class="$style.playButtonColumn"></th>
                <th :class="$style.titleColumn">Title</th>
                <th :class="$style.artistColumn">Artist</th>
                <th :class="$style.yearColumn">Year</th>
                <th :class="$style.tagsColumn">Tags</th>
            </tr>
        </thead>
        <tbody>
            <tr 
                v-for="item in tracks" 
                :key="`${item.title}-${item.year}`"
                :class="$style.trackRow"
            >
                <td><button :class="$style.playButton">Play</button></td>
                <td>{{ item.title }}</td>
                <td :class="$style.deEmphasizeData">{{ item.artist }}</td>
                <td>{{ item.year }}</td>
                <td>{{ item.tags.join(' ') }}</td>
            </tr>
        </tbody>
    </table>
</template>

<style lang="scss" module>
    .table {
        border-collapse: collapse;
        th {
            text-align: left;
        }
    }
    .playButtonColumn {
        width: 60px;
    }
    .titleColumn {
        width: 24em;
    }
    .artistColumn {
        width: 10em;
    }
    .yearColumn {
        width: 5em;
    }
    .tagsColumn {
        width: 12em;
    }
    .deEmphasizeData {
        opacity: 0.4;
    }
    .trackRow {
        td {
            padding: 1em 0;
        }

        &:hover {
            background-color: #bdeeff;
            .playButton {
                visibility: visible;
            }
        }
    }
    .playButton {
        visibility: hidden;
        cursor: pointer;
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