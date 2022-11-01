import { Track } from './tracks';

export enum PlayState {
    IS_LOADING = 1,
    IS_PLAYING = 2,
    IS_PAUSED = 3,
    IS_EMPTY = 4,
};

const extensionForTrack = (isMp3: boolean, canPlayOpus: boolean): string => {
    if(isMp3){
        return 'mp3';
    }
    if(canPlayOpus){
        return 'wav';
    }
    return 'wav';
};

export const mediaUrlForTrack = (track: Track, canPlayOpus: boolean): string => {
    const extension = extensionForTrack(track.isMp3, canPlayOpus);
    return `/media/music/${track.filename}.${extension}`;
};
