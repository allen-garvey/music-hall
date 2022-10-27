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
    // length: number; // length in seconds
    filename: string;
}

export interface Album extends PlayItem {
    description: string;
    tracks: Track[];
}

export const trackList: Array<Track | Album> = [
    {
        title: 'Acid Confusion',
        artist: Artist.allen,
        // completion_date: '2022-10-20',
        year: 2022,
        tags: [Tag.electronic, Tag.orchestral],
        filename: 'acid-confusion',
    },
    {
        title: 'Stirrings of Catharsis',
        artist: Artist.allen,
        // completion_date: '2022-09-06',
        year: 2022,
        tags: [Tag.orchestral],
        filename: 'stirrings-of-catharsis',
    },
    {
        title: 'Automate the Trulioo Checks!',
        artist: Artist.allen,
        // completion_date: '2022-05-08',
        year: 2022,
        tags: [Tag.electronic, Tag.rnb],
        filename: 'automate-the-trulioo-checks',
    },
    {
        title: 'Out of Sync, Out of Time',
        artist: Artist.allen,
        // completion_date: '2022-04-04',
        year: 2022,
        tags: [Tag.electronic],
        filename: 'out-of-sync-out-of-time',
    },
    {
        title: 'Dance Rock',
        artist: Artist.allen,
        // completion_date: '2022-09-22',
        year: 2020,
        tags: [Tag.electronic, Tag.rock],
        filename: 'dance-rock',
    },
    {
        title: 'Mechanized Emotion',
        artist: Artist.allen,
        // completion_date: '2022-10-02',
        year: 2020,
        tags: [Tag.pop, Tag.piano],
        filename: 'mechanized-emotion',
    },
    {
        title: 'Voices in the Dark',
        artist: Artist.allen,
        // completion_date: '2022-09-14',
        year: 2020,
        tags: [Tag.darkAmbient],
        filename: 'voices-in-the-dark',
    },
    {
        title: 'Paths Across The Desert',
        artist: Artist.allen,
        // completion_date: '2022-09-12',
        year: 2017,
        tags: [Tag.ambient],
        filename: 'paths-across-the-desert',
    },
    {
        title: 'Stranger Danger',
        artist: Artist.allen,
        // completion_date: '2022-10-25',
        year: 2014,
        tags: [Tag.electronic],
        filename: 'stranger-danger',
    },
    {
        title: 'Tuesday Morning',
        artist: Artist.allen,
        // completion_date: '2022-10-03',
        year: 2013,
        tags: [Tag.ambient],
        filename: 'tuesday-morning',
    },
];