import { RouteRecordRaw } from 'vue-router';
import { albums, Track, Album } from './tracks';
import Page from '../components/page.vue';

interface PageProps {
    albums: Album[];
    shouldShowTrackShareLinks?: boolean;
    shouldShowAlbumShareLinks?: boolean;
    shouldLinkToHome?: boolean;
};

const defaultProps = (): PageProps => {
    return { 
        albums,
        shouldShowAlbumShareLinks: true,
        shouldLinkToHome: true,
    };
};

export const routes: RouteRecordRaw[] = [
    {
        path: '',
        name: 'home',
        component: Page,
        props: defaultProps,
    },
    {
        path: '/player/',
        children: [
            {
                path: 'album/:slug',
                name: 'albumShow',
                component: Page,
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
                component: Page,
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
                        shouldShowTrackShareLinks: false,
                    }
                },
            },
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        component: Page,
        props: defaultProps,
    },
];
