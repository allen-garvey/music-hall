<template>
<div>
    <div
        v-for="album in albums" 
        :key="`${album.meta?.title || 'untitle-album'}-${album.tracks.length}`"
    >
        <div v-if="'meta' in album">
            <h3>{{ album.meta?.title }}</h3>
            <div>{{ yearDescriptionForAlbum(album) }}</div>
            <div>{{ album.meta?.tags.join(' ') }}</div>
        </div>
        <table :class="$style.table">
            <thead>
                <tr>
                    <th :class="$style.playButtonColumn"></th>
                    <th :class="$style.titleColumn">Title</th>
                    <th :class="$style.artistColumn">Artist</th>
                    <th :class="$style.yearColumn">Time</th>
                    <th :class="$style.yearColumn">Year</th>
                    <th :class="$style.tagsColumn">Tags</th>
                </tr>
            </thead>
            <tbody>
                <tr 
                    v-for="track in album.tracks" 
                    :key="`${track.title}-${track.year}`"
                    :class="$style.trackRow"
                >
                    <td :class="$style.iconContainer">
                        <button 
                            @click="() => trackButtonClicked(idForTrack(track))"
                            :title="doesTrackMatchId(currentTrackId, track) ? 'Pause' : 'Play'"
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
                    </td>
                    <td>{{ track.title }}</td>
                    <td :class="$style.deEmphasizeData">{{ track.artist }}</td>
                    <td>{{ formatSeconds(track.length) }}</td>
                    <td>{{ track.year }}</td>
                    <td>{{ track.tags.join(' ') }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
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