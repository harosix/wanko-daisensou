export const enemyVariation = {
    // x値はscript側でクラスのインスタンス作成時に直接代入
    snake: {
        name: 'ヘビー',
        image: './images/heavy.png',
        maxHp: 5,
        atk: 1,
        atkFast: 1000, // 攻撃速度1000デフォルト
        rangeValue: 60, //デフォルト60
        fast: -0.5, // 移動速度0.5デフォルト
        y: 0,
        size: 60,
        trait: [],
        dropMoney: 40,
    },
    hentai: {
        name: '変態',
        image: '😛',
        maxHp: 12,
        atk: 1,
        atkFast: 1000,
        rangeValue: 60, //デフォルト60
        fast: -0.5,
        y: 0,
        size: 60,
        trait: [],
        dropMoney: 50,
    },
    pierrot: {
        name: 'ピエロ',
        image: '🤡',
        maxHp: 15,
        atk: 2,
        atkFast: 800,
        rangeValue: 60, //デフォルト60
        fast: -0.6,
        y: 0,
        size: 80,
        trait: [],
        dropMoney: 150,
    },
    daibutuSan: {
        name: '大仏さん',
        image: './images/daibutuSan.png',
        maxHp: 40,
        atk: 2,
        atkFast: 1000,
        rangeValue: 60, //デフォルト60
        fast: -0.5,
        y: 0,
        size: 100,
        trait: [],
        dropMoney: 200,
    },
    saruoKun: {
        name: '猿男君',
        image: './images/saruoKun.png',
        maxHp: 50,
        atk: 2,
        atkFast: 900,
        rangeValue: 60, //デフォルト60
        fast: -0.7,
        y: 0,
        size: 90,
        trait: [],
        dropMoney: 250,
    },
    kanikuraSan: {
        name: 'カニ蔵さん',
        image: './images/kanikuraSan.png',
        maxHp: 80,
        atk: 1,
        atkFast: 1000,
        rangeValue: 60, //デフォルト60
        fast: -0.5,
        y: -9,
        size: 70,
        trait: [],
        dropMoney: 250,
    },
    washi: {
        name: 'わっしー',
        image: './images/washi.png',
        maxHp: 30,
        atk: 3,
        atkFast: 800,
        rangeValue: 90, //デフォルト60
        fast: -0.8,
        y: 60,
        size: 80,
        trait: ['rangeAttack'],
        dropMoney: 200,
    }
};

// クラスのインスタンス生成の値
// constructor(name, image, maxHp, atk, atkFast, rangeValue, fast, y, size, trait, dropMoney) {
//     super(name, image, maxHp, atk, atkFast, rangeValue, fast, y, size, trait);
//     this.dropMoney = dropMoney;
//     this.attackX = -10;
// }

// クラスへ渡す処理
// const enemy = new Enemy(enemyObject.name, enemyObject.image,
//     enemyObject.maxHp, enemyObject.atk, enemyObject.atkFast, enemyObject.rangeValue,
//     enemyObject.fast, enemyObject.trait, enemyStartX, enemyObject.y, enemyObject.size, enemyObject.dropMoney);

// objectのキーと値
// snake: {
//     name: 'ヘビー',
//     image: './images/heavy.png',
//     maxHp: 5,
//     atk: 1,
//     atkFast: 1000, // 攻撃速度1000デフォルト
//     rangeValue: 60, //デフォルト60
//     fast: -0.5, // 移動速度0.5デフォルト
//     y: 0, //高低差
//     size: 60, //キャラの大きさ60~65前後が大体デフォルト
//     trait: [],
//     dropMoney: 40,
// },
