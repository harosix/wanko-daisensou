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
            gold: 20,
            items: [
                { key: 'dogStone', count: 1 },
            ],
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
            gold: 25,
            items: [
                { key: 'dogStone', count: 1 },
            ],
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
            gold: 30,
            items: [
                { key: 'dogStone', count: 1 },
            ],
        },
    },
};
