import { Track } from './tracks';

export enum PlayState {
    IS_LOADING = 1,
    IS_PLAYING = 2,
    IS_PAUSED = 3,
    IS_EMPTY = 4,
};

export const mediaUrlForTrack = (track: Track): string => {
    const extension = track.isMp3 ? 'mp3' : 'wav';
    return `/media/music/${track.filename}.${extension}`;
};
