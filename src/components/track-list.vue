<template>
<div>
    <div
        v-for="album in albums" 
        :key="album.meta.title"
        :class="$style.overallTrackContainer"
    >
        <AlbumHeader :album="album" />
        <table :class="$style.table">
            <thead>
                <tr>
                    <th :class="$style.playButtonColumn"></th>
                    <th :class="$style.titleColumn">Title</th>
                    <th :class="$style.timeColumn">Time</th>
                    <th :class="$style.yearColumn">Year</th>
                </tr>
            </thead>
            <tbody>
                <tr 
                    v-for="(track, i) in album.tracks" 
                    :key="`${album.meta.title}-${track.title}`"
                    :class="$style.trackRow"
                >
                    <td :class="$style.iconContainer">
                        <button 
                            @click="() => trackButtonClicked(idForTrack(track))"
                            :title="doesTrackMatchId(currentTrackId, track) ? 'Pause' : 'Play'"
                            :class="$style.trackButton"
                        >
                            <svg 
                                :class="$style.icon"
                                viewBox="0 0 24 24"
                            >
                                <use 
                                    xlink:href="#icon-pause"
                                    v-if="doesTrackMatchId(currentTrackId, track) && isCurrentlyPlaying" />
                                <use 
                                    xlink:href="#icon-play"
                                    v-else />
                            </svg>
                        </button>
                        <span :class="$style.trackNumber">{{ i + 1 }}</span>
                    </td>
                    <td>{{ track.title }}</td>
                    <td>{{ formatSeconds(track.length) }}</td>
                    <td>{{ track.year }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>

<style lang="scss" module>
    .overallTrackContainer {
        & + & {
            margin-top: 4rem;
        }
    }
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
        width: 35em;
    }
    .timeColumn {
        width: 6em;
    }
    .yearColumn {
        width: 5em;
    }
    .trackRow {
        td {
            padding: 0.75em 0;
        }

        &:hover {
            background-color: #bdeeff;
            .trackButton {
                visibility: visible;
            }
            .trackNumber {
                display: none;
            }
        }
    }

    $icon-controls-dimensions: 40px;
    .iconContainer {
        display: inline-block;
        position: relative;
        margin-right: 2rem;
        height: $icon-controls-dimensions;
        width: $icon-controls-dimensions;
    }
    .trackButton {
        visibility: hidden;
    }
    .trackNumber {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0.25;
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
import AlbumHeader from './album-header.vue';
import { Album } from '../models/tracks';
import { TrackId, doesTrackMatchId, idForTrack, PlayState } from '../models/types';
import { yearDescriptionForAlbum } from '../models/album-helpers';
import { formatSeconds } from '../view-helpers/time';

export default defineComponent({
    props: {
        albums: {
            required: true,
            type: Object as PropType<Array<Album>>,
        },
        currentTrackId: {
            type: Object as PropType<TrackId | undefined>,
        },
        trackButtonClicked: {
            required: true,
            type: Function as PropType<(trackId: TrackId) => void>,
        },
        playState: {
            type: Number,
            required: true,
        },
    },
    components: {
        AlbumHeader,
    },
    data(){
        return {
        };
    },
    computed: {
        isCurrentlyPlaying(): boolean{
            return this.playState === PlayState.IS_PLAYING || this.playState === PlayState.IS_LOADING;
        },
    },
    methods: {
        doesTrackMatchId,
        idForTrack,
        formatSeconds,
        yearDescriptionForAlbum,
    }
});
</script>