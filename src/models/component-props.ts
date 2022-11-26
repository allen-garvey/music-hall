import { Album, Track } from './tracks';
import { PlayState } from './media-helpers';


export interface PageTitleProps {
    text: string;
}
export interface PageSlotProps {
    albums: Album[];
    isCurrentTrack: (album: Album, trackIndex: number) => boolean;
    playState: PlayState;
    trackButtonClicked: (album: Album, trackIndex: number) => void;
};