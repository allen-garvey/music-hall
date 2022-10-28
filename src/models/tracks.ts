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

interface PlayItem {
    title: string;
    artist: Artist;
    tags: Tag[];
}

export interface Track extends PlayItem {
    year: number;
    length: number; // length in seconds
    filename: string;
}

interface AlbumMeta extends PlayItem {
    description?: string;
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
                artist: Artist.allen,
                // completion_date: '2022-09-06',
                year: 2022,
                tags: [Tag.orchestral],
                filename: 'rise-and-fall/stirrings-of-catharsis',
                length: 131,
            },
            {
                title: 'A New World',
                artist: Artist.allen,
                // completion_date: '2022-07-02',
                year: 2015,
                tags: [Tag.electronic, Tag.orchestral],
                filename: 'rise-and-fall/a-new-world',
                length: 212,
            },
            {
                title: 'The Last Battle',
                artist: Artist.allen,
                // completion_date: '2014-01-28',
                year: 2014,
                tags: [Tag.electronic, Tag.orchestral],
                filename: 'rise-and-fall/the-last-battle',
                length: 335,
            },
            {
                title: 'Adieu',
                artist: Artist.allen,
                // completion_date: '2020-06-25',
                year: 2020,
                tags: [Tag.classical, Tag.piano],
                filename: 'rise-and-fall/adieu',
                length: 102,
            },
            {
                title: 'A Dance of Love and Death',
                artist: Artist.allen,
                year: 2013,
                tags: [Tag.classical, Tag.orchestral],
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
                artist: Artist.allen,
                // completion_date: '2022-10-20',
                year: 2022,
                tags: [Tag.electronic, Tag.orchestral],
                filename: 'secondary-colors/acid-confusion',
                length: 145,
            },
            {
                title: 'Out of Sync, Out of Time',
                artist: Artist.allen,
                // completion_date: '2022-04-04',
                year: 2022,
                tags: [Tag.electronic],
                filename: 'secondary-colors/out-of-sync-out-of-time',
                length: 86,
            },
            {
                title: 'Retrograde Nostalgia',
                artist: Artist.allen,
                year: 2021,
                tags: [Tag.electronic],
                filename: 'secondary-colors/retrograde-nostalgia',
                length: 122,
            },
            {
                title: 'Shattered Horizons',
                artist: Artist.allen,
                year: 2021,
                tags: [Tag.electronic],
                filename: 'secondary-colors/shattered-horizons',
                length: 96,
            },
            {
                title: 'Everything In Its Correct Box',
                artist: Artist.allen,
                year: 2021,
                tags: [Tag.electronic],
                filename: 'secondary-colors/everything-in-its-correct-box',
                length: 109,
            },
            {
                title: 'New City',
                artist: Artist.allen,
                year: 2021,
                tags: [Tag.electronic, Tag.pop],
                filename: 'secondary-colors/new-city',
                length: 166,
            },
            {
                title: 'Crystal Remembrances',
                artist: Artist.allen,
                // completion_date: '2021-03-20',
                year: 2021,
                tags: [Tag.darkAmbient],
                filename: 'secondary-colors/crystal-remembrances',
                length: 101,
            },
            {
                title: 'Suburban Malaise',
                artist: Artist.allen,
                // completion_date: '2020-11-17',
                year: 2020,
                tags: [Tag.electronic],
                filename: 'secondary-colors/suburban-malaise',
                length: 98,
            },
            {
                title: 'Mechanized Emotion',
                artist: Artist.allen,
                // completion_date: '2022-10-02',
                year: 2020,
                tags: [Tag.pop, Tag.piano],
                filename: 'secondary-colors/mechanized-emotion',
                length: 190,
            },
            {
                title: 'Woozy Dreamworld',
                artist: Artist.allen,
                // completion_date: '2020-11-18',
                year: 2020,
                tags: [Tag.electronic],
                filename: 'secondary-colors/woozy-dreamworld',
                length: 105,
            },
            {
                title: 'Dance Rock',
                artist: Artist.allen,
                // completion_date: '2022-09-22',
                year: 2020,
                tags: [Tag.electronic, Tag.rock],
                filename: 'secondary-colors/dance-rock',
                length: 117,
            },
            {
                title: 'Anxiety Jukebox',
                artist: Artist.allen,
                year: 2020,
                // completion_date: '2020-07-11',
                tags: [Tag.electronic],
                filename: 'secondary-colors/anxiety-jukebox',
                length: 160,
            },
            {
                title: 'Automate the Trulioo Checks!',
                artist: Artist.allen,
                // completion_date: '2022-05-08',
                year: 2022,
                tags: [Tag.electronic, Tag.rnb],
                filename: 'lightspeed/automate-the-trulioo-checks',
                length: 189,
            },
            {
                title: 'Stranger Danger',
                artist: Artist.allen,
                // completion_date: '2022-10-25',
                year: 2014,
                tags: [Tag.electronic],
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
                title: 'Sound of My Voice',
                artist: Artist.allen,
                // completion_date: '2020-07-02',
                year: 2020,
                tags: [Tag.darkAmbient],
                filename: 'nightscapes-dreamscapes/sound-of-my-voice',
                length: 157,
            },
            {
                title: 'Sunrise Inserpolation',
                artist: Artist.allen,
                // completion_date: '2020-06-25',
                year: 2019,
                tags: [Tag.ambient],
                filename: 'nightscapes-dreamscapes/sunrise-inserpolation',
                length: 102,
            },
            {
                title: 'Voices in the Dark',
                artist: Artist.allen,
                // completion_date: '2022-09-14',
                year: 2019,
                tags: [Tag.darkAmbient],
                filename: 'nightscapes-dreamscapes/voices-in-the-dark',
                length: 69,
            },
            {
                title: 'Paths Across The Desert',
                artist: Artist.allen,
                // completion_date: '2022-09-12',
                year: 2017,
                tags: [Tag.ambient],
                filename: 'nightscapes-dreamscapes/paths-across-the-desert',
                length: 151,
            },
            {
                title: 'Tuesday Morning',
                artist: Artist.allen,
                // completion_date: '2022-10-03',
                year: 2013,
                tags: [Tag.ambient],
                filename: 'nightscapes-dreamscapes/tuesday-morning',
                length: 282,
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
                artist: Artist.allen,
                // completion_date: '2022-10-25',
                year: 2014,
                tags: [Tag.electronic],
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