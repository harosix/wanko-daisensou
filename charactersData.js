export const characterVariation = {
    wanko: {
        name: 'わんこ', // 主人公
        image: './images/wanko.png',
        maxHp: 5,
        atk: 1,
        atkFast: 1000,
        rangeValue: 60, //デフォルト60
        fast: 0.5,
        coolTime: 2000,
        // x: 100, キャラの初期x値
        y: -6,
        size: 60,
        cost: 100,
        trait: ['mainCharacter'],
        rarity: '???',
        isGacha: false,
        // 下記成長倍率
        status: {
            hpUpMagnification: 1.2, //1レベル上がるごとに加算するHP増加倍率
            atkUpLvInterval: 5, //何レベル置きに攻撃力が増えるか
        }
    },
    kumada: {
        name: 'くま田さん',
        image: './images/kumaWan.png',
        maxHp: 8,
        atk: 2,
        atkFast: 1300,
        rangeValue: 60, //デフォルト60
        fast: 0.3,
        coolTime: 4000,
        // x: 100, キャラの初期x値
        y: 0,
        size: 100,
        cost: 200,
        trait: [],
        rarity: 'N',
        isGacha: true,
        // 下記成長倍率
        status: {
            hpUpMagnification: 1.2, //1レベル上がるごとに加算するHP増加倍率
            atkUpLvInterval: 3, //何レベル置きに攻撃力が増えるか
        }
    },
    kamekiti: {
        name: 'かめ吉くん',
        image: './images/kameWan.png',
        maxHp: 12,
        atk: 1,
        atkFast: 2000,
        rangeValue: 60, //デフォルト60
        fast: 0.3,
        coolTime: 4000,
        // x: 100, キャラの初期x値
        y: -8,
        size: 90,
        cost: 200,
        trait: [],
        rarity: 'N',
        isGacha: true,
        // 下記成長倍率
        status: {
            hpUpMagnification: 1.5, //1レベル上がるごとに加算するHP増加倍率
            atkUpLvInterval: 15, //何レベル置きに攻撃力が増えるか
        }
    },
    usami: {
        name: 'うさ美ちゃん',
        image: './images/usaWan.png',
        maxHp: 3,
        atk: 1,
        atkFast: 500,
        rangeValue: 60, //デフォルト60
        fast: 0.7,
        coolTime: 2000,
        // x: 100, キャラの初期x値
        y: -10,
        size: 60,
        cost: 100,
        trait: [],
        rarity: 'N',
        isGacha: true,
        // 下記成長倍率
        status: {
            hpUpMagnification: 0.9, //1レベル上がるごとに加算するHP増加倍率
            atkUpLvInterval: 10, //何レベル置きに攻撃力が増えるか
        }
    },
    narikinWan: {
        name: '成金ワン',
        image: './images/narikinWan.png',
        maxHp: 3,
        atk: 1,
        atkFast: 1400,
        rangeValue: 60, //デフォルト60
        fast: 0.5,
        coolTime: 2000,
        // x: 100, キャラの初期x値
        y: -6,
        size: 75,
        cost: 150,
        trait: ['goldUp'],
        buff: {
            goldUp: {
                goldMultiValue: 1.2,
            }
        },
        rarity: 'R',
        isGacha: true,
        // 下記成長倍率
        status: {
            hpUpMagnification: 1, //1レベル上がるごとに加算するHP増加倍率
            atkUpLvInterval: 10, //何レベル置きに攻撃力が増えるか
        }
        //このキャラをロストするとお金をドロップする
    },
    wanKB48: {
        name: 'わんKB48',
        image: './images/wanKB48.png',
        maxHp: 5,
        atk: 1,
        atkFast: 950,
        rangeValue: 75, //デフォルト60
        fast: 0.4,
        coolTime: 3000,
        // x: 100, キャラの初期x値
        y: -6,
        size: 75,
        cost: 300,
        trait: ['stopAttack', 'longRange'],
        deBuff: {
            stopAttack: {
                duration: 1500,
                probability: 20
            },
        },
        rarity: 'R',
        isGacha: true,
        // 下記成長倍率
        status: {
            hpUpMagnification: 1, //1レベル上がるごとに加算するHP増加倍率
            atkUpLvInterval: 6, //何レベル置きに攻撃力が増えるか
        }
        // 攻撃時一定確率で動きを止める
    },
    herikopuWan: {
        name: 'ヘリコプワン',
        image: './images/herikopuWan.png',
        maxHp: 20,
        atk: 1,
        atkFast: 800,
        rangeValue: 100, //デフォルト60
        fast: 0.5,
        coolTime: 6000,
        // x: 100, キャラの初期x値
        y: 60,
        size: 100,
        cost: 500,
        trait: ['longRange'],
        rarity: 'SR',
        isGacha: true,
        // 下記成長倍率
        status: {
            hpUpMagnification: 1.1, //1レベル上がるごとに加算するHP増加倍率
            atkUpLvInterval: 5, //何レベル置きに攻撃力が増えるか
        }
    }
};

// constructor(name, image, maxHp, hp, atk, atkFast, fast, x, cost) {
//     super(name, image, maxHp, hp, atk, atkFast, fast, x);
//     this.cost = cost;
//     this.attackX = 10;
// }
