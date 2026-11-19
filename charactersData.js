export const characterVariation = {
    wanko: {
        name: 'わんこ', // 主人公
        image: './images/wanko.png',
        maxHp: 5,
        atk: 1,
        atkFast: 1000,
        rangeValue: 60, //デフォルト60
        fast: 0.5,
        // x: 100, キャラの初期x値
        y: -6,
        cost: 100,
        trait: [],
        rarity: '???',
        isGacha: false
    },
    kumada: {
        name: 'くま田さん',
        image: './images/kumaWan.png',
        maxHp: 8,
        atk: 2,
        atkFast: 1300,
        rangeValue: 60, //デフォルト60
        fast: 0.3,
        // x: 100, キャラの初期x値
        y: 0,
        size: 100,
        cost: 200,
        trait: [],
        rarity: 'N',
        isGacha: true
    },
    kamekiti: {
        name: '亀吉くん',
        image: './images/kameWan.png',
        maxHp: 12,
        atk: 1,
        atkFast: 2000,
        rangeValue: 60, //デフォルト60
        fast: 0.3,
        // x: 100, キャラの初期x値
        y: -8,
        size: 90,
        cost: 200,
        trait: [],
        rarity: 'N',
        isGacha: true
    },
    usami: {
        name: 'うさ美ちゃん',
        image: './images/usaWan.png',
        maxHp: 3,
        atk: 1,
        atkFast: 500,
        rangeValue: 60, //デフォルト60
        fast: 0.7,
        // x: 100, キャラの初期x値
        y: -10,
        size: 60,
        cost: 150,
        trait: [],
        rarity: 'N',
        isGacha: true
    },
    narikinWan: {
        name: '成金ワン',
        image: './images/narikinWan.png',
        maxHp: 3,
        atk: 1,
        atkFast: 1400,
        rangeValue: 60, //デフォルト60
        fast: 0.5,
        // x: 100, キャラの初期x値
        y: -6,
        size: 75,
        cost: 150,
        trait: ['goldUp'],
        goldMultiValue: 1.2,
        rarity: 'R',
        isGacha: true
    },
    herikopuWan: {
        name: 'ヘリコプワン',
        image: './images/herikopuWan.png',
        maxHp: 10,
        atk: 1,
        atkFast: 800,
        rangeValue: 100, //デフォルト60
        fast: 0.5,
        // x: 100, キャラの初期x値
        y: 60,
        size: 100,
        cost: 100,
        trait: ['rangeAttack'],
        rarity: 'SR',
        isGacha: true
    }
};

// constructor(name, image, maxHp, hp, atk, atkFast, fast, x, cost) {
//     super(name, image, maxHp, hp, atk, atkFast, fast, x);
//     this.cost = cost;
//     this.attackX = 10;
// }
