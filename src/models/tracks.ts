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
    },
    {
        title: 'Stirrings of Catharsis',
        artist: Artist.allen,
        // completion_date: '2022-09-06',
        year: 2022,
        tags: [Tag.orchestral],
    },
    {
        title: 'Automate the Trulioo Checks!',
        artist: Artist.allen,
        // completion_date: '2022-05-08',
        year: 2022,
        tags: [Tag.electronic, Tag.rnb],
    },
    {
        title: 'Out of Sync, Out of Time',
        artist: Artist.allen,
        // completion_date: '2022-04-04',
        year: 2022,
        tags: [Tag.electronic],
    },
    {
        title: 'Dance Rock',
        artist: Artist.allen,
        // completion_date: '2022-09-22',
        year: 2020,
        tags: [Tag.electronic, Tag.rock],
    },
    {
        title: 'Mechanized Emotion',
        artist: Artist.allen,
        // completion_date: '2022-10-02',
        year: 2020,
        tags: [Tag.pop, Tag.piano],
    },
    {
        title: 'Voices in the Dark',
        artist: Artist.allen,
        // completion_date: '2022-09-14',
        year: 2020,
        tags: [Tag.darkAmbient],
    },
    {
        title: 'Paths Across The Desert',
        artist: Artist.allen,
        // completion_date: '2022-09-12',
        year: 2017,
        tags: [Tag.ambient],
    },
    {
        title: 'Stranger Danger',
        artist: Artist.allen,
        // completion_date: '2022-10-25',
        year: 2014,
        tags: [Tag.electronic],
    },
    {
        title: 'Tuesday Morning',
        artist: Artist.allen,
        // completion_date: '2022-10-03',
        year: 2013,
        tags: [Tag.ambient],
    },
];