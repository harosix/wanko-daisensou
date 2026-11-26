export const stageVariation = {
    stage1: {
        id: 1,
        stageMaxHp: 1000,
        stageHp: 1000,
        enemyWaves: [
            { key: 'snake', count: 6, interval: 5000 },
        ],
        clearResult: {
            gold: 40,
            ticketDropRate: 20,
            firstClearReward: {
                gold: 50,
                tickets: 1,
            },
            items: [
                { key: 'dogStone', count: 1 },
            ],
        },
        stageProperty: {
            image: {
                backImage: './images/backgrounds/battleField/back/stage1.png',
                groundImage: './images/backgrounds/battleField/ground/ground1.png',
            },
            bgm: {
                stageBgm: './bgm/battle/battleBgm1.mp3',
            }
        },
    },
    stage2: {
        id: 2,
        stageMaxHp: 1500,
        stageHp: 1500,
        enemyWaves: [
            { key: 'snake', count: 4, interval: 5000 },
            { key: 'hentai', count: 6, interval: 5000 },
        ],
        clearResult: {
            gold: 70,
            ticketDropRate: 20,
            firstClearReward: {
                gold: 50,
                tickets: 1,
            },
            items: [
                { key: 'dogStone', count: 1 },
            ],
        },
        stageProperty: {
            image: {
                backImage: './images/backgrounds/battleField/back/stage1.png',
                groundImage: './images/backgrounds/battleField/ground/ground1.png',
            },
            bgm: {
                stageBgm: './bgm/battle/battleBgm1.mp3',
            }
        },
    },
    stage3: {
        id: 3,
        stageMaxHp: 2000,
        stageHp: 2000,
        enemyWaves: [
            { key: 'snake', count: 2, interval: 3000 },
            { key: 'hentai', count: 8, interval: 4000 },
            { key: 'pierrot', count: 5, interval: 5000 },
        ],
        clearResult: {
            gold: 100,
            ticketDropRate: 20,
            firstClearReward: {
                gold: 50,
                tickets: 2,
            },
            items: [
                { key: 'dogStone', count: 1 },
            ],
        },
        stageProperty: {
            image: {
                backImage: './images/backgrounds/battleField/back/stage1.png',
                groundImage: './images/backgrounds/battleField/ground/ground1.png',
            },
            bgm: {
                stageBgm: './bgm/battle/battleBgm1.mp3',
            }
        },
    },
    stage4: {
        id: 4,
        stageMaxHp: 2500,
        stageHp: 2500,
        enemyWaves: [
            { key: 'pierrot', count: 12, interval: 5000 },
            { key: 'daibutuSan', count: 3, interval: 4000 },
        ],
        clearResult: {
            gold: 120,
            ticketDropRate: 20,
            firstClearReward: {
                gold: 100,
                tickets: 1,
            },
            items: [
                { key: 'dogStone', count: 1 },
            ],
        },
        stageProperty: {
            image: {
                backImage: './images/backgrounds/battleField/back/stage2.png',
                groundImage: './images/backgrounds/battleField/ground/ground1.png',
            },
            bgm: {
                stageBgm: './bgm/battle/battleBgm1.mp3',
            }
        },
    },
    stage5: {
        id: 5,
        stageMaxHp: 3000,
        stageHp: 3000,
        enemyWaves: [
            { key: 'pierrot', count: 5, interval: 5000 },
            { key: 'daibutuSan', count: 10, interval: 5000 },
            { key: 'saruoKun', count: 5, interval: 5000 },
        ],
        clearResult: {
            gold: 160,
            ticketDropRate: 25,
            firstClearReward: {
                gold: 100,
                tickets: 1,
            },
            items: [
                { key: 'dogStone', count: 1 },
            ],
        },
        stageProperty: {
            image: {
                backImage: './images/backgrounds/battleField/back/stage2.png',
                groundImage: './images/backgrounds/battleField/ground/ground1.png',
            },
            bgm: {
                stageBgm: './bgm/battle/battleBgm1.mp3',
            }
        },
    },
    stage6: {
        id: 6,
        stageMaxHp: 5000,
        stageHp: 5000,
        enemyWaves: [
            { key: 'daibutuSan', count: 10, interval: 4000 },
            { key: 'saruoKun', count: 5, interval: 3000 },
            { key: 'kanikuraSan', count: 5, interval: 4000 },
        ],
        clearResult: {
            gold: 200,
            ticketDropRate: 25,
            firstClearReward: {
                gold: 150,
                tickets: 3,
            },
            items: [
                { key: 'dogStone', count: 1 },
            ],
        },
        stageProperty: {
            image: {
                backImage: './images/backgrounds/battleField/back/stage2.png',
                groundImage: './images/backgrounds/battleField/ground/ground1.png',
            },
            bgm: {
                stageBgm: './bgm/battle/battleBgm1.mp3',
            }
        },
    },
    // stage7: {
    //     id: 7,
    //     stageMaxHp: 5000,
    //     stageHp: 5000,
    //     enemyWaves: [
    //         [
    //             { key: 'daibutuSan', count: 10, interval: 4000 },
    //             { key: 'saruoKun', count: 5, interval: 3000 },
    //             { key: 'kanikuraSan', count: 5, interval: 4000 },
    //         ],
    //         [
    //             { key: 'daibutuSan', count: 10, interval: 4000 },
    //             { key: 'saruoKun', count: 5, interval: 3000 },
    //             { key: 'kanikuraSan', count: 5, interval: 4000 },
    //         ],
    //     ],
    //     clearResult: {
    //         gold: 300,
    //         ticketDropRate: 28,
    //         firstClearReward: {
    //             gold: 150,
    //             tickets: 1,
    //         },
    //         items: [
    //             { key: 'dogStone', count: 1 },
    //         ],
    //     },
    //     stageProperty: {
    //         image: {
    //             backImage: './images/backgrounds/battleField/back/stage2.png',
    //             groundImage: './images/backgrounds/battleField/ground/ground1.png',
    //         },
    //         bgm: {
    //             stageBgm: './bgm/battle/battleBgm1.mp3',
    //         }
    //     },
    // },
};
