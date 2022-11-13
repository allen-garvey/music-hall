import { RouteRecordRaw } from 'vue-router';
import TrackList from '../components/track-list.vue';

export const routes: RouteRecordRaw[] = [
    {
        path: '/player/',
        children: [
            {
                path: '',
                name: 'home',
                component: TrackList,
            },
            {
                path: 'track/:filename(.*)',
                name: 'trackShow',
                component: TrackList,
            },
        ]
    },
];
