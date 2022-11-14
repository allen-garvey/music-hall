import { RouteRecordRaw } from 'vue-router';
import { albums, Track, Album } from './tracks';
import Player from '../components/player.vue';

interface PageProps {
    albums: Album[];
};

export const routes: RouteRecordRaw[] = [
    {
        path: '/player/',
        children: [
            {
                path: '',
                name: 'home',
                component: Player,
                props(): PageProps {
                    return { albums };
                },
            },
            {
                path: 'album/:slug',
                name: 'albumShow',
                component: Player,
                props(route): PageProps {
                    const album = albums.find(album => album.meta.slug === route.params.slug);
                    return { 
                        albums: album ? [album] : albums,
                    };
                },
            },
            {
                path: 'track/:filename(.*)',
                name: 'trackShow',
                component: Player,
                props(route): PageProps {
                    let currentTrackFilename: string | undefined = route.params.filename as string;
                    if(!currentTrackFilename){
                        return { albums };
                    }
                    currentTrackFilename = currentTrackFilename.split('/').map(path => encodeURIComponent(path)).join('/');
                    const currentAlbum = albums.find(album => 
                        album.tracks.reduce((isFound, track) => isFound || track.filename === currentTrackFilename, false)
                    );
                    if(!currentAlbum){
                        return { albums };
                    }
                    const currentTracks: Track[] = (currentAlbum as Album).tracks.filter(track => track.filename === currentTrackFilename);

                    if(currentTracks.length === 0){
                        return { albums };
                    }
                    
                    return {
                        albums: [
                            {
                                ...currentAlbum,
                                tracks: currentTracks,
                            }
                        ],
                    }
                },
            },
            {
                path: '/:pathMatch(.*)*',
                component: Player,
                props(): PageProps {
                    return { albums };
                },
            }
        ]
    },
];
