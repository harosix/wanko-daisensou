export const characterVariation = {
    wanko: {
        name: 'わんこ', // 主人公
        image: './images/players/wanko.png',
        maxHp: 5,
        atk: 1,
        atkFast: 1000,
        rangeValue: 60, //デフォルト60
        fast: 0.5,
        coolTime: 2000,
        // x: 100, キャラの初期x値
        y: -10,
        size: 60,
        cost: 100,
        trait: ['mainCharacter'],
        rarity: 'N',
        isGacha: false,
        // 下記成長倍率
        status: {
            hpUpMagnification: 0.8, //1レベル上がるごとに加算するHP増加倍率
            atkUpLvInterval: 10, //何レベル置きに攻撃力が増えるか
        }
    },
    kumada: {
        name: 'くま田さん',
        image: './images/players/kumaWan.png',
        maxHp: 8,
        atk: 2,
        atkFast: 1300,
        rangeValue: 60, //デフォルト60
        fast: 0.3,
        coolTime: 4000,
        // x: 100, キャラの初期x値
        y: -5,
        size: 100,
        cost: 200,
        trait: [],
        rarity: 'N',
        isGacha: true,
        // 下記成長倍率
        status: {
            hpUpMagnification: 0.9, //1レベル上がるごとに加算するHP増加倍率
            atkUpLvInterval: 3, //何レベル置きに攻撃力が増えるか
        }
    },
    kamekiti: {
        name: 'かめ吉くん',
        image: './images/players/kameWan.png',
        maxHp: 12,
        atk: 1,
        atkFast: 2000,
        rangeValue: 60, //デフォルト60
        fast: 0.3,
        coolTime: 4000,
        // x: 100, キャラの初期x値
        y: -10,
        size: 90,
        cost: 150,
        trait: [],
        rarity: 'N',
        isGacha: true,
        // 下記成長倍率
        status: {
            hpUpMagnification: 1.3, //1レベル上がるごとに加算するHP増加倍率
            atkUpLvInterval: 15, //何レベル置きに攻撃力が増えるか
        }
    },
    usami: {
        name: 'うさ美ちゃん',
        image: './images/players/usaWan.png',
        maxHp: 3,
        atk: 1,
        atkFast: 700,
        rangeValue: 60, //デフォルト60
        fast: 0.7,
        coolTime: 2000,
        // x: 100, キャラの初期x値
        y: -12,
        size: 60,
        cost: 100,
        trait: [],
        rarity: 'N',
        isGacha: true,
        // 下記成長倍率
        status: {
            hpUpMagnification: 0.6, //1レベル上がるごとに加算するHP増加倍率
            atkUpLvInterval: 10, //何レベル置きに攻撃力が増えるか
        }
    },
    narikinWan: {
        name: '成金ワン',
        image: './images/players/narikinWan.png',
        maxHp: 3,
        atk: 1,
        atkFast: 1400,
        rangeValue: 60, //デフォルト60
        fast: 0.5,
        coolTime: 2000,
        // x: 100, キャラの初期x値
        y: -9,
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
            hpUpMagnification: 0.8, //1レベル上がるごとに加算するHP増加倍率
            atkUpLvInterval: 10, //何レベル置きに攻撃力が増えるか
        }
        //このキャラをロストするとお金をドロップする
    },
    wanKB48: {
        name: 'わんKB48',
        image: './images/players/wanKB48.png',
        maxHp: 5,
        atk: 1,
        atkFast: 950,
        rangeValue: 75, //デフォルト60
        fast: 0.4,
        coolTime: 3000,
        // x: 100, キャラの初期x値
        y: -10,
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
            hpUpMagnification: 0.7, //1レベル上がるごとに加算するHP増加倍率
            atkUpLvInterval: 6, //何レベル置きに攻撃力が増えるか
        }
        // 攻撃時一定確率で動きを止める
    },
    herikopuWan: {
        name: 'ヘリコプワン',
        image: './images/players/herikopuWan.png',
        maxHp: 20,
        atk: 1,
        atkFast: 850,
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
            hpUpMagnification: 0.9, //1レベル上がるごとに加算するHP増加倍率
            atkUpLvInterval: 5, //何レベル置きに攻撃力が増えるか
        }
    }
};

// constructor(name, image, maxHp, hp, atk, atkFast, fast, x, cost) {
//     super(name, image, maxHp, hp, atk, atkFast, fast, x);
//     this.cost = cost;
//     this.attackX = 10;
// }
