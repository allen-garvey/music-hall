import { Album } from './tracks';
import { TrackIndex, PlayState } from './media-helpers';

export interface PageSlotProps {
    albums: Album[];
    currentTrackIndex: TrackIndex|undefined;
    playState: PlayState;
    trackButtonClicked: (trackIndex: TrackIndex) => void;
};