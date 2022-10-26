import { Track } from './tracks';

export enum PlayState {
    IS_LOADING = 1,
    IS_PLAYING = 2,
    IS_PAUSED = 3,
    IS_EMPTY = 4,
};

export interface TrackId {
    slug: string;
    year: number;
};

export const idForTrack = (track: Track): TrackId => {
    return {
        slug: track.title,
        year: track.year,
    };
};

export const doesTrackMatchId = (trackId: TrackId | undefined, track: Track): boolean => {
    if(trackId === undefined){
        return false;
    }
    return trackId.year === track.year && trackId.slug === track.title;
};

export const areTrackIdsEqual = (trackId1: TrackId | undefined, trackId2: TrackId): boolean => {
    if(trackId1 === undefined){
        return false;
    }
    return trackId1.year === trackId2.year && trackId1.slug === trackId2.slug;
}
