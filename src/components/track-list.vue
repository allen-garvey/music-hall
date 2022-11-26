<template>
<div>
    <div
        v-for="album in albums" 
        :key="album.meta.title"
        :class="$style.overallTrackContainer"
    >
        <AlbumHeader 
            :album="album"
            :is-playing="isCurrentTrack(album, 0) && isCurrentlyPlaying"
            :play-button-clicked="() => trackButtonClicked(album, 0)"
            :show-share-link="showAlbumShareLinks"
        />
        <table :class="$style.table">
            <thead>
                <tr>
                    <th :class="$style.playButtonColumn"></th>
                    <th :class="$style.titleColumn">Title</th>
                    <th :class="$style.timeColumn">Time</th>
                    <th :class="$style.yearColumn">Year</th>
                    <th :class="$style.shareColumn" v-if="showShareLinks"></th>
                </tr>
            </thead>
            <tbody>
                <tr 
                    v-for="(track, trackIndex) in album.tracks" 
                    :key="`${album.meta.title}-${track.filename}-${track.title}`"
                    :class="$style.trackRow"
                >
                    <td :class="$style.iconContainer" tabindex="0">
                        <button 
                            @click="() => trackButtonClicked(album, trackIndex)"
                            :title="isCurrentTrack(album, trackIndex) ? 'Pause' : 'Play'"
                            :class="$style.trackButton"
                        >
                            <svg 
                                :class="[$style.icon, $style.playIcon]"
                                viewBox="0 0 24 24"
                            >
                                <use 
                                    xlink:href="#icon-pause"
                                    v-if="isCurrentTrack(album, trackIndex) && isCurrentlyPlaying" />
                                <use 
                                    xlink:href="#icon-play"
                                    v-else />
                            </svg>
                        </button>
                        <span :class="$style.trackNumber">{{ trackIndex + 1 }}</span>
                    </td>
                    <td>{{ track.title }}</td>
                    <td>{{ formatSeconds(track.length) }}</td>
                    <td>{{ track.year }}</td>
                    <td v-if="showShareLinks">
                        <router-link 
                            :to="{ name: 'trackShow', params: { filename: track.filename } }"
                            :class="$style.shareLink"
                        >
                            <svg 
                                :class="$style.icon"
                                viewBox="0 0 24 24"
                            >
                                <use xlink:href="#icon-share" />
                            </svg>
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>

<style lang="scss" module>
    .overallTrackContainer {
        & + & {
            margin-top: 5rem;
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
        width: 4em;
    }
    .shareColumn {
        width: 40px;
    }
    .trackRow {
        td {
            padding: 0.75em 0.25em;
        }

        &:hover, &:focus, &:focus-within {
            background-color: #bdeeff;
            .trackButton, .shareLink {
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
        color: #000;
        opacity: 0.35;
        cursor: pointer;
        
        &:hover {
            opacity: 1;
        }
    }
    .shareLink {
        display: block;
        visibility: hidden;
        padding-right: 12px;
    }
    .playIcon {
        max-height: 100%;
        width: $icon-controls-dimensions;
    }

    @media (hover: none) {
        .trackNumber {
            display: none;
        }
        .trackButton {
            visibility: visible;
        }
    }
</style>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import AlbumHeader from './album-header.vue';
import { Album, Track } from '../models/tracks';
import { PlayState } from '../models/media-helpers';
import { yearDescriptionForAlbum } from '../models/album-helpers';
import { formatSeconds } from '../view-helpers/time';

export default defineComponent({
    props: {
        albums: {
            required: true,
            type: Object as PropType<Array<Album>>,
        },
        isCurrentTrack: {
            required: true,
            type: Function as PropType<(album: Album, trackIndex: number) => boolean>,
        },
        trackButtonClicked: {
            required: true,
            type: Function as PropType<(album: Album, trackIndex: number) => void>,
        },
        playState: {
            type: Number,
            required: true,
        },
        showShareLinks: {
            type: Boolean,
            default: false,
        },
        showAlbumShareLinks: {
            type: Boolean,
            default: true,
        },
    },
    components: {
        AlbumHeader,
    },
    computed: {
        isCurrentlyPlaying(): boolean{
            return this.playState === PlayState.IS_PLAYING || this.playState === PlayState.IS_LOADING;
        },
    },
    methods: {
        formatSeconds,
        yearDescriptionForAlbum,
    }
});
</script>