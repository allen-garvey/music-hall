import { Track } from './tracks';

export enum PlayState {
    IS_LOADING = 1,
    IS_PLAYING = 2,
    IS_PAUSED = 3,
    IS_EMPTY = 4,
};

export interface TrackIndex {
    albumIndex: number;
    trackIndex: number;
}

export const areTrackIndexesEqual = (currentTrackIndex: TrackIndex | undefined, trackIndex: TrackIndex): boolean => {
    if(currentTrackIndex === undefined){
        return false;
    }
    return currentTrackIndex.albumIndex === trackIndex.albumIndex 
        && currentTrackIndex.trackIndex === trackIndex.trackIndex;
};

const extensionForTrack = (isMp3: boolean, canPlayOpus: boolean): string => {
    if(canPlayOpus){
        return 'opus';
    }
    if(isMp3){
        return 'mp3';
    }
    return 'm4a';
};

export const mediaUrlForTrack = (track: Track, canPlayOpus: boolean): string => {
    const extension = extensionForTrack(!!track.isMp3, canPlayOpus);
    return `/media/music/${track.filename}.${extension}`;
};
