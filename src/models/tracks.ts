enum Tag {
    ambient = 'Ambient',
    darkAmbient = 'Dark Ambient',
    orchestral = 'Orchestral',
    electronic = 'Electronic',
    piano = 'Piano',
    jazz = 'Jazz',
    rock = 'Rock',
    funk = 'Funk',
    rnb = 'RnB',
    pop = 'Pop',
    classical = 'Classical',
};

enum Artist {
    allen = 'Allen Garvey',
}
export interface Track {
    title: string;
    year: number;
    length: number; // length in seconds
    filename: string;
}

interface AlbumMeta {
    title: string;
    description?: string;
    artist: Artist;
    tags: Tag[];
}

export interface Album {
    meta: AlbumMeta;
    tracks: Track[];
}

export const albums: Album[] = [
    {
        meta: {
            title: 'Rise and Fall',
            artist: Artist.allen,
            tags: [Tag.electronic, Tag.classical],
        },
        tracks: [
            {
                title: 'Stirrings of Catharsis',
                // completion_date: '2022-09-06',
                year: 2022,
                filename: 'rise-and-fall/stirrings-of-catharsis',
                length: 131,
            },
            {
                title: 'A New World',
                // completion_date: '2022-07-02',
                year: 2015,
                filename: 'rise-and-fall/a-new-world',
                length: 212,
            },
            {
                title: 'The Last Battle',
                // completion_date: '2014-01-28',
                year: 2014,
                filename: 'rise-and-fall/the-last-battle',
                length: 335,
            },
            {
                title: 'Adieu',
                // completion_date: '2020-06-25',
                year: 2020,
                filename: 'rise-and-fall/adieu',
                length: 102,
            },
            {
                title: 'A Dance of Love and Death',
                year: 2013,
                filename: 'rise-and-fall/a-dance-of-love-and-death',
                length: 372,
            },
        ]
    },
    {
        meta: {
            title: 'Secondary Colors',
            artist: Artist.allen,
            tags: [Tag.electronic],
        },
        tracks: [
            {
                title: 'Acid Confusion',
                // completion_date: '2022-10-20',
                year: 2022,
                filename: 'secondary-colors/acid-confusion',
                length: 145,
            },
            {
                title: 'Out of Sync, Out of Time',
                // completion_date: '2022-04-04',
                year: 2022,
                filename: 'secondary-colors/out-of-sync-out-of-time',
                length: 86,
            },
            {
                title: 'Retrograde Nostalgia',
                year: 2021,
                filename: 'secondary-colors/retrograde-nostalgia',
                length: 122,
            },
            {
                title: 'Shattered Horizons',
                year: 2021,
                filename: 'secondary-colors/shattered-horizons',
                length: 96,
            },
            {
                title: 'Everything In Its Correct Box',
                year: 2021,
                filename: 'secondary-colors/everything-in-its-correct-box',
                length: 109,
            },
            {
                title: 'New City',
                year: 2021,
                filename: 'secondary-colors/new-city',
                length: 166,
            },
            {
                title: 'Suburban Malaise',
                // completion_date: '2020-11-17',
                year: 2020,
                filename: 'secondary-colors/suburban-malaise',
                length: 98,
            },
            {
                title: 'Mechanized Emotion',
                // completion_date: '2022-10-02',
                year: 2020,
                filename: 'secondary-colors/mechanized-emotion',
                length: 190,
            },
            {
                title: 'Woozy Dreamworld',
                // completion_date: '2020-11-18',
                year: 2020,
                filename: 'secondary-colors/woozy-dreamworld',
                length: 105,
            },
            {
                title: 'Dance Rock',
                // completion_date: '2022-09-22',
                year: 2020,
                filename: 'secondary-colors/dance-rock',
                length: 117,
            },
            {
                title: 'Anxiety Jukebox',
                year: 2020,
                // completion_date: '2020-07-11',
                filename: 'secondary-colors/anxiety-jukebox',
                length: 160,
            },
            {
                title: 'Automate the Trulioo Checks!',
                // completion_date: '2022-05-08',
                year: 2022,
                filename: 'secondary-colors/automate-the-trulioo-checks',
                length: 189,
            },
            {
                title: 'Stranger Danger',
                // completion_date: '2022-10-25',
                year: 2014,
                filename: 'secondary-colors/stranger-danger',
                length: 106,
            },
        ],
    },
    {
        meta: {
            title: 'Nightscapes:Dreamscapes',
            artist: Artist.allen,
            tags: [Tag.ambient],
        },
        tracks: [
            {
                title: 'Paths Across The Desert',
                // completion_date: '2022-09-12',
                year: 2017,
                filename: 'nightscapes-dreamscapes/paths-across-the-desert',
                length: 151,
            },
            {
                title: 'Tuesday Morning',
                // completion_date: '2022-10-03',
                year: 2013,
                filename: 'nightscapes-dreamscapes/tuesday-morning',
                length: 282,
            },
            {
                title: 'Crystal Remembrances',
                // completion_date: '2021-03-20',
                year: 2021,
                filename: 'nightscapes-dreamscapes/crystal-remembrances',
                length: 101,
            },
            {
                title: 'Voices in the Dark',
                // completion_date: '2022-09-14',
                year: 2019,
                filename: 'nightscapes-dreamscapes/voices-in-the-dark',
                length: 69,
            },
            {
                title: 'Sound of My Voice',
                // completion_date: '2020-07-02',
                year: 2020,
                filename: 'nightscapes-dreamscapes/sound-of-my-voice',
                length: 157,
            },
            {
                title: 'Sunrise Interpolation',
                // completion_date: '2020-06-25',
                year: 2019,
                filename: 'nightscapes-dreamscapes/sunrise-interpolation',
                length: 102,
            },

        ],
    },
    {
        meta: {
            title: 'Primary Colors',
            artist: Artist.allen,
            tags: [Tag.electronic],
        },
        tracks: [
            {
                title: 'Stranger Danger',
                // completion_date: '2022-10-25',
                year: 2014,
                filename: 'primary-colors/stranger-danger',
                length: 106,
            },

        ],
    },
    {
        meta: {
            title: 'Senior Composition Recital',
            artist: Artist.allen,
            tags: [Tag.classical, Tag.jazz],
        },
        tracks: [],
    },
    {
        meta: {
            title: 'The Departure of Adam Pin',
            artist: Artist.allen,
            tags: [Tag.jazz],
        },
        tracks: [],
    },
    {
        meta: {
            title: 'Junior Composition Recital',
            artist: Artist.allen,
            tags: [Tag.classical, Tag.jazz],
        },
        tracks: [],
    },
    {
        meta: {
            title: 'Feldergarb Trio w/ Jen Wells',
            artist: Artist.allen,
            tags: [Tag.jazz],
        },
        tracks: [],
    },
    {
        meta: {
            title: 'Feldergarb Trio',
            artist: Artist.allen,
            tags: [Tag.jazz],
        },
        tracks: [],
    },
];