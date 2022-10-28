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
    year: number;
    tags: Tag[];
}

export interface Track extends PlayItem {
    length: number; // length in seconds
    filename: string;
}

interface AlbumMeta extends PlayItem {
    description?: string;
}

export interface Album {
    meta?: AlbumMeta;
    tracks: Track[];
}

export const albums: Album[] = [
    {
        tracks: [
            {
                title: 'Acid Confusion',
                artist: Artist.allen,
                // completion_date: '2022-10-20',
                year: 2022,
                tags: [Tag.electronic, Tag.orchestral],
                filename: 'acid-confusion',
                length: 145,
            },
            {
                title: 'Stirrings of Catharsis',
                artist: Artist.allen,
                // completion_date: '2022-09-06',
                year: 2022,
                tags: [Tag.orchestral],
                filename: 'stirrings-of-catharsis',
                length: 131,
            },
            {
                title: 'Automate the Trulioo Checks!',
                artist: Artist.allen,
                // completion_date: '2022-05-08',
                year: 2022,
                tags: [Tag.electronic, Tag.rnb],
                filename: 'automate-the-trulioo-checks',
                length: 189,
            },
            {
                title: 'Out of Sync, Out of Time',
                artist: Artist.allen,
                // completion_date: '2022-04-04',
                year: 2022,
                tags: [Tag.electronic],
                filename: 'out-of-sync-out-of-time',
                length: 86,
            },
            {
                title: 'Dance Rock',
                artist: Artist.allen,
                // completion_date: '2022-09-22',
                year: 2020,
                tags: [Tag.electronic, Tag.rock],
                filename: 'dance-rock',
                length: 117,
            },
            {
                title: 'Mechanized Emotion',
                artist: Artist.allen,
                // completion_date: '2022-10-02',
                year: 2020,
                tags: [Tag.pop, Tag.piano],
                filename: 'mechanized-emotion',
                length: 190,
            },
            {
                title: 'Voices in the Dark',
                artist: Artist.allen,
                // completion_date: '2022-09-14',
                year: 2020,
                tags: [Tag.darkAmbient],
                filename: 'voices-in-the-dark',
                length: 69,
            },
            {
                title: 'Retrograde Nostalgia',
                artist: Artist.allen,
                year: 2021,
                tags: [Tag.electronic],
                filename: 'retrograde-nostalgia',
                length: 122,
            },
            {
                title: 'Shattered Horizons',
                artist: Artist.allen,
                year: 2021,
                tags: [Tag.electronic],
                filename: 'shattered-horizons',
                length: 96,
            },
            {
                title: 'Everything In Its Correct Box',
                artist: Artist.allen,
                year: 2021,
                tags: [Tag.electronic],
                filename: 'everything-in-its-correct-box',
                length: 109,
            },
            {
                title: 'New City',
                artist: Artist.allen,
                year: 2021,
                tags: [Tag.electronic, Tag.pop],
                filename: 'new-city',
                length: 166,
            },
            {
                title: 'Crystal Remembrances',
                artist: Artist.allen,
                // completion_date: '2021-03-20',
                year: 2021,
                tags: [Tag.darkAmbient],
                filename: 'crystal-remembrances',
                length: 101,
            },
            {
                title: 'Suburban Malaise',
                artist: Artist.allen,
                // completion_date: '2020-11-17',
                year: 2020,
                tags: [Tag.electronic],
                filename: 'suburban-malaise',
                length: 98,
            },
            {
                title: 'Woozy Dreamworld',
                artist: Artist.allen,
                // completion_date: '2020-11-18',
                year: 2020,
                tags: [Tag.electronic],
                filename: 'woozy-dreamworld',
                length: 105,
            },
            {
                title: 'Sound of My Voice',
                artist: Artist.allen,
                // completion_date: '2020-07-02',
                year: 2020,
                tags: [Tag.darkAmbient],
                filename: 'sound-of-my-voice',
                length: 157,
            },
            {
                title: 'Sunrise Inserpolation',
                artist: Artist.allen,
                // completion_date: '2020-06-25',
                year: 2020,
                tags: [Tag.ambient],
                filename: 'sunrise-inserpolation',
                length: 102,
            },
            {
                title: 'Adieu',
                artist: Artist.allen,
                // completion_date: '2020-06-25',
                year: 2020,
                tags: [Tag.classical, Tag.piano],
                filename: 'adieu',
                length: 102,
            },
            {
                // TODO find master and length and year
                title: 'Anxiety Jukebox',
                artist: Artist.allen,
                year: 2019,
                tags: [Tag.electronic],
                filename: 'anxiety-jukebox',
                length: 101,
            },
            {
                title: 'Paths Across The Desert',
                artist: Artist.allen,
                // completion_date: '2022-09-12',
                year: 2017,
                tags: [Tag.ambient],
                filename: 'paths-across-the-desert',
                length: 151,
            },
            {
                title: 'Stranger Danger',
                artist: Artist.allen,
                // completion_date: '2022-10-25',
                year: 2014,
                tags: [Tag.electronic],
                filename: 'stranger-danger',
                length: 106,
            },
            {
                // TODO find master and length and year
                title: 'A New World',
                artist: Artist.allen,
                // completion_date: '2022-07-02',
                year: 2014,
                tags: [Tag.electronic],
                filename: 'a-new-world',
                length: 282,
            },
            {
                // TODO find master and length
                title: 'The Last Battle',
                artist: Artist.allen,
                // completion_date: '2014-01-28',
                year: 2014,
                tags: [Tag.electronic, Tag.orchestral],
                filename: 'the-last-battle',
                length: 282,
            },
            {
                title: 'Tuesday Morning',
                artist: Artist.allen,
                // completion_date: '2022-10-03',
                year: 2013,
                tags: [Tag.ambient],
                filename: 'tuesday-morning',
                length: 282,
            },
            {
                // TODO find master and length and year and completion date
                title: 'A Dance of Love and Death',
                artist: Artist.allen,
                // completion_date: '2014-01-28',
                year: 2013,
                tags: [Tag.classical, Tag.orchestral],
                filename: 'a-dance-of-love-and-death',
                length: 282,
            },
        ]
    },
    {
        meta: {
            title: 'Primary Colors',
            artist: Artist.allen,
            year: 2014,
            tags: [Tag.electronic],
        },
        tracks: [],
    },
    {
        meta: {
            title: 'Senior Composition Recital',
            artist: Artist.allen,
            year: 2009,
            tags: [Tag.classical, Tag.jazz],
        },
        tracks: [],
    },
    {
        meta: {
            title: 'The Departure of Adam Pin',
            artist: Artist.allen,
            year: 2008,
            tags: [Tag.jazz],
        },
        tracks: [],
    },
    {
        meta: {
            title: 'Junior Composition Recital',
            artist: Artist.allen,
            year: 2008,
            tags: [Tag.classical, Tag.jazz],
        },
        tracks: [],
    },
    {
        meta: {
            title: 'Feldergarb Trio w/ Jen Wells',
            artist: Artist.allen,
            year: 2008,
            tags: [Tag.jazz],
        },
        tracks: [],
    },
    {
        meta: {
            title: 'Feldergarb Trio',
            artist: Artist.allen,
            year: 2007,
            tags: [Tag.jazz],
        },
        tracks: [],
    },
];