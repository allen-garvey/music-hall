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
                <td :class="$style.iconContainer">
                    <button 
                        @click="() => trackButtonClicked(idForTrack(item))"
                        :title="doesTrackMatchId(currentTrackId, item) ? 'Pause' : 'Play'"
                    >
                        <svg 
                            :class="$style.icon"
                            viewBox="0 0 24 24"
                        >
                            <use 
                                xlink:href="#icon-play"
                                v-if="!doesTrackMatchId(currentTrackId, item)" />
                            <use 
                                xlink:href="#icon-pause"
                                v-if="doesTrackMatchId(currentTrackId, item)" />
                        </svg>
                    </button>
                </td>
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
            .iconContainer {
                visibility: visible;
            }
        }
    }

    $icon-controls-dimensions: 40px;
    .iconContainer {
        visibility: hidden;
        display: inline-block;
        margin-right: 2rem;
        height: $icon-controls-dimensions;
        width: $icon-controls-dimensions;
    }
    .icon {
        max-height: 100%;
        width: $icon-controls-dimensions;
        opacity: 0.35;
        cursor: pointer;
        
        &:hover {
            opacity: 1;
        }
    }
</style>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Track, Album } from '../models/tracks';
import { TrackId, doesTrackMatchId, idForTrack } from '../models/types';

export default defineComponent({
    props: {
        tracks: {
            required: true,
            type: Object as PropType<Array<Track | Album>>,
        },
        currentTrackId: {
            type: Object as PropType<TrackId | undefined>,
        },
        trackButtonClicked: {
            required: true,
            type: Function as PropType<(trackId: TrackId) => void>,
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
        doesTrackMatchId,
        idForTrack,
    }
});
</script>