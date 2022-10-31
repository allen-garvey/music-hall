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
    feldergarb = 'Feldergarb Trio',
    feldergarbWJWells = 'Feldergarb Trio w/ Jen Wells',
    superbad = 'Superbad Quartet',
}
export interface Track {
    title: string;
    year: number;
    length: number; // length in seconds
    filename: string;
    isMp3?: boolean;
}

interface AlbumMeta {
    title: string;
    artist: Artist;
    description?: string;
    coverImage: string;
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
            coverImage: 'rise-and-fall.webp',
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
                // TODO master and length
                title: 'Marching Orders',
                // completion_date: '2014-01-05',
                year: 2014,
                filename: 'rise-and-fall/marching-orders',
                length: 372,
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
            coverImage: 'secondary-colors.webp',
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
            coverImage: 'nightscapes-dreamscapes.webp',
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
            coverImage: 'primary-colors.webp',
            tags: [Tag.electronic],
        },
        tracks: [
            {
                title: 'Invocation',
                // completion_date: '2014-04-13',
                year: 2014,
                filename: 'primary-colors/invocation',
                length: 131,
            },
            {
                title: 'Just Doin\' What I Do',
                // completion_date: '2013-09-02',
                year: 2013,
                filename: 'primary-colors/just-doin-what-i-do',
                length: 148,
            },
            {
                title: 'Trouble in the Urban Jungle',
                // completion_date: '2013-08-29',
                year: 2013,
                filename: 'primary-colors/trouble-in-the-urban-jungle',
                length: 136,
            },
            {
                title: 'Another World',
                // completion_date: '2013-09-08',
                year: 2013,
                filename: 'primary-colors/another-world',
                length: 135,
            },
            {
                title: 'Race Against Time',
                // completion_date: '2013-08-28',
                year: 2013,
                filename: 'primary-colors/race-against-time',
                length: 171,
            },
            {
                // TODO completion_date, master and length
                title: 'This Could Be The Start Of Something',
                // completion_date: '2013-10-25',
                year: 2013,
                filename: 'primary-colors/this-could-be-the-start-of-something',
                length: 1,
            },
            {
                title: 'Laid Back Trance',
                // completion_date: '2014-03-21',
                year: 2014,
                filename: 'primary-colors/laid-back-trance',
                length: 277,
            },
            {
                title: 'Porta Del Paradiso',
                // completion_date: '2014-03-20',
                year: 2014,
                filename: 'primary-colors/porta-del-paradiso',
                length: 298,
            },
            {
                // TODO completion_date, master and length
                title: 'Return of the ___',
                // completion_date: '2013-10-25',
                year: 2013,
                filename: 'primary-colors/return-of-the-___',
                length: 1,
            },
            {
                title: 'Darksides',
                // completion_date: '2014-01-03',
                year: 2014,
                filename: 'primary-colors/darksides',
                length: 260,
            },
            {
                // TODO completion_date, master and length
                title: 'By The Seashore',
                // completion_date: '2013-10-25',
                year: 2013,
                filename: 'primary-colors/by-the-seashore',
                length: 1,
            },
            {
                // TODO master and length
                title: 'Sometimes I Miss You So Much',
                // completion_date: '2014-01-16',
                year: 2014,
                filename: 'primary-colors/sometimes-i-miss-you-so-much',
                length: 1,
            },
            {
                title: 'After the Storm',
                // completion_date: '2014-01-16',
                year: 2014,
                filename: 'primary-colors/after-the-storm',
                length: 306,
            },
            {
                // TODO completion_date, master and length
                title: 'Interstellar Funk',
                // completion_date: '2013-10-25',
                year: 2013,
                filename: 'primary-colors/interstellar-funk',
                isMp3: true,
                length: 1,
            },
            {
                title: 'All That Glitters',
                // completion_date: '2013-06-03',
                year: 2013,
                filename: 'primary-colors/all-that-glitters',
                length: 129,
            },
            {
                title: 'Toys in the Attic',
                // completion_date: '2013-06-03',
                year: 2013,
                filename: 'primary-colors/toys-in-the-attic',
                length: 89,
            },
            {
                title: 'Looking Back From A Distance',
                // completion_date: '2013-10-25',
                year: 2013,
                filename: 'primary-colors/looking-back-from-a-distance',
                length: 153,
            },
            {
                // TODO completion_date, master and length
                title: 'Dream',
                // completion_date: '2013-10-25',
                year: 2013,
                filename: 'primary-colors/dream',
                length: 1,
            },
            {
                title: 'Last Night',
                // completion_date: '2014-01-01',
                year: 2014,
                filename: 'primary-colors/last-night',
                length: 222,
            },
            {
                title: 'Sunrise on the Moebius Strip',
                // completion_date: '2013-12-21',
                year: 2013,
                filename: 'primary-colors/sunrise-on-the-moebius-strip',
                length: 256,
            },
            {
                title: 'Graduation',
                // completion_date: '2014-03-18',
                year: 2014,
                filename: 'primary-colors/graduation',
                length: 243,
            },
            // {
            //     // TODO master and length
            //     title: 'Like So Many Grains of Sand',
            //     // completion_date: '2014-03-18',
            //     year: 2014,
            //     filename: 'primary-colors/like-so-many-grains-of-sand',
            //     length: 1,
            // },

        ],
    },
    {
        meta: {
            title: 'Senior Composition Recital',
            artist: Artist.allen,
            coverImage: 'allen-garvey-senior-composition-recital.webp',
            tags: [Tag.classical, Tag.jazz],
        },
        tracks: [],
    },
    {
        meta: {
            title: 'The Departure of Adam Pin',
            artist: Artist.superbad,
            coverImage: 'departure-of-adam-pin.webp',
            tags: [Tag.jazz],
        },
        tracks: [],
    },
    {
        meta: {
            title: 'Junior Composition Recital',
            artist: Artist.allen,
            coverImage: 'allen-garvey-junior-composition-recital.webp',
            tags: [Tag.classical, Tag.jazz],
        },
        tracks: [],
    },
    {
        meta: {
            title: '5/16/08 Jam',
            artist: Artist.feldergarb,
            coverImage: 'feldergarb-trio.webp',
            tags: [Tag.jazz],
        },
        tracks: [
            {
                // TODO master and length
                title: 'Nostalgia in Times Square',
                year: 2008,
                filename: 'feldergarb-trio/5-16-08-jam/nostalgia-in-times-square',
                isMp3: true,
                length: 1,
            },
            {
                // TODO master and length
                title: 'There Is No Greater Love',
                year: 2008,
                filename: 'feldergarb-trio/5-16-08-jam/there-is-no-greater-love',
                isMp3: true,
                length: 1,
            },
            {
                // TODO master and length
                title: 'Blue Bossa',
                year: 2008,
                filename: 'feldergarb-trio/5-16-08-jam/blue-bossa',
                isMp3: true,
                length: 1,
            },
            {
                // TODO master and length
                title: 'Pent-Up House',
                year: 2008,
                filename: 'feldergarb-trio/5-16-08-jam/pent-up-house',
                isMp3: true,
                length: 1,
            },
            {
                // TODO master and length
                title: 'Misty',
                year: 2008,
                filename: 'feldergarb-trio/5-16-08-jam/misty',
                isMp3: true,
                length: 1,
            },
            {
                // TODO master and length
                title: 'Tenor Madness (take 1)',
                year: 2008,
                filename: 'feldergarb-trio/5-16-08-jam/tenor-madness-take-1',
                isMp3: true,
                length: 1,
            },
            {
                // TODO master and length
                title: 'Tenor Madness (take 2)',
                year: 2008,
                filename: 'feldergarb-trio/5-16-08-jam/tenor-madness-take-2',
                isMp3: true,
                length: 1,
            },
            {
                // TODO master and length
                title: 'Just Friends',
                year: 2008,
                filename: 'feldergarb-trio/5-16-08-jam/just-friends',
                isMp3: true,
                length: 1,
            },
        ],
    },
    {
        meta: {
            title: '1/28/08 Jam',
            artist: Artist.feldergarbWJWells,
            coverImage: 'feldergarb-trio-with-jen-wells.webp',
            tags: [Tag.jazz],
        },
        tracks: [
            {
                // TODO master and length
                title: 'Someday My Prince Will Come',
                year: 2008,
                filename: 'feldergarb-trio-with-jen-wells/1-28-08-jam/someday-my-prince-will-come',
                isMp3: true,
                length: 1,
            },
            {
                // TODO master and length
                title: 'Scrapple From The Apple',
                year: 2008,
                filename: 'feldergarb-trio-with-jen-wells/1-28-08-jam/scrapple-from-the-apple',
                isMp3: true,
                length: 1,
            },
            {
                // TODO master and length
                title: 'There Is No Greater Love',
                year: 2008,
                filename: 'feldergarb-trio-with-jen-wells/1-28-08-jam/there-is-no-greater-love',
                isMp3: true,
                length: 1,
            },
            {
                // TODO master and length
                title: 'Someday My Prince Will Come',
                year: 2008,
                filename: 'feldergarb-trio-with-jen-wells/1-28-08-jam/someday-my-prince-will-come',
                isMp3: true,
                length: 1,
            },
            {
                // TODO master and length
                title: 'All Blues',
                year: 2008,
                filename: 'feldergarb-trio-with-jen-wells/1-28-08-jam/all-blues',
                isMp3: true,
                length: 1,
            },
        ],
    },
    {
        meta: {
            title: '10/13/07 Jam',
            artist: Artist.feldergarb,
            coverImage: 'feldergarb-trio.webp',
            tags: [Tag.jazz],
        },
        tracks: [
            {
                // TODO master and length
                title: 'Now\'s The Times The Time',
                year: 2007,
                filename: 'feldergarb-trio/10-13-07-jam/nows-the-times-the-time',
                isMp3: true,
                length: 1,
            },
            {
                // TODO master and length
                title: 'Ladybird (take 1)',
                year: 2007,
                filename: 'feldergarb-trio/10-13-07-jam/ladybird-take-1',
                isMp3: true,
                length: 1,
            },
            {
                // TODO master and length
                title: 'Ladybird (take 2)',
                year: 2007,
                filename: 'feldergarb-trio/10-13-07-jam/ladybird-take-2',
                isMp3: true,
                length: 1,
            },
            {
                // TODO master and length
                title: 'Take The A Train',
                year: 2007,
                filename: 'feldergarb-trio/10-13-07-jam/take-the-a-train',
                isMp3: true,
                length: 1,
            },
            {
                // TODO master and length
                title: 'Romper Stomper',
                year: 2007,
                filename: 'feldergarb-trio/10-13-07-jam/romper-stomper',
                isMp3: true,
                length: 1,
            },
            {
                // TODO master and length
                title: 'Someday My Prince Will Come',
                year: 2007,
                filename: 'feldergarb-trio/10-13-07-jam/someday-my-prince-will-come',
                isMp3: true,
                length: 1,
            },
        ],
    },
];