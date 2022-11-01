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
    hofstraBigBand = 'Hofstra University Jazz Ensemble',
    superbad = 'Superbad Quartet',
    superbadQuintet = 'Superbad Quintet',
}
export interface Track {
    title: string;
    year: number;
    length: number; // length in seconds
    filename: string;
    isMp3?: boolean;
    isAac?: boolean;
}

interface AlbumMeta {
    title: string;
    artist: Artist;
    description?: string[];
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
                title: 'Marching Orders',
                // completion_date: '2014-01-05',
                year: 2014,
                filename: 'rise-and-fall/marching-orders',
                length: 225,
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
                title: 'This Could Be The Start Of Something',
                // completion_date: '2013-10-25',
                year: 2013,
                filename: 'primary-colors/This%20Could%20Be%20The%20Start%20Of%20Something',
                isAac: true,
                length: 239,
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
                title: 'Return of the ___',
                // completion_date: '2013-10-25',
                year: 2013,
                filename: 'primary-colors/Return%20of%20the ___',
                isMp3: true,
                length: 156,
            },
            {
                title: 'Darksides',
                // completion_date: '2014-01-03',
                year: 2014,
                filename: 'primary-colors/darksides',
                length: 260,
            },
            {
                title: 'By The Seashore',
                // completion_date: '2013-10-25',
                year: 2013,
                filename: 'primary-colors/By%20The%20Seashore',
                isAac: true,
                length: 253,
            },
            {
                title: 'Sometimes I Miss You So Much',
                // completion_date: '2014-01-16',
                year: 2014,
                filename: 'primary-colors/Sometimes%20I%20Miss%20You%20So%20Much',
                isAac: true,
                length: 257,
            },
            {
                title: 'After the Storm',
                // completion_date: '2014-01-16',
                year: 2014,
                filename: 'primary-colors/after-the-storm',
                length: 306,
            },
            {
                title: 'Interstellar Funk',
                // completion_date: '2013-10-25',
                year: 2013,
                filename: 'primary-colors/Interstellar%20Funk',
                isMp3: true,
                length: 227,
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
                title: 'Dream',
                // completion_date: '2013-06-10',
                year: 2013,
                filename: 'primary-colors/dream',
                length: 225,
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
            description: [
                'Sky Meditation: Kathleen Vermaelen - flute',
                'Prelude to the Rest of Your Life: David Salazar, AnnMarie Buonaspina - violins, Steve Baker - electric guitar, Francisco Salazar - cello',
                'Nighthawk, I Need A Vacation: Hofstra University Jazz Dectet'
            ],
        },
        tracks: [
            {
                title: 'Sky Meditation',
                year: 2009,
                filename: 'senior-recital/Sky%20Meditation',
                isMp3: true,
                length: 278,
            },
            {
                title: 'Prelude to the Rest of Your Life',
                year: 2009,
                filename: 'senior-recital/Prelude%20to%20the%20Rest%20of%20Your%20Life',
                isMp3: true,
                length: 235,
            },
            {
                title: 'Nighthawk',
                year: 2009,
                filename: 'senior-recital/Nighthawk',
                isMp3: true,
                length: 322,
            },
            {
                title: 'I Need A Vacation',
                year: 2009,
                filename: 'senior-recital/I%20Need%20A%20Vacation',
                isMp3: true,
                length: 183,
            },
        ],
    },
    {
        meta: {
            title: 'With the Hofstra University Jazz Ensemble',
            artist: Artist.hofstraBigBand,
            coverImage: 'allen-garvey-junior-composition-recital.webp',
            tags: [Tag.jazz],
            description: ['Surprise Party - Symphony No. 94 Mvt. II by Joseph Haydn arr. by Allen Garvey'],
        },
        tracks: [
            {
                title: 'Summer in New England',
                year: 2008,
                filename: 'hofstra-big-band/Summer%20in%20New%20England',
                isMp3: true,
                length: 240,
            },
            {
                title: 'Surprise Party',
                year: 2009,
                filename: 'hofstra-big-band/Surprise%20Party',
                isMp3: true,
                length: 371,
            },
        ],
    },
    {
        meta: {
            title: '5/13/09 Jam',
            artist: Artist.superbadQuintet,
            coverImage: 'departure-of-adam-pin.webp',
            tags: [Tag.jazz],
            description: [
                'Trumpet: Dan Wendelken',
                'Sax: Brian Carter',
                'Piano: Tim Zerone',
                'Bass: Allen Garvey',
                'Drums: Jordan Chiolis',
            ],
        },
        tracks: [
            {
                title: 'Have You Met Miss Jones?',
                year: 2009,
                filename: 'superbad-quartet/5-13-09-jam/Have%20You%20Met%20Miss%20Jones',
                isMp3: true,
                length: 545,
            },
            {
                title: 'Eye of the Hurricane',
                year: 2009,
                filename: 'superbad-quartet/5-13-09-jam/Eye%20of%20the%20Hurricane',
                isMp3: true,
                length: 767,
            },
            {
                title: 'Longing',
                year: 2009,
                filename: 'superbad-quartet/5-13-09-jam/Longing',
                isMp3: true,
                length: 578,
            },
        ],
    },
    {
        meta: {
            title: 'The Departure of Adam Pin',
            artist: Artist.superbad,
            coverImage: 'departure-of-adam-pin.webp',
            tags: [Tag.jazz],
            description: [
                'Sax: Brian Carter',
                'Piano: Tim Zerone',
                'Bass: Allen Garvey',
                'Drums: Adam Pin',
            ],
            // date: '2008-12'
        },
        tracks: [
            {
                "title": "Speak No Evil",
                "year": 2008,
                "filename": "superbad-quartet/the-departure-of-adam-pin/01%20Speak%20No%20Evil",
                "isMp3": true,
                "length": 577,
            },
            {
                "title": "Blue In Green (take 2)",
                "year": 2008,
                "filename": "superbad-quartet/the-departure-of-adam-pin/02%20Blue%20In%20Green%20(take%202)",
                "isMp3": true,
                "length": 1282,
            },
            {
                "title": "Blue In Green (take 1)",
                "year": 2008,
                "filename": "superbad-quartet/the-departure-of-adam-pin/03%20Blue%20In%20Green%20(take%201)",
                "isMp3": true,
                "length": 178,
            },
            {
                "title": "Night And Day (take 1)",
                "year": 2008,
                "filename": "superbad-quartet/the-departure-of-adam-pin/04%20Night%20And%20Day%20(take%201)",
                "isMp3": true,
                "length": 701,
            },
            {
                "title": "Night And Day (take 2)",
                "year": 2008,
                "filename": "superbad-quartet/the-departure-of-adam-pin/05%20Night%20And%20Day%20(take%202)",
                "isMp3": true,
                "length": 477,
            },
            {
                "title": "Pent-Up House",
                "year": 2008,
                "filename": "superbad-quartet/the-departure-of-adam-pin/06%20Pent-Up%20House",
                "isMp3": true,
                "length": 602,
            },
            {
                "title": "C-Jam Blues",
                "year": 2008,
                "filename": "superbad-quartet/the-departure-of-adam-pin/07%20C-Jam%20Blues",
                "isMp3": true,
                "length": 681,
            }
        ],
    },
    {
        meta: {
            title: '5/16/08 Jam',
            artist: Artist.feldergarb,
            coverImage: 'feldergarb-trio.webp',
            tags: [Tag.jazz],
            description: [
                'Guitar: Dave Powell',
                'Bass: Allen Garvey',
                'Drums: Adam Pin'
            ],
        },
        tracks: [
            {
                "title": "Nostalgia in Times Square",
                "year": 2008,
                "filename": "feldergarb-trio/5-16-08-jam/01%20Nostalgia%20in%20Times%20Square",
                "isMp3": true,
                "length": 370
            },
            {
                "title": "There Is No Greater Love",
                "year": 2008,
                "filename": "feldergarb-trio/5-16-08-jam/02%20There%20Is%20No%20Greater%20Love",
                "isMp3": true,
                "length": 485
            },
            {
                "title": "Blue Bossa",
                "year": 2008,
                "filename": "feldergarb-trio/5-16-08-jam/03%20Blue%20Bossa",
                "isMp3": true,
                "length": 406
            },
            {
                "title": "Pent-Up House",
                "year": 2008,
                "filename": "feldergarb-trio/5-16-08-jam/04%20Pent-Up%20House",
                "isMp3": true,
                "length": 393
            },
            {
                "title": "Misty",
                "year": 2008,
                "filename": "feldergarb-trio/5-16-08-jam/05%20Misty",
                "isMp3": true,
                "length": 589
            },
            {
                "title": "Tenor Madness (take 1)",
                "year": 2008,
                "filename": "feldergarb-trio/5-16-08-jam/06%20Tenor%20Madness%20(take%201)",
                "isMp3": true,
                "length": 385
            },
            {
                "title": "Tenor Madness (take 2)",
                "year": 2008,
                "filename": "feldergarb-trio/5-16-08-jam/07%20Tenor%20Madness%20(take%202)",
                "isMp3": true,
                "length": 255
            },
            {
                "title": "Just Friends",
                "year": 2008,
                "filename": "feldergarb-trio/5-16-08-jam/08%20Just%20Friends",
                "isMp3": true,
                "length": 539
            }
        ],
    },
    {
        meta: {
            title: '1/28/08 Jam',
            artist: Artist.feldergarbWJWells,
            coverImage: 'feldergarb-trio-with-jen-wells.webp',
            tags: [Tag.jazz],
            description: [
                'Guitar: Dave Powell',
                'Piano: Jen Wells',
                'Bass: Allen Garvey',
                'Drums: Adam Pin',
            ],
        },
        tracks: [
            {
                "title": "Someday My Prince Will Come",
                "year": 2008,
                "filename": "feldergarb-trio-w-jen-wells/1-28-08-jam/01%20Someday%20My%20Prince%20Will%20Come",
                "isMp3": true,
                "length": 458,
            },
            {
                "title": "Scrapple From The Apple",
                "year": 2008,
                "filename": "feldergarb-trio-w-jen-wells/1-28-08-jam/02%20Scrapple%20From%20The%20Apple",
                "isMp3": true,
                "length": 435,
            },
            {
                "title": "There Is No Greater Love",
                "year": 2008,
                "filename": "feldergarb-trio-w-jen-wells/1-28-08-jam/03%20There%20Is%20No%20Greater%20Love",
                "isMp3": true,
                "length": 432,
            },
            {
                "title": "Someday My Prince Will Come",
                "year": 2008,
                "filename": "feldergarb-trio-w-jen-wells/1-28-08-jam/04%20Someday%20My%20Prince%20Will%20Come",
                "isMp3": true,
                "length": 445,
            },
            {
                "title": "All Blues",
                "year": 2008,
                "filename": "feldergarb-trio-w-jen-wells/1-28-08-jam/05%20All%20Blues",
                "isMp3": true,
                "length": 1554,
            }
        ],
    },
    {
        meta: {
            title: '10/13/07 Jam',
            artist: Artist.feldergarb,
            coverImage: 'feldergarb-trio.webp',
            tags: [Tag.jazz],
            description: [
                'Guitar: Dave Powell',
                'Bass: Allen Garvey',
                'Drums: Adam Pin'
            ],
        },
        tracks: [
            {
                "title": "Now's The Time",
                "year": 2007,
                "filename": "feldergarb-trio/10-13-07-jam/01%20Now's%20The%20Time",
                "isMp3": true,
                "length": 381
            },
            {
                "title": "Ladybird (take 1)",
                "year": 2007,
                "filename": "feldergarb-trio/10-13-07-jam/02%20Ladybird%20(take%201)",
                "isMp3": true,
                "length": 264
            },
            {
                "title": "Ladybird (take 2)",
                "year": 2007,
                "filename": "feldergarb-trio/10-13-07-jam/03%20Ladybird%20(take%202)",
                "isMp3": true,
                "length": 295
            },
            {
                "title": "Take The A Train",
                "year": 2007,
                "filename": "feldergarb-trio/10-13-07-jam/04%20Take%20The%20A%20Train",
                "isMp3": true,
                "length": 422
            },
            {
                "title": "Romper Stomper",
                "year": 2007,
                "filename": "feldergarb-trio/10-13-07-jam/05%20Romper%20Stomper",
                "isMp3": true,
                "length": 1115
            },
        ],
    },
];