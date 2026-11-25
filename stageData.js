export const stageVariation = {
    stage1: {
        id: 1,
        stageMaxHp: 1000,
        stageHp: 1000,
        spawnLimit: 6,
        enemyWaves: [
            { key: 'snake', count: 6 },
        ],
        clearResult: {
            gold: 40,
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
        spawnLimit: 10,
        enemyWaves: [
            { key: 'snake', count: 4 },
            { key: 'hentai', count: 6 },
        ],
        clearResult: {
            gold: 70,
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
        spawnLimit: 15,
        enemyWaves: [
            { key: 'snake', count: 2 },
            { key: 'hentai', count: 8 },
            { key: 'pierrot', count: 5 },
        ],
        clearResult: {
            gold: 100,
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
        spawnLimit: 15,
        enemyWaves: [
            { key: 'pierrot', count: 12 },
            { key: 'daibutuSan', count: 3 },
        ],
        clearResult: {
            gold: 120,
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
        spawnLimit: 20,
        enemyWaves: [
            { key: 'pierrot', count: 5 },
            { key: 'daibutuSan', count: 10 },
            { key: 'saruoKun', count: 5 },
        ],
        clearResult: {
            gold: 160,
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
        spawnLimit: 20,
        enemyWaves: [
            { key: 'daibutuSan', count: 10 },
            { key: 'saruoKun', count: 5 },
            { key: 'kanikuraSan', count: 5 },
        ],
        clearResult: {
            gold: 200,
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
};
