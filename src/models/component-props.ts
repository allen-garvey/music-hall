import { Album, Track } from './tracks';
import { PlayState } from './media-helpers';


export interface PageTitleProps {
    text: string;
}
export interface PageSlotProps {
    albums: Album[];
    currentTrack: Track | undefined;
    playState: PlayState;
    trackButtonClicked: (track: Track) => void;
};