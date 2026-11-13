export const enemyVariation = {
    // x値はscript側でクラスのインスタンス作成時に直接代入
    snake: {
        name: 'ヘビー',
        image: './images/heavy.png',
        maxHp: 5,
        hp: 5,
        atk: 1,
        atkFast: 1000, // 攻撃速度
        fast: -0.5, // 移動速度
        dropMoney: 40,
    },
    hentai: {
        name: '変態',
        image: '😛',
        maxHp: 8,
        hp: 8,
        atk: 1,
        atkFast: 1000,
        fast: -0.5,
        dropMoney: 50,
    },
    pierrot: {
        name: 'ピエロ',
        image: '🤡',
        maxHp: 15,
        hp: 15,
        atk: 2,
        atkFast: 800,
        fast: -0.5,
        dropMoney: 150,
    },
};


// constructor(name, image, maxHp, hp, atk, atkFast, fast, x, dropMoney) {
//     super(name, image, maxHp, hp, atk, atkFast, fast, x);
//     this.dropMoney = dropMoney;
//     this.attackX = -10;
// }

// const enemy = new Enemy('ヘビー', '🐍', 5, 5, 1, 1000, -0.5, enemyStartX, 40);