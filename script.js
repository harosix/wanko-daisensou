// トップ
/* ========================================
   ① 外部データの読み込み
======================================== */

import { characterVariation } from './charactersData.js';
import { enemyVariation } from './enemyData.js';
import { stageVariation } from './stageData.js';
import { PossessionCharacter } from './ownedCharacters.js';

// ステージデータを配列に変換
const stages = Object.values(stageVariation);

/* ========================================
   起動画面
======================================== */
// 起動画面
const bootScreen = document.getElementById('bootScreen');

// 起動ボタン
const bootBtn = document.getElementById('bootBtn');

/* ========================================
   ② タイトル画面
======================================== */
// 画面
const titleScreen = document.getElementById('titleScreen');

// ボタン
const startBtn = document.getElementById('startBtn');

// セーブデータ削除ボタン
const deleteSaveBtn = document.getElementById('deleteSaveBtn');

/* ========================================
   ③ ホーム画面
======================================== */
// 画面
const homeScreen = document.getElementById('homeScreen');

// ゴールド・チケット
const homeCoins = document.getElementById('homeCoins');
const homeTickets = document.getElementById('homeTickets');

// メニューボタン
const homeStageBtn = document.getElementById('homeStageBtn');
const homePartyBtn = document.getElementById('homePartyBtn');
const homeTrainingBtn = document.getElementById('homeTrainingBtn');
const homeGachaBtn = document.getElementById('homeGachaBtn');

// 戻るボタン
const homeBackBtn = document.getElementById('homeBackBtn');

/* ========================================
   ④ キャラクター編成画面
======================================== */
// 画面
const partyScreen = document.getElementById('partyScreen');

// 編成枠
const partySlots = document.getElementById('partySlots');
const partySlotBtns = document.querySelectorAll('.party-slot');

// 編成数
const partyCount = document.getElementById('partyCount');

// 所持キャラクター一覧
const ownedCharacterList = document.getElementById('ownedCharacterList');
const ownedCount = document.getElementById('ownedCount');

// メッセージ
const partyMessage = document.getElementById('partyMessage');

// ボタン
const partySaveBtn = document.getElementById('partySaveBtn');
const partyBackBtn = document.getElementById('partyBackBtn');

/* ========================================
   ⑤ キャラクター育成画面
======================================== */
// 画面
const trainingScreen = document.getElementById('trainingScreen');

// 所持ゴールド
const trainingCoins = document.getElementById('trainingCoins');

// 所持素材
const trainingMaterialN = document.getElementById('trainingMaterialN');
const trainingMaterialR = document.getElementById('trainingMaterialR');
const trainingMaterialSR = document.getElementById('trainingMaterialSR');

// 所持キャラクター一覧
const trainingCharacterList = document.getElementById('trainingCharacterList');

// メッセージ
const trainingMessage = document.getElementById('trainingMessage');

// 戻るボタン
const trainingBackBtn = document.getElementById('trainingBackBtn');

/* ========================================
   ⑥ キャラクター育成：詳細ポップアップ
======================================== */
// ポップアップ
const trainingOverlay = document.getElementById('trainingOverlay');

// 所持ゴールド
const trainingModalCoins = document.getElementById('trainingModalCoins');

// 所持素材
const popupMaterialN = document.getElementById('popupMaterialN');
const popupMaterialR = document.getElementById('popupMaterialR');
const popupMaterialSR = document.getElementById('popupMaterialSR');

// 閉じるボタン
const trainingCloseBtn = document.getElementById('trainingCloseBtn');

// キャラクター情報
const trainingCharacterImage = document.getElementById('trainingCharacterImage');
const trainingCharacterName = document.getElementById('trainingCharacterName');
const trainingCharacterLevel = document.getElementById('trainingCharacterLevel');

// 基本ステータス
const trainingHp = document.getElementById('trainingHp');
const trainingAtk = document.getElementById('trainingAtk');

// その他ステータス
const trainingAtkFast = document.getElementById('trainingAtkFast');
const trainingRange = document.getElementById('trainingRange');
const trainingFast = document.getElementById('trainingFast');
const trainingUnitCost = document.getElementById('trainingUnitCost');
const trainingType = document.getElementById('trainingType');
const trainingTrait = document.getElementById('trainingTrait');

// レベルアップ
const trainingCost = document.getElementById('trainingCost');
const trainingPopUpText = document.getElementById('trainingPopUpText');
const trainingUpgradeBtn = document.getElementById('trainingUpgradeBtn');

// 強化
const trainingStrengthenCost = document.getElementById('trainingStrengthenCost');
const trainingStrengthenText = document.getElementById('trainingStrengthenText');
const trainingStrengthenBtn = document.getElementById('trainingStrengthenBtn');

// 進化
const trainingEvolutionCondition = document.getElementById('trainingEvolutionCondition');
const trainingEvolutionText = document.getElementById('trainingEvolutionText');
const trainingEvolutionBtn = document.getElementById('trainingEvolutionBtn');

/* ========================================
   ⑦ ガチャ画面
======================================== */
// 画面
const gachaScreen = document.getElementById('gachaScreen');

// 所持チケット
const gachaTickets = document.getElementById('gachaTickets');

// ガチャボタン
const gachaSingleBtn = document.getElementById('gachaSingleBtn');
const gachaTenBtn = document.getElementById('gachaTenBtn');

// メッセージ
const gachaMessage = document.getElementById('gachaMessage');

// ガチャ結果
const gachaResultList = document.getElementById('gachaResultList');

// 戻るボタン
const gachaBackBtn = document.getElementById('gachaBackBtn');

/* ========================================
   ⑧ ステージ選択画面
======================================== */
// 画面
const stageScreen = document.getElementById('stageScreen');

// ステージ選択ボタン
const stageBtns = document.querySelectorAll('.stage-btn');

// ページ切り替えボタン
const prevStagePage = document.getElementById('prevStagePage');
const nextStagePage = document.getElementById('nextStagePage');

// ページ番号表示
const stagePageInfo = document.getElementById('stagePageInfo');

// 戻るボタン
const backTitleBtn = document.getElementById('backTitleBtn');

// オート出撃設定
// ポップアップを開くボタン
const autoSettingBtn = document.getElementById('autoSettingBtn');

// ポップアップ全体
const autoSettingOverlay = document.getElementById('autoSettingOverlay');

// ポップアップを閉じるボタン
const autoSettingCloseBtn = document.getElementById('autoSettingCloseBtn');

// 編成中のキャラクター表示領域
const autoCharacterList = document.getElementById('autoCharacterList');

// メッセージ表示
const autoSettingMessage = document.getElementById('autoSettingMessage');

// 登録ボタン
const autoSaveBtn = document.getElementById('autoSaveBtn');

// 登録解除ボタン
const autoClearBtn = document.getElementById('autoClearBtn');

/* ========================================
   ⑨ 戦闘画面：フィールド・拠点
======================================== */
// 画面・フィールド
const battleScreen = document.getElementById('battleScreen');
const battleField = document.getElementById('battleField');
const characterLayer = document.getElementById('characterLayer');
const ground = document.querySelector('.ground');

// 味方・敵の拠点
const playerBase = document.getElementById('playerBase');
const enemyBase = document.getElementById('enemyBase');

// 拠点HP表示
const playerBaseHp = document.getElementById('playerBaseHp');
const enemyBaseHp = document.getElementById('enemyBaseHp');
const enemyBaseMaxHp = document.getElementById('enemyBaseMaxHp');

// 所持金表示
const money = document.getElementById('money');
const maxMoney = document.getElementById('maxMoney');

// 戦闘メッセージ
const gameMessage = document.getElementById('gameMessage');

/* ========================================
   ⑩ 戦闘画面：操作ボタン
======================================== */
// 砦スキル
const castleSkillBtn = document.getElementById('castleSkillBtn');
const castleSkillText = document.getElementById('castleSkillText');

// お金の増加速度UP
const moneyUpgradeBtn = document.getElementById('moneyUpgradeBtn');
const upgradeCost = document.getElementById('upgradeCost');

// キャラクター出撃ボタン
const spawnDogBtn = document.getElementById('spawnDogBtn');
const spawnUnit2Btn = document.getElementById('spawnUnit2Btn');
const spawnUnit3Btn = document.getElementById('spawnUnit3Btn');
const spawnUnit4Btn = document.getElementById('spawnUnit4Btn');
const spawnUnit5Btn = document.getElementById('spawnUnit5Btn');

// 倍速切り替え
const gameSpeedBtn = document.getElementById('gameSpeedBtn');

// AUTO出撃切り替えボタン
const autoBtn = document.getElementById('autoBtn');

// リタイアボタン
const restartBtn = document.getElementById('restartBtn');

/* ========================================
   ⑪ 勝敗結果ポップアップ
======================================== */
// ポップアップ本体
const resultOverlay = document.getElementById('resultOverlay');

// 結果表示
const resultIcon = document.getElementById('resultIcon');
const resultTitle = document.getElementById('resultTitle');
const resultMessage = document.getElementById('resultMessage');
const resultRewards = document.getElementById('resultRewards');

// ボタン
const retryBtn = document.getElementById('retryBtn');
const resultHomeBtn = document.getElementById('resultHomeBtn');

/* ========================================
   ⑫ 機能解放ポップアップ関連 
======================================== */
// 機能解放ポップアップの要素取得
const unlockOverlay = document.getElementById('unlockOverlay');
const unlockIcon = document.getElementById('unlockIcon');
const unlockTitle = document.getElementById('unlockTitle');
const unlockMessage = document.getElementById('unlockMessage');
const unlockCloseBtn = document.getElementById('unlockCloseBtn');

// ステージクリア時の機能解放のポップアップを書き換える処置
function unlockFunction(icon, title, message) {
    unlockOverlay.hidden = false;
    unlockIcon.textContent = icon;
    unlockTitle.textContent = title;
    unlockMessage.textContent = message;
}

// ポップアップのokボタンを押すと通知を閉じる処理
unlockCloseBtn.addEventListener('click', () => {
    unlockOverlay.hidden = true;
});

/* ========================================
   ⑬ BGM関連 
======================================== */
// タイトル画面のBGM
const titleBgm = new Audio('./bgm/title.mp3');
titleBgm.volume = 0.3;
titleBgm.loop = true;
// ホーム画面のBGM
const homeBgm = new Audio('./bgm/home.mp3');
homeBgm.volume = 0.3;
homeBgm.loop = true;
// ガチャ画面のBGM
const gachaBgm = new Audio('./bgm/gacha.mp3');
gachaBgm.volume = 0.3;
gachaBgm.loop = true;

// バトル画面のBGM
const battleBgm = new Audio();
battleBgm.volume = 0.3;
battleBgm.loop = true;

// リザルト画面のBGM
const resultBgm = new Audio('./bgm/battle/result/resultBgm.mp3');
resultBgm.volume = 0.1;
resultBgm.loop = true;

// BGMを停止させる処理
function bgmChange(stopBgm, startBgm) {
    stopBgm.pause();
    stopBgm.currentTime = 0;
    startBgm.play();
}
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// ------------------------------------------------------------
// 共通の変数

// ゲーム制御
let isGame = true;
// let isBtn = true;
let popUpStatus;
// オート出撃の制御変数
let isAuto = false;

// ゲーム速度
let gameSpeed = 1;
let lastTime = null;

// 出撃キャラクター保管用
const players = [];
const enemies = [];
// オート登録したキャラクター
let autoCharacterData = null;
let autoSaveCharacter = null;

// 砦のオブジェクト
// プレイヤー側の砦情報
const playerCastle = {
    maxHp: 1000,
    hp: 1000,
    level: 1,
    maxMoney: 1000,
    money: 0,
    gold: 0,
};

// レベルアップに必要なお金や素材の管理object
const playerData = {
    gold: 500,
    tickets: 3,
    material: {
        N: 0,
        R: 0,
        SR: 0,
    }
}

// 敵の拠点の位置
let enemyX;
let enemyStartX;
// 味方拠点の位置
let playerX;

// 画面のサイズに変化があった際に縮小率を保存する変数 ※デフォルト１
let battleScale = 1;

// 編成ボタンへ表示するための配列
let partyMember = ['wanko', null, null, null, null,];
// 編成後の配列を保存
let savedParty = [...partyMember];

// ステージ選択されたインスタンス
let currentStage;
// ステージ選択画面の現在のページ
let currentStagePage = 1;
// ステージの開放状況を保存する変数
let currentUnlockedStage = 1;

// データ復元
loadData();

// ------------------------------------------------------------
// プレイヤーと敵の情報
class Character {
    constructor(name, image, maxHp, atk, atkFast, atkRange, fast, trait, x, y, size) {
        this.name = name;
        this.image = image;
        this.maxHp = maxHp;
        this.hp = maxHp;
        this.atk = atk;
        this.atkFast = atkFast;
        this.atkRange = atkRange;
        this.fast = fast;
        this.trait = trait;
        this.x = x;
        this.y = y;
        this.size = size;
        // ここだけの値
        this.lateAttack = 0;
        this.isMoving = true;
    }

    // キャラの横移動時のアニメーション
    characterAnimation() {
        this.moveAnimate = this.character.animate(
            [
                { transform: 'translateY(0px)' },
                { transform: 'translateY(-3px)' },
                { transform: 'translateY(0px)' },
            ],
            {
                duration: 500,
                iterations: Infinity,
            }
        );
    }
    // キャラの攻撃時のアニメーション
    attackAnimation() {
        this.moveAttack = this.character.animate(
            [
                { transform: 'translateX(0px)' },
                { transform: `translateX(${this.attackX}px)` },
                { transform: 'translateX(0px)' }
            ],
            {
                duration: 200,
            },
        )
        this.moveAttack.playbackRate = gameSpeed;
    }

    // キャラの描写処理
    draw() {
        // 要素を作成
        const createCharacter = document.createElement('div');
        const characterImg = document.createElement('img');
        const characterSize = this.size ?? 60;

        // 作成要素に必要な処理を施す
        if (this.image.endsWith('.png')) {
            characterImg.src = this.image;
            createCharacter.appendChild(characterImg);
        } else {
            createCharacter.textContent = this.image;
        }
        createCharacter.classList.add('character');
        createCharacter.style.left = `${this.x}px`;
        createCharacter.style.bottom = `calc(85px + ${this.y}px)`
        characterImg.style.width = `${characterSize}px`;
        characterImg.style.height = `${characterSize}px`;
        // 完成要素のhtml適用
        characterLayer.appendChild(createCharacter);
        // 要素を外で使えるようにする
        this.character = createCharacter;
        this.characterAnimation();
    }

    // 横にスライドさせる
    move() {
        if (this.shouldStop()) {
            // 接敵中は歩く処理停止
            if (this.isMoving) {
                this.moveAnimate.cancel();
                this.isMoving = false;
            }
            return;
        }
        // 接敵以外は歩く処理再開
        if (!this.isMoving) {
            this.moveAnimate.play();
            this.isMoving = true;
        }
        // ゲームスピードに変更があった場合に入れる
        if (this.moveAnimate.playbackRate !== gameSpeed) {
            this.moveAnimate.playbackRate = gameSpeed;
        }
        this.x += this.fast * gameSpeed;
        this.character.style.left = `${this.x}px`;
    }
}

// プレイヤー 子クラス
class Player extends Character {
    constructor(name, image, maxHp, atk, atkFast, atkRange, fast, trait, x, y, size, cost, buff, deBuff) {
        super(name, image, maxHp, atk, atkFast, atkRange, fast, trait, x, y, size);
        this.cost = cost;
        this.buff = buff ?? {};
        this.deBuff = deBuff ?? {};
        // 攻撃モーションのx値
        this.attackX = 10;
    }
    // 接触している敵を1体取得する
    findTarget() {
        const target = enemies.find((enemy) => {
            return enemy.x - (this.x + this.atkRange) <= 0 &&
                this.x <= (enemy.x + 60);
        });
        return target;
    }
    // 接敵している場合、動きを止める
    shouldStop() {
        const target = this.findTarget();
        if (this.x + this.atkRange >= enemyX || target) {
            return true;
        }
    }

    // 接敵している場合、その敵に攻撃する
    attackEnemy() {
        const now = Date.now();
        const target = this.findTarget();

        // 接敵しているか確認
        if (target !== undefined) {
            // 前回の攻撃から１秒以上経過してるか
            if (now - this.lateAttack >= this.atkFast / gameSpeed) {
                target.hp -= this.atk;
                this.lateAttack = now;
                this.attackAnimation();
                // エネミーのHPが０なら要素ごと削除と配列から削除
                enemyKnockDown(target);
            }
        } else {
            // 敵拠点と接触したら
            if (enemyX <= this.x + this.atkRange) {
                if (!isGame) {
                    return;
                }
                // 前回の攻撃から１秒以上経過しているか
                if (now - this.lateAttack >= this.atkFast / gameSpeed) {
                    currentStage.hp -= this.atk * 10;
                    this.lateAttack = now;
                    this.attackAnimation();
                    // 敵拠点のhpが0ならゲームクリア
                    if (currentStage.hp <= 0) {
                        currentStage.hp = Math.max(0, currentStage.hp);
                        const previousUnlockedStage = currentUnlockedStage;
                        const nextStageId = currentStage.id + 1;
                        currentUnlockedStage = Math.max(currentUnlockedStage, nextStageId)
                        stopGame();
                        const clearDrop = giveClearReward();
                        saveData();
                        gameResult('🏆', 'STAGE CLEAR!', '次のステージに挑戦しよう！', 'ステージ選択へ', true, clearDrop);
                        // 強化機能 追加時の通知
                        if (previousUnlockedStage < 4 && currentUnlockedStage >= 4) {
                            unlockFunction('💎', 'キャラクター強化', 'キャラクターの強化機能が解放されました！');
                        }
                    }
                    enemyBaseHp.textContent = currentStage.hp;
                }
            }
        }
    }
}

// キャラクターインスタンスの作成
function createCharacter(data, key) {
    const statusUp = calculateStatus(key);

    return new Player(
        data.name,
        data.image,
        statusUp.currentMaxHp,
        statusUp.currentAtk,
        data.atkFast,
        data.rangeValue, //デフォルト60
        data.fast,
        data.trait,
        100, //出撃位置
        data.y,
        data.size,
        // プレイヤーのみ
        data.cost,
        data.buff,
        data.deBuff,
    );
}

// 敵 子クラス
class Enemy extends Character {
    constructor(name, image, maxHp, atk, atkFast, atkRange, fast, trait, x, y, size, dropMoney) {
        super(name, image, maxHp, atk, atkFast, atkRange, fast, trait, x, y, size);

        this.dropMoney = dropMoney;
        this.attackX = -10;
    }

    // 接触している敵を1体取得する
    findTarget() {
        const target = players.find((player) => {
            return player.x + 60 >= this.x - (this.atkRange - 60) &&
                this.x + 60 >= player.x;
        });
        return target;
    }

    // プレイヤーに接触している場合、動きを止める
    shouldStop() {
        const target = this.findTarget();
        if (this.x - (this.atkRange - 60) <= playerX || target) {
            return true;
        }
    }
    // プレイヤーに接触していれば攻撃する
    attackPlayer() {
        const now = Date.now();
        const target = this.findTarget();
        // プレイヤーに接触しているか
        if (target !== undefined) {
            // 前回の攻撃から一秒以上たっているか
            if (now - this.lateAttack >= this.atkFast / gameSpeed) {
                target.hp -= this.atk;
                this.lateAttack = now;
                this.attackAnimation();
                // プレイヤーのHPが０なら要素を削除と配列から削除
                if (target.hp <= 0) {
                    target.character.remove();
                    const result = players.indexOf(target);
                    players.splice(result, 1);
                }
            }
        } else {
            // プレイヤーの拠点と接触したら
            if (playerX >= this.x - (this.atkRange - 60)) {
                if (!isGame) return;
                // 前回の攻撃から1秒以上経過していたら
                if (now - this.lateAttack >= this.atkFast / gameSpeed) {
                    playerCastle.hp -= this.atk * 10;
                    this.lateAttack = now;
                    this.attackAnimation();
                    // プレイヤーの拠点のhpが０を切ったら
                    if (playerCastle.hp <= 0) {
                        playerCastle.hp = Math.max(0, playerCastle.hp);
                        stopGame();
                        gameResult('😣', 'Game Over', 'キャラを成長させてまた挑戦しよう', 'ホームに戻る', false);
                    }
                    playerBaseHp.textContent = playerCastle.hp;
                }
            }
        }
    }
}

// ステージのクラス
class Stage {
    constructor(id, maxHp, hp, spawnLimit, enemyWaves, clearResult, stageProperty) {
        this.id = id;
        this.maxHp = maxHp;
        this.hp = hp;
        this.spawnLimit = spawnLimit;
        this.enemyWaves = enemyWaves;
        this.clearResult = clearResult;
        this.stageProperty = stageProperty;
    }
}
// ステージインスタンスの生成関数
function createStage(data) {
    return new Stage(
        data.id,
        data.stageMaxHp,
        data.stageHp,
        data.spawnLimit,
        data.enemyWaves,
        data.clearResult,
        data.stageProperty,
    );
}

// ステージの背景と地面を変更する処理
function changeStageImage() {
    battleField.style.backgroundImage = `url('${currentStage.stageProperty.image.backImage}')`;
    ground.style.backgroundImage = `url('${currentStage.stageProperty.image.groundImage}')`;
}
// ステージのBGMを変更する処理
function changeStageBgm() {
    if (currentStage.stageProperty.bgm.stageBgm === '') return;
    battleBgm.src = currentStage.stageProperty.bgm.stageBgm;
    battleBgm.play();
}

// プレイヤーの所持金を表示する関数
function updateGoldDisplay() {
    homeCoins.textContent = playerData.gold;
    trainingCoins.textContent = playerData.gold;
    trainingModalCoins.textContent = playerData.gold;
}
// プレイヤーの所持ガチャチケットを表示する関数
function updateGachaDisplay() {
    homeTickets.textContent = playerData.tickets;
    gachaTickets.textContent = playerData.tickets;
}
// 育成素材素材の表示関数
function updateMaterialDisplay() {
    // 育成画面
    trainingMaterialN.textContent = playerData.material.N;
    trainingMaterialR.textContent = playerData.material.R;
    trainingMaterialSR.textContent = playerData.material.SR;
    // 育成画面のポップアップ
    popupMaterialN.textContent = playerData.material.N;
    popupMaterialR.textContent = playerData.material.R;
    popupMaterialSR.textContent = playerData.material.SR;
}

updateGoldDisplay();
updateGachaDisplay();
updateMaterialDisplay();

// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// リセット類
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// ループ処理キャンセル用
let animationId;

// 自動処理のリセット
function stopGame() {
    isGame = false;
    // 戦闘BGMを停止
    battleBgm.pause();
    battleBgm.currentTime = 0;
    autoIntervalStop();
    cancelAnimationFrame(animationId);
}
// 値のリセット
function resetGame() {
    // プレイヤーの砦の内部HPデータと画面表示HP
    playerCastle.hp = playerCastle.maxHp;
    playerBaseHp.textContent = playerCastle.hp;
    // 現在のステージの敵砦の内部HPデータと画面表示HPとそのステージの現在のステージの最大HP
    currentStage.hp = currentStage.maxHp;
    enemyBaseHp.textContent = currentStage.hp;
    enemyBaseMaxHp.textContent = currentStage.maxHp;
    // ステージの所持金データの内部データと画面表示所持金
    playerCastle.money = 0;
    money.textContent = playerCastle.money;
    // 味方の出撃しているわんこの保存用配列のリセット
    players.length = 0;
    // 敵の出撃している保存用配列のリセット
    enemies.length = 0;
    enemyGoCount = 0;
    enemyElapsedTime = 0;
    // キャラと敵の表示をリセット
    characterLayer.innerHTML = '';
    // 砦のスキルのクールタイムのリセット
    skillRemainingTime = 0;
    castleSkillText.textContent = 'スキル';
    // 所持金の増加速度アップ
    increaseGold = 1;
    increaseGoldLevel = 1;
    moneyElapsedTime = 0;
    upgradeCost.textContent = '100円';
    // 戦闘画面のメッセージのリセット
    gameMessage.textContent = '出撃ボタンを押してゲーム開始！';

    // 倍速ボタンのリセット
    gameSpeed = 1;
    lastTime = null;
    gameSpeedBtn.classList.remove('active');
    gameSpeedBtn.textContent = '▶ ×1';
    // オートボタンをoffにする
    autoBtn.classList.remove('is-active');
    autoBtn.textContent = 'AUTO OFF';
    autoIntervalStop();
    // 出撃のクールタイムをリセット
    lastSpawnTimes = {};
}

// ------------------------------------------------------------
// ポップアップ処理

// ステージクリアおよび敗北時のポップアップの処理
function gameResult(icon, title, message, btnText, isWin, drops) {
    popUpStatus = isWin;
    // 勝利か敗北で表示
    resultOverlay.hidden = false;
    resultBgm.play();
    // 以下は勝利か敗北でテキスト変更
    resultIcon.textContent = icon;
    resultTitle.textContent = title;
    resultMessage.textContent = message;
    resultHomeBtn.textContent = btnText;

    // ステージクリア時
    if (isWin) {
        renderClearRewards(drops);
    } else {
        resultRewards.innerHTML = '';
    }
}
// ステージクリア時に報酬をドロップ
function giveClearReward() {
    // チケットのドロップ時の一時保存変数
    let dropTicket = 0;

    playerData.gold += currentStage.clearResult.gold;
    updateGoldDisplay();

    // ガチャチケの確率を作成
    const dropGachaTicket = Math.floor(Math.random() * 100);
    // 20%でガチャチケドロップ
    if (dropGachaTicket < 20) {
        playerData.tickets += 1;
        dropTicket = 1;
        updateGachaDisplay();
    }

    return {
        dropGold: currentStage.clearResult.gold,
        dropTicket: dropTicket,
    }
}

// ステージクリア時のドロップ品を表示するための要素を作る関数
function renderClearRewards(drops) {
    // 起動時一度リセットをする
    resultRewards.innerHTML = '';

    // 親要素
    const dropRenderSpace = document.createElement('div');
    // 子要素
    const clearResultText = document.createElement('h3');
    const dropGoldElement = document.createElement('p');
    const dropTicketElement = document.createElement('p');

    clearResultText.textContent = 'クリア報酬！';
    dropGoldElement.textContent = `ゴールド:${drops.dropGold}G`;
    //親へ追加
    dropRenderSpace.appendChild(clearResultText);
    dropRenderSpace.appendChild(dropGoldElement);

    // チケットがドロップしていれば
    if (drops.dropTicket > 0) {
        dropTicketElement.textContent = `ガチャチケット:${drops.dropTicket}枚`;
        dropRenderSpace.appendChild(dropTicketElement);
    }
    // htmlへ表示
    resultRewards.appendChild(dropRenderSpace);
}

// 戦闘終了時のリトライボタンの処理
retryBtn.addEventListener('click', () => {
    resultBgm.pause();
    resultBgm.currentTime = 0;
    battleScreen.hidden = true;
    resultOverlay.hidden = true;
    setTimeout(() => {
        stopGame();
        startGame();
    }, 1000);
});
// 戦闘終了時のホームボタンの処理
// ※勝利時と敗北時で処理の内容とテキストが変わる
resultHomeBtn.addEventListener('click', () => {
    battleScreen.hidden = true;
    resultOverlay.hidden = true;
    // 勝利時 true / 敗北時 false
    if (popUpStatus) {
        stageScreen.hidden = false;
        renderStagePage();
    } else {
        homeScreen.hidden = false;
    }
    bgmChange(resultBgm, homeBgm);
});

// リタイアボタン
restartBtn.addEventListener('click', () => {
    if (confirm('リタイアしますか？')) {
        stopGame();
        homeBgm.play();
        battleScreen.hidden = true;
        homeScreen.hidden = false;
    }
});

// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// ホーム画面 ステージ選択等
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// ------------------------------------------------------------
// タイトル画面
// true = 非表示 false = 表示

// クリックすると徐々にタイトル画面へ
bootBtn.addEventListener('click', () => {
    bootScreen.classList.add('fade-out');
    titleBgm.play();
    setTimeout(() => {
        bootScreen.hidden = true;
    }, 1500);
}, { once: true });

// スタートボタンを押すとホーム画面へ
startBtn.addEventListener('click', () => {
    titleScreen.hidden = true;
    homeScreen.hidden = false;
    bgmChange(titleBgm, homeBgm);
});

// セーブデータ削除ボタン
deleteSaveBtn.addEventListener('click', () => {
    if (confirm('本当に削除しますか？')) {
        localStorage.removeItem('playerDates');
        window.alert('削除しました');
        location.reload();
    } else {
        window.alert('キャンセルしました');
    }
});

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// ホームからタイトルへ戻るボタンの処理
homeBackBtn.addEventListener('click', () => {
    titleScreen.hidden = false;
    homeScreen.hidden = true;
    bgmChange(homeBgm, titleBgm);
});

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// ホームからステージ選択画面へ
homeStageBtn.addEventListener('click', () => {
    homeScreen.hidden = true;
    stageScreen.hidden = false;
});
// ステージ選択からホームへ戻る
backTitleBtn.addEventListener('click', () => {
    stageScreen.hidden = true;
    homeScreen.hidden = false;
});
// ステージ選択画面からオート登録ポップアップ表示
autoSettingBtn.addEventListener('click', () => {
    autoCharacterData = autoSaveCharacter;
    autoSettingOverlay.hidden = false;
    autoSettingMessage.textContent = 'キャラを選択してください';
    renderAutoCharacterList();
});
// 閉じるボタン
autoSettingCloseBtn.addEventListener('click', () => {
    if (autoCharacterData !== autoSaveCharacter) {
        if (confirm('このまま閉じると登録されませんがよろしいですか？')) {

        } else {
            return;
        }
    }
    autoCharacterData = autoSaveCharacter;
    autoSettingOverlay.hidden = true;
});

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// ホーム画面から編集画面へ
homePartyBtn.addEventListener('click', () => {
    partyScreen.hidden = false;
    homeScreen.hidden = true;
    renderParty();
    renderOwnedCharacters();
});

// 編集画面からホーム画面へ
partyBackBtn.addEventListener('click', () => {
    partyMember = [...savedParty];
    homeScreen.hidden = false;
    partyScreen.hidden = true;
});

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// ホーム画面からキャラ育成
homeTrainingBtn.addEventListener('click', () => {
    homeScreen.hidden = true;
    trainingScreen.hidden = false;
    // キャラクターの描写関数
    renderTrainingCharacters();
    // 所持金の更新
    updateGoldDisplay();
    // 素材の更新
    updateMaterialDisplay();
    // レベルキャップの解放処理
    unlockLevelUp();
    // ステージ4以降強化機能解禁
    unlockEnhance();
    // ステージ15以降進化機能解禁
    unlockEvolution();
});

// キャラ育成画面からホーム画面
trainingBackBtn.addEventListener('click', () => {
    trainingScreen.hidden = true;
    homeScreen.hidden = false;
});

// 強化機能の解禁条件
function unlockEnhance() {
    if (currentUnlockedStage >= 4) {
        trainingStrengthenBtn.disabled = false;

        // 強化レベルの解放条件
        if (currentUnlockedStage >= 9) {
            return 10;
        } else {
            return 5;
        }
    } else {
        trainingStrengthenBtn.disabled = true;
        return 0;
    }
}
// レベルアップの解禁条件
function unlockLevelUp() {
    if (currentUnlockedStage >= 9) {
        return { maxLevel: 15, message: 'coming soon' };
    } else if (currentUnlockedStage >= 5) {
        return { maxLevel: 10, message: 'ステージ8でレベルキャップ解放' };
    } else {
        return { maxLevel: 5, message: 'ステージ4でレベルキャップ解放' };
    }
}
// 進化の解禁条件
function unlockEvolution() {
    if (currentUnlockedStage >= 15) {
        trainingEvolutionBtn.disabled = false;
    } else {
        trainingEvolutionBtn.disabled = true;
    }
}

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// ホーム画面からガチャ画面
homeGachaBtn.addEventListener('click', () => {
    homeScreen.hidden = true;
    gachaScreen.hidden = false;
    gachaMessage.textContent = '';
    gachaResultList.innerHTML = '';
    bgmChange(homeBgm, gachaBgm);
});

// ガチャ画面からホーム画面
gachaBackBtn.addEventListener('click', () => {
    gachaScreen.hidden = true;
    homeScreen.hidden = false;
    bgmChange(gachaBgm, homeBgm);
});

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// ゲーム開始時とリスタートの処理
function startGame() {
    isGame = true;
    resetGame();

    stageScreen.hidden = true;
    battleScreen.hidden = false;
    resizeBattleScreen();
    changeStageImage();
    changeStageBgm();

    renderSpawnButtons();
    setBattlePosition();
    animationId = requestAnimationFrame(gameLoop);
}

// ステージ選択画面から実際にステージを選択すると戦闘画面へ移行する
stageBtns.forEach((stageBtn, index) => {
    stageBtn.addEventListener('click', () => {
        const stageIndex = (currentStagePage - 1) * 3 + index;
        const stageSelect = stages[stageIndex];
        // ステージの情報がなければ処理終了
        if (stageSelect === undefined) {
            return;
        }
        homeBgm.pause();
        homeBgm.currentTime = 0;
        // 選択されたステージのデータからStageインスタンスを生成して代入
        currentStage = createStage(stageSelect);
        startGame();
    });
});

// ステージ選択画面で次のページをクリックすると移動する処理
nextStagePage.addEventListener('click', () => {
    currentStagePage += 1;
    renderStagePage();
});
prevStagePage.addEventListener('click', () => {
    currentStagePage -= 1;
    renderStagePage();
});

// ステージの見た目を更新する処理
function renderStagePage() {
    const maxStagesPage = Math.ceil(stages.length / 3);
    stagePageInfo.textContent = `${currentStagePage} / ${maxStagesPage}`;
    prevStagePage.disabled = currentStagePage === 1;
    nextStagePage.disabled = currentStagePage === maxStagesPage;

    stageBtns.forEach((stageBtn, index) => {
        const stageNumber = stageBtn.querySelector('.stage-number');
        const stageStatus = stageBtn.querySelector('.stage-status');
        const stageNumberValue = (currentStagePage - 1) * 3 + index + 1;
        // 何ステージ目かの表示
        stageNumber.textContent = stageNumberValue;
        // ステージの配列の数より大きければ
        if (stageNumberValue > stages.length) {
            stageStatus.textContent = '準備中';
            stageBtn.disabled = true;
            return;
        }
        // 現在の解放ステージの数より現ページの各インデックス以下の場合は
        if (currentUnlockedStage >= stageNumberValue) {
            stageStatus.textContent = '解放済み';
            stageBtn.disabled = false;
        } else {
            stageStatus.textContent = '未開放';
            stageBtn.disabled = true;
        }
    });
}
renderStagePage();
// ステージが選択されてからゲーム進行中に使用する値を計算する関数
function setBattlePosition() {
    // 拠点の位置変数
    const playerRect = playerBase.getBoundingClientRect();
    const enemyRect = enemyBase.getBoundingClientRect();
    // キャラと敵の表示領域
    const layerRect = characterLayer.getBoundingClientRect();

    // キャラクターの表示領域の端からみて敵の拠点の最初の接触時のx値
    enemyX = (enemyRect.left - layerRect.left) / battleScale;
    playerX = (playerRect.right - layerRect.left) / battleScale;
    // 敵の出撃位置
    enemyStartX = enemyX - 50;
}

// ------------------------------------------------------------
// オート出撃登録ポップアップの処理

// 登録ボタン
autoSaveBtn.addEventListener('click', () => {
    if (autoCharacterData === null) {
        autoSettingMessage.textContent = 'キャラが選択されていません';
    } else {
        autoSaveCharacter = autoCharacterData;
        saveData();
        autoSettingMessage.textContent = '登録されました';
    }
});
// 登録解除ボタン
autoClearBtn.addEventListener('click', () => {
    autoCharacterData = null;
    autoSaveCharacter = null;
    saveData();
    autoBtnsClassReset();
    autoSettingMessage.textContent = '選択を解除しました';
});

// オート登録画面で
function renderAutoCharacterList() {
    autoCharacterList.innerHTML = '';

    // 編成中のパーティメンバーを表示
    savedParty.forEach((character) => {
        // 親
        const autoCharacterElement = document.createElement('button');
        autoCharacterElement.classList.add('auto-character-card');

        // 配列がnullでなければ
        if (character !== null) {
            const autoCharacterImg = document.createElement('img');
            const autoCharacterName = document.createElement('span');

            autoCharacterImg.src = characterVariation[character].image;
            autoCharacterElement.appendChild(autoCharacterImg);
            autoCharacterName.textContent = characterVariation[character].name;
            autoCharacterElement.appendChild(autoCharacterName);

            if (character === autoSaveCharacter) {
                autoCharacterElement.classList.add('is-selected');
            }

            // 登録ボタンの処理
            autoCharacterElement.addEventListener('click', () => {
                // 全ボタンから選択中のclassを解除
                autoBtnsClassReset();

                autoCharacterData = character;
                autoCharacterElement.classList.add('is-selected');
            });
        } else {
            // 中身がnullならボタン押せない
            autoCharacterElement.disabled = true;
        }

        autoCharacterList.appendChild(autoCharacterElement);
    });
}

// オート登録ポップアップのキャラ選択のエフェクト解除用関数
function autoBtnsClassReset() {
    autoCharacterList.querySelectorAll('.auto-character-card').forEach((btn) => {
        btn.classList.remove('is-selected');
    });
}

// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// 戦闘系
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
let lastGageUpdate = 0;
// 自動処理
function gameLoop(timestamp) {
    if (!isGame) return;

    // 前回の経過時間を保存する変数が空だった場合に、経過時間を代入する
    if (lastTime === null) {
        lastTime = timestamp;
    }

    // ゲーム内の経過時間 ※0.1秒のフレーム上限設定中、これ以上を設定する場合最小値の変更が必要
    const elapsedTime = Math.min(timestamp - lastTime, 100);
    lastTime = timestamp;
    // エネミーの出撃に必要な経過時間
    enemyElapsedTime += elapsedTime * gameSpeed;
    // エネミー出撃のインターバル
    if (enemyElapsedTime >= 5000) {
        enemyGoSet();
        enemyElapsedTime -= 5000;
    }

    // 資金増加に必要な経過時間
    moneyElapsedTime += elapsedTime * gameSpeed;
    // 資金増加処理 ※1フレームにつき最大1回実行
    if (moneyElapsedTime >= 100) {
        increaseMoney();
        moneyElapsedTime -= 100;
    }
    // 資金増加の正確性を優先する場合
    // ※蓄積された経過時間に応じて複数回実行
    // while (moneyElapsedTime >= 100) {
    //     increaseMoney();
    //     moneyElapsedTime -= 100;
    // }

    // オート出撃ボタンがONの時に自動で出撃する処理
    if (isAuto) {
        autoElapsedTime += elapsedTime * gameSpeed;
        if (autoElapsedTime >= 1000) {
            autoSpawn();
            autoElapsedTime -= 1000;
        }
    }

    // 砦のスキルのクールタイムをカウントする処理
    if (skillRemainingTime > 0) {
        skillRemainingTime = Math.max(skillRemainingTime - elapsedTime * gameSpeed, 0);
        updateSkillDisplay();
    }

    const now = Date.now();
    if (now - lastGageUpdate >= 50) {
        // クールタイムゲージの更新
        goCharacterCoolTimeGage();
        lastGageUpdate = now;
    }

    // プレイヤーの自動移動
    players.forEach((player) => {
        player.move();
        player.attackEnemy();
    });

    // エネミーの自動移動
    enemies.forEach((enemyGo) => {
        enemyGo.move();
        enemyGo.attackPlayer();
    });

    // ゲームが終了していれば次のループを予約しない
    if (isGame) {
        animationId = requestAnimationFrame(gameLoop);
    }
}

// ------------------------------------------------------------
// 出撃ボタン関連 / エネミーの出撃
// 出撃時の各キャラのクールタイムを保存するオブジェクト
let lastSpawnTimes = {};

// 主人公出撃ボタン
characterOverHand(spawnDogBtn, 0);
// ２番目出撃ボタン
characterOverHand(spawnUnit2Btn, 1);
// ３番目出撃ボタン
characterOverHand(spawnUnit3Btn, 2);
// ４番目出撃ボタン
characterOverHand(spawnUnit4Btn, 3);
// ５番目出撃ボタン
characterOverHand(spawnUnit5Btn, 4);

// キャラデータをボタンへ渡すの関数
function characterOverHand(btnElement, index) {
    const createPlayer = () => createCharacter(characterVariation[savedParty[index]], savedParty[index]);
    characterGoBtn(btnElement, createPlayer, index);
}
function renderSpawnButtons() {
    const unitBtnsIcons = document.querySelectorAll('.control-panel .unit-icon');
    unitBtnsIcons.forEach((icon, index) => {
        if (savedParty[index] !== null) {
            const img = document.createElement('img');
            img.src = characterVariation[savedParty[index]].image;
            icon.replaceChildren(img);
        } else {
            icon.textContent = '';
        }
    });
    const unitBtnsCost = document.querySelectorAll('.control-panel .unit-cost');
    unitBtnsCost.forEach((cost, costIndex) => {
        if (savedParty[costIndex] !== null) {
            cost.textContent = characterVariation[savedParty[costIndex]].cost + '円';
        } else {
            cost.textContent = '';
        }
    });
}

// 出撃ボタンの共通処理
function characterGoBtn(btnElement, classInstance, index) {
    btnElement.addEventListener('click', () => {
        if (!isGame) return;

        if (savedParty[index] === null) {
            gameMessage.textContent = 'キャラが設定されていません';
            return;
        }
        const characterKey = savedParty[index];
        const player = classInstance();
        spawnCharacter(player, characterKey);
    });
}
// 手動・AUTO共通の出撃処理
function spawnCharacter(player, characterKey) {
    if (players.length < 10) {
        const elapsedTime = getElapsedTime(characterKey);
        if (playerCastle.money < player.cost) {
            gameMessage.textContent = '所持金が足りません';
            return;
        } else if (lastSpawnTimes[characterKey] !== undefined &&
            elapsedTime < characterVariation[characterKey].coolTime / gameSpeed) {
            gameMessage.textContent = 'クールタイム中です'
            return;
        }
        playerCastle.money -= player.cost;
        money.textContent = playerCastle.money;
        players.push(player);
        lastSpawnTimes[characterKey] = Date.now();
        player.draw();
        // ここまで
    } else {
        gameMessage.textContent = 'これ以上出撃できません';
    }
}

// 前回の出撃からどのくらい時間が経ったか計算する関数
function getElapsedTime(characterKey) {
    return Date.now() - lastSpawnTimes[characterKey];
}

// オート出撃した時のゲーム内時間を保存する
let autoElapsedTime = 0;
// オート出撃ボタン
autoBtn.addEventListener('click', () => {
    if (!isGame) return;
    autoBtn.classList.toggle('is-active');
    if (autoBtn.classList.contains('is-active')) {
        // オート出撃設定にキャラクターがいれば
        if (autoSaveCharacter !== null) {
            autoBtn.textContent = 'AUTO ON';
            isAuto = true;
        } else {
            autoBtn.classList.remove('is-active');
            gameMessage.textContent = 'キャラクターが登録されていません';
        }
    } else {
        autoBtn.textContent = 'AUTO OFF';
        autoIntervalStop();
    }
});
// オートがオンの時に自動出撃するキャラクターのデータを取得する処理
function createAutoInterval() {
    if (!isAuto || autoSaveCharacter === null) return;

    return createCharacter(characterVariation[autoSaveCharacter], autoSaveCharacter);
}
// オートボタンが押された時の出撃するキャラを呼び出す処理
function autoSpawn() {
    if (!isAuto || autoSaveCharacter === null) return;
    const characterKey = autoSaveCharacter;
    const autoCharacterData = createAutoInterval();
    spawnCharacter(autoCharacterData, characterKey);
}

// オート出撃のリセット関数
function autoIntervalStop() {
    isAuto = false;
    autoElapsedTime = 0;
}

// 倍速ボタンの処理
gameSpeedBtn.addEventListener('click', () => {
    if (!isGame) return;
    if (gameSpeed === 1) {
        gameSpeed = 2;
        gameSpeedBtn.classList.add('active');

    } else if (gameSpeed === 2) {
        gameSpeed = 1;
        gameSpeedBtn.classList.remove('active');
    }
    gameSpeedBtn.textContent = `▶ ×${gameSpeed}`;
});

const unitBtn = document.querySelectorAll('.control-panel .unit-btn');
// 出撃時のクールタイムを設定する処理
function goCharacterCoolTimeGage() {
    unitBtn.forEach((btn, index) => {
        // 編成のキーが存在しなければ処理を止める
        if (savedParty[index] === null) {
            return;
        }
        const characterKey = savedParty[index];
        const overlays = btn.querySelector('.cooldown-overlay');
        const elapsedTime = getElapsedTime(characterKey);
        const isCoolingDown = elapsedTime < characterVariation[characterKey].coolTime / gameSpeed;

        // 出撃ボタンのキャラに出撃履歴が存在すれば処理を進める
        if (lastSpawnTimes[characterKey] !== undefined && isCoolingDown) {
            const percentage = 100 - (elapsedTime / (characterVariation[characterKey].coolTime / gameSpeed) * 100);
            overlays.style.background = `conic-gradient(rgba(0, 0, 0, 0.6) ${percentage}%, transparent ${percentage}%)`;
        } else {
            overlays.style.background = 'transparent';
        }
    });
}

// エネミーの出撃設定
let enemyElapsedTime = 0;
// エネミーの出撃数
let enemyGoCount = 0;
// エネミーの出撃設定
function enemyGoSet() {
    // ステージのオブジェクトから敵のキーと出撃カウントを含む配列を保存
    const enemyOptions = currentStage.enemyWaves;
    const enemyKey = enemyResultKey(enemyOptions, enemyGoCount);

    // enemyKeyが返して値がundefinedだったら処理を止める
    if (enemyKey === undefined) {
        return;
    }

    // 保存したキーから対象の敵のオブジェクトを取得
    const enemyObject = enemyVariation[enemyKey];

    // 敵のクラスインスタンスを生成
    const enemy = new Enemy(enemyObject.name, enemyObject.image,
        enemyObject.maxHp, enemyObject.atk, enemyObject.atkFast, enemyObject.rangeValue,
        enemyObject.fast, enemyObject.trait, enemyStartX, enemyObject.y, enemyObject.size, enemyObject.dropMoney);
    enemies.push(enemy);
    enemyGoCount++;
    enemy.draw();
}

// 敵のキーを条件ごとに返す処理
function enemyResultKey(enemyOptions, goCount) {
    let count = 0;
    for (let i = 0; i < enemyOptions.length; i++) {
        count += enemyOptions[i].count;
        if (goCount < count) {
            return enemyOptions[i].key;
        }
    }
}

// ------------------------------------------------------------
// 増加用の所持金の初期値
let increaseGold = 1;
// 増加用のレベルの初期値
let increaseGoldLevel = 1;
// 資金増加用の経過時間
let moneyElapsedTime = 0;

// 出撃コスト用所持金の処理
function increaseMoney() {
    playerCastle.money = Math.min(playerCastle.maxMoney, playerCastle.money + increaseGold);
    money.textContent = playerCastle.money;
}
// 出撃コストの増加金額を増やす処理
function increaseGoldLevelFunction() {
    // レベルアップ時の次回レベルアップコストの計算
    const increaseGoldCost = 100 * increaseGoldLevel;
    if (increaseGoldLevel < 5 &&
        playerCastle.money >= increaseGoldCost) {
        playerCastle.money -= increaseGoldCost;
        money.textContent = playerCastle.money;
        increaseGold++;
        increaseGoldLevel++;
        if (increaseGoldLevel >= 5) {
            upgradeCost.textContent = 'Max';
        } else {
            // 所持金増加速度アップボタンのテキストの書き換え
            upgradeCost.textContent = `${increaseGoldLevel * 100}円`;
        }
    } else if (increaseGoldLevel >= 5) {
        gameMessage.textContent = 'すでに最大です';
    } else if (playerCastle.money < increaseGoldCost) {
        gameMessage.textContent = '所持金が足りません';
    }
}

// 金額増加速度UP用のボタン処理
moneyUpgradeBtn.addEventListener('click', () => {
    if (!isGame) return;
    increaseGoldLevelFunction();
});

// ------------------------------------------------------------
// 敵を撃破時の処理
function enemyKnockDown(enemy) {
    // エネミーのHPが０なら要素ごと削除と配列から削除
    if (enemy.hp <= 0) {
        // 敵を撃破時のドロップ金がmax金額を超えないように調整する処理
        playerCastle.money = Math.min(
            playerCastle.maxMoney,
            playerCastle.money + enemy.dropMoney
        );
        money.textContent = playerCastle.money;
        enemy.character.remove();
        const result = enemies.indexOf(enemy);
        // 配列に対象がある場合のみ削除
        if (result !== -1) {
            enemies.splice(result, 1);
        }
    }
}

// ------------------------------------------------------------
// クールタイム用の変数
let skillCoolTime = 10000;
let skillRemainingTime = 0;

// 砦のスキルボタン
castleSkillBtn.addEventListener('click', () => {
    if (!isGame) return;
    const coolTime = castleSkillCooldown();
    // クールタイム中はここで停止
    if (!coolTime) return;

    gameMessage.textContent = '砦のスキルを使用';
});

// 砦のビームの見た目を作成するための要素作り処理
function beamMakeElement() {
    const beamElement = document.createElement('div');
    beamElement.classList.add('beam');
    characterLayer.appendChild(beamElement);
    return beamElement;
}
// 砦のビームアニメーションの処理
function beamMakeAnimation() {
    // ビーム用の表示要素
    const beamElement = beamMakeElement();
    // ビームの高さを計算
    const baseRect = playerBase.getBoundingClientRect();
    const layerRect = characterLayer.getBoundingClientRect();
    const startY = ((baseRect.top + baseRect.height / 2) - layerRect.top) / battleScale - 20;
    const groundY = layerRect.height / battleScale - 85;
    let currentX = 30;
    const distanceX = enemyX - playerX;
    const distanceY = groundY - startY;

    // 一度ビームにあたった敵を判定する変数
    const hitEnemies = new Set();

    // ビームの長さを変更する処理
    function updateBeam(currentX) {
        // currentXを使って角度を計算
        // 角度の計算
        const angle = Math.atan2(distanceY, currentX);
        const angleDeg = angle * 180 / Math.PI;
        // currentXを使って長さを計算
        // 斜めの角度の斜線の長さを計算
        const length = Math.hypot(distanceY, currentX);
        // beamElementの角度と幅を更新
        beamElement.style.transform = `rotate(${angleDeg}deg)`;
        beamElement.style.width = `${length}px`;

    }

    // ビームの動きを付ける処理
    function moveBeam() {
        if (!isGame || !beamElement.isConnected) {
            beamElement.remove();
            return;
        }

        const beamAttackEnemies = [...enemies];
        if (currentX < distanceX) {
            currentX += 8 * gameSpeed;
            updateBeam(currentX);

            // ビームの先端の座標
            const beamTip = playerX + currentX;

            // 敵へのダメージ判定
            beamAttackEnemies.forEach((enemy) => {
                // 敵にビームの先端が届いているか
                if (beamTip >= enemy.x && !hitEnemies.has(enemy)) {
                    hitEnemies.add(enemy);
                    enemy.hp -= 1;
                    // ビームが当たるとノックバックする処理とhp０の敵はそのまま削除に進む
                    if (enemy.hp > 0) {
                        enemy.x += 60;
                        enemy.character.style.left = `${enemy.x}px`;
                    }
                    enemyKnockDown(enemy);
                }
            });

            requestAnimationFrame(moveBeam);
        } else {
            beamElement.remove();
        }
    }

    beamElement.style.left = `${playerX}px`;
    beamElement.style.top = `${startY}px`;

    moveBeam();
}

// 砦のスキルのクールタイム
function castleSkillCooldown() {
    let isCoolTime = true;

    // クールタイム中ならここで処理を停止
    if (skillRemainingTime > 0) {
        gameMessage.textContent = 'クールタイム中です';
        return isCoolTime = false;
    }
    // ↓↓↓↓↓↓以下クールタイム中でなければ↓↓↓↓↓↓
    // クールタイムの残り時間をセット
    skillRemainingTime = skillCoolTime;
    beamMakeAnimation();
    return isCoolTime;
}

function updateSkillDisplay() {
    // クールタイムの１０秒経過後再使用可能の場合if内の処理に入る
    if (skillRemainingTime === 0) {
        castleSkillText.textContent = 'スキル';
        return;
    }
    castleSkillText.textContent = `${Math.ceil(skillRemainingTime / 1000)}秒`;
}

// ------------------------------------------------------------
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// ゲーム中の画面の大小に変更があった時の処理
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// 画面に変化があった際に、座標を計算しなおす処理
function resizeBattleScreen() {
    const style = getComputedStyle(battleScreen);
    const paddingLeft = parseFloat(style.paddingLeft);
    const paddingRight = parseFloat(style.paddingRight);
    const paddingTop = parseFloat(style.paddingTop);
    const paddingBottom = parseFloat(style.paddingBottom);

    const availableWidth = window.innerWidth - paddingLeft - paddingRight;
    const availableHeight = window.innerHeight - paddingTop - paddingBottom;
    // ① ブラウザの幅と高さから縮小率を計算
    const scaleX = availableWidth / 1200;
    const scaleY = availableHeight / 700;
    // ② 縮小率を計算
    battleScale = Math.min(scaleX, scaleY, 1);
    // ③ transform: scale() を適用
    const container = document.querySelector('#battleScreen .game-container');
    container.style.transform = `scale(${battleScale})`;
}
window.addEventListener('resize', () => {
    resizeBattleScreen();
});

// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// 編集画面
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// partySlotBtns[0].disabled = true;

// キャラクターを選択時一時保存する
let selectCharacter = null;

function renderParty() {
    partySlotBtns.forEach((btn, slotIndex) => {
        btn.innerHTML = '';

        const plusElement = document.createElement('span');
        plusElement.classList.add('party-slot-empty');
        plusElement.textContent = '+';
        const smallElement = document.createElement('small');
        smallElement.textContent = `${slotIndex + 1}枠`;
        btn.appendChild(plusElement);
        btn.appendChild(smallElement);
    });

    partyMember.forEach((key, index) => {
        if (key !== null) {
            const character = characterVariation[key];

            // 画像表示用の要素を生成
            const characterElement = document.createElement('img');
            characterElement.classList.add('owned-character-image');
            characterElement.src = character.image;
            // 実際の画面への表示 写真/名前
            partySlotBtns[index].textContent = character.name;
            partySlotBtns[index].appendChild(characterElement);
        }
    });
}

// インポートファイルからキーを取得
function renderOwnedCharacters() {
    ownedCharacterList.innerHTML = '';

    // プレイヤーが所持しているキャラクターをインポート先から取得
    const playerUseCharacter = Object.keys(PossessionCharacter);

    // 取得したキーからキャラデータを取得
    playerUseCharacter.forEach((key) => {
        // キャラ表示用の親要素を生成とクラス付与
        const characterListElement = document.createElement('button');
        characterListElement.type = 'button';
        characterListElement.classList.add('owned-character-card');
        // 小親
        const characterInfo = document.createElement('div');
        characterInfo.classList.add('owned-character-info');

        // 親要素に入れる子要素
        // 名前
        const characterName = document.createElement('span');
        characterName.classList.add('owned-character-name');
        characterName.textContent = `名前: ${characterVariation[key].name}`;
        // レベル・強化
        const characterLevel = document.createElement('span');
        characterLevel.classList.add('owned-character-level');
        characterLevel.textContent = `レベル: ${PossessionCharacter[key].level}`;
        const characterPlus = document.createElement('span');
        characterPlus.classList.add('owned-character-level');
        characterPlus.textContent = `強化値:  ${PossessionCharacter[key].plus}`;
        // 画像
        const characterImg = document.createElement('img');
        characterImg.classList.add('owned-character-image');
        characterImg.src = characterVariation[key].image;

        // 小親へ追加
        characterInfo.appendChild(characterName);
        characterInfo.appendChild(characterLevel);
        characterInfo.appendChild(characterPlus);

        // 生成した要素を親へ追加
        characterListElement.appendChild(characterImg);
        characterListElement.appendChild(characterInfo);

        // リスト本体へ生成要素を追加
        ownedCharacterList.appendChild(characterListElement);

        // 生成した要素を全て取得する
        characterListElement.addEventListener('click', () => {

            // 配列に選択しようと強いているキャラがいるか
            const searchResult = partyMember.includes(key);

            // 選択したキャラがすでに編成されていたら、処理を止める
            if (searchResult) {
                partyMessage.textContent = 'このキャラはすでに編成済みです';
                return;
            }

            // すでにクラスのついている要素から削除する
            ownedCharacterList.querySelectorAll('.owned-character-card').forEach((list) => {
                list.classList.remove('is-selected');
            });

            // 選択中のキャラクターが二回目クリックされたら選択を解除する。
            if (selectCharacter === key) {
                selectCharacter = null;
                return;
            } else {
                // 主人公以外がクリックされたら選択できる処理
                if (key !== 'wanko') {
                    selectCharacter = key;
                    characterListElement.classList.add('is-selected');
                } else {
                    partyMessage.textContent = '主人公は選択できません';
                    selectCharacter = null;
                }
            }
        });
    });
    // 現在の所持数の表示
    ownedCount.textContent = playerUseCharacter.length;
}

// 選択したキャラクターを+ボタンへ登録するイベント処理
partySlotBtns.forEach((slotBtn, partyIndex) => {
    slotBtn.addEventListener('click', () => {
        partyMessage.textContent = '';

        // 主人公を選択された時に処理を止める
        if (partyIndex === 0) {
            partyMessage.textContent = '主人公は変更できません';
            return;
        };

        // 選択中のキャラクターがすでに配列内に存在するか調べる変数
        const searchResult = partyMember.includes(selectCharacter);

        // 選択中のキャラクターが配列に存在せず、選択しているボタンが空であれば
        if (selectCharacter !== null && !searchResult && partyMember[partyIndex] === null) {
            partyMember[partyIndex] = selectCharacter;
            selectCharacter = null;
            // すでにクラスのついている要素から削除する
            ownedCharacterList.querySelectorAll('.owned-character-card').forEach((list) => {
                list.classList.remove('is-selected');
            });
        } else if (partyMember[partyIndex] !== null && selectCharacter === null) {
            partyMember[partyIndex] = null;
        } else if (selectCharacter !== null && searchResult) {
            partyMessage.textContent = 'すでにキャラクターが編成されています';
        } else if (selectCharacter !== null && partyMember[partyIndex] !== null) {
            partyMessage.textContent = 'この枠にはすでにキャラが編成されています';
        } else if (selectCharacter === null) {
            partyMessage.textContent = 'キャラクターを選択してください';
        }
        renderParty();

    });
});

// 保存ボタン
partySaveBtn.addEventListener('click', () => {
    if (confirm('保存しますか?')) {
        partyMessage.textContent = '保存しました';
        savedParty = [...partyMember];
        // 更新したパーティにオート出撃に登録されているキャラが含まれていなければ
        if (!savedParty.includes(autoSaveCharacter)) {
            autoSaveCharacter = null;
            autoCharacterData = autoSaveCharacter;
        }
        saveData();
    } else {
        partyMessage.textContent = 'キャンセルしました';
    }
});
// ------------------------------------------------------------
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// キャラ育成
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// 出撃キャラの最新のステータス呼び出し用の変数 ※プレイヤーキャラインスタンスへ渡す
let selectedKey = null;

function renderTrainingCharacters() {
    trainingCharacterList.innerHTML = '';
    // 所持キャラクターのキーを取得
    const characterKeys = Object.keys(PossessionCharacter);

    characterKeys.forEach((key) => {
        // キャラクターの描写親要素
        const characterElement = document.createElement('button');
        characterElement.type = 'button';
        characterElement.classList.add('training-character-card');

        // 描写要素の画像の子要素
        const characterImg = document.createElement('img');
        characterImg.src = characterVariation[key].image;

        const characterName = document.createElement('span');
        characterName.textContent = `${characterVariation[key].name}`;

        characterElement.appendChild(characterImg);
        characterElement.appendChild(characterName);
        trainingCharacterList.appendChild(characterElement);

        // キャラクター要素をクリックするとポップアップ表示
        characterElement.addEventListener('click', () => {
            // 外でクリックしたキーを使用できるように
            selectedKey = key;
            updateTrainingStatus(key);
            updateLevelUpCost(key);
            updateStrengthenCost(key);
            // ポップアップの非表示処理を表示へ切り替え
            trainingOverlay.hidden = false;
        });
    });
}

// 育成画面のポップアップを閉じる処理
trainingCloseBtn.addEventListener('click', () => {
    trainingOverlay.hidden = true;
});

// レベルアップボタン
trainingUpgradeBtn.addEventListener('click', () => {
    trainingPopUpText.textContent = '';

    const levelLimit = unlockLevelUp();
    if (PossessionCharacter[selectedKey].level >= levelLimit.maxLevel) {
        trainingPopUpText.textContent = levelLimit.message;
        return;
    }

    const levelUpCondition = 100 * PossessionCharacter[selectedKey].level;
    // ボタンを押したときに必要な金額が足りてればレベルアップ
    if (playerData.gold >= levelUpCondition) {
        // 必要金額の消費
        playerData.gold -= levelUpCondition;
        updateGoldDisplay();
        // レベル+1処理
        PossessionCharacter[selectedKey].level++;
        updateTrainingStatus(selectedKey);
        updateLevelUpCost(selectedKey);
        saveData();
        trainingPopUpText.textContent = 'レベルアップ';
    } else {
        trainingPopUpText.textContent = 'ゴールドが足りません';
    }

});

// 強化ボタン
trainingStrengthenBtn.addEventListener('click', () => {
    trainingStrengthenText.textContent = '';
    if (PossessionCharacter[selectedKey].plus >= unlockEnhance()) {
        trainingStrengthenText.textContent = 'これ以上強化できません';
        return;
    }
    // プレイヤーの強化石の所持数
    const key = selectedKey;
    const characterRarity = characterVariation[key].rarity;
    const materialRarity = playerData.material[characterRarity];
    const materialCost = 1 + PossessionCharacter[key].plus;

    // 先に素材が足りているか判定する処理
    if (materialRarity < materialCost) {
        trainingStrengthenText.textContent = '素材が足りません';
        return;
    }

    // 素材の消費
    playerData.material[characterRarity] -= materialCost;
    // 強化値の上昇
    PossessionCharacter[key].plus += 1;
    // 各種表示の更新
    updateMaterialDisplay();
    updateTrainingStatus(key);
    updateStrengthenCost(key);
    // 変更した値のlocal保存
    saveData();
    trainingStrengthenText.textContent = '強化成功！';
});

// 進化ボタン
trainingEvolutionBtn.addEventListener('click', () => {
    console.log('ここ');
});

// レベルアップ・強化時のステータスアップ処理
function calculateStatus(key) {
    // HPの成長
    const currentMaxHp = characterVariation[key].maxHp +
        Math.floor((PossessionCharacter[key].level - 1) *
            characterVariation[key].status.hpUpMagnification +
            PossessionCharacter[key].plus);
    // 攻撃力の成長
    const currentAtk = characterVariation[key].atk +
        Math.floor(PossessionCharacter[key].level / characterVariation[key].status.atkUpLvInterval);

    return { currentMaxHp, currentAtk };
}

// htmlの書き換え用の関数
function updateTrainingStatus(key) {
    // 育成時の上昇値を受け取る変数
    const statusUp = calculateStatus(key);

    trainingCharacterImage.src = characterVariation[key].image;
    trainingCharacterName.textContent = characterVariation[key].name;
    trainingCharacterLevel.textContent = `${PossessionCharacter[key].level}Lv / +${PossessionCharacter[key].plus}`;
    trainingHp.textContent = statusUp.currentMaxHp;
    trainingAtk.textContent = statusUp.currentAtk;
    trainingAtkFast.textContent = characterVariation[key].atkFast;
    trainingRange.textContent = characterVariation[key].rangeValue;
    trainingFast.textContent = characterVariation[key].fast;
    trainingUnitCost.textContent = characterVariation[key].cost;
    trainingType.textContent = characterVariation[key].y > 10 ? '浮遊' : '地上';

    // 空ならなしと表示
    if (characterVariation[key].trait.length === 0) {
        trainingTrait.textContent = '特性なし';
    } else {
        trainingTrait.textContent = characterVariation[key].trait;
    }
}

// レベルアップに必要な経費
function updateLevelUpCost(key) {
    // レベルアップの必要経費
    trainingCost.textContent = `${PossessionCharacter[key].level * 100}G`;
}

// 必要な強化石の表示関数
function updateStrengthenCost(key) {
    // 強化石の変数
    const characterRarity = characterVariation[key].rarity;
    trainingStrengthenCost.textContent = `${characterRarity}石 × ${1 + PossessionCharacter[key].plus}個`;
}

// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// ガチャ機能
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// ガチャのデータ
function rarityLottery() {
    return [
        { id: 'N', val: 70 },
        { id: 'R', val: 25 },
        { id: 'SR', val: 5 },
    ];
}

// ランダム抽選
function rarityRandomLottery(rarityLottery) {
    const randomIndex = Math.floor(Math.random() * 100) + 1;

    let result = null;
    let totalProb = 0;

    for (let i = 0; i < rarityLottery.length; i++) {
        totalProb += rarityLottery[i].val;
        if (randomIndex <= totalProb) {
            result = rarityLottery[i];
            break;
        }
    }

    return result;
}

// レアリティ抽選後のキャラをフィルターする処理
function rarityLotteryResult() {
    const rarityObject = rarityLottery();
    const rarityResult = rarityRandomLottery(rarityObject);

    const characterArray = Object.entries(characterVariation);

    const rarityResultFilter = characterArray.filter((character) => {
        return character[1].rarity === rarityResult.id &&
            character[1].isGacha;
    });

    return rarityResultFilter;
}

// ガチャで引いたキャラを表示する関数
function renderGachaCharacter(gachaResultCharacter) {
    // 親要素
    const characterElement = document.createElement('div');
    // 子要素
    const characterImage = document.createElement('img');
    const characterName = document.createElement('strong');
    // 付与するクラス
    characterElement.classList.add('gacha-result-card');

    // 子要素へ必要な処理を追加
    characterImage.src = `${gachaResultCharacter[1].image}`;
    characterName.textContent = `${gachaResultCharacter[1].name}`;

    // htmlへの追加
    characterElement.appendChild(characterImage);
    characterElement.appendChild(characterName);
    gachaResultList.appendChild(characterElement);
}

// シングルガチャのボタン処理
gachaSingleBtn.addEventListener('click', () => {
    // 引く際に一度リザルトリストをリセット
    gachaResultList.textContent = '';
    gachaMessage.textContent = '';

    // チケット０枚以下なら処理をストップ
    if (playerData.tickets <= 0) {
        gachaMessage.textContent = 'チケットが足りません';
        return;
    }

    playerData.tickets -= 1;
    updateGachaDisplay();

    // ガチャの結果を保存する変数
    const gachaResult = rarityLotteryResult();
    // 結果の配列の中から一体を選出
    const gachaRandomIndex = Math.floor(Math.random() * gachaResult.length);
    // 結果を表示
    renderGachaCharacter(gachaResult[gachaRandomIndex]);

    // ガチャの結果、すでにそのキャラを所持しているか確認
    const searchCharacter = Object.keys(PossessionCharacter).includes(gachaResult[gachaRandomIndex][0]);
    console.log(searchCharacter);

    // すでにキャラを所持しているか確認する処理
    if (searchCharacter) {
        const materialRarity = gachaResult[gachaRandomIndex][1].rarity;
        playerData.material[materialRarity]++;
        gachaMessage.textContent = `${materialRarity}石を手に入れました`;
        updateMaterialDisplay();
    } else {
        gachaMessage.textContent = 'ガチャを１回引きました';
        PossessionCharacter[gachaResult[gachaRandomIndex][0]] = {
            level: 1,
            plus: 0,
        };
    }
    saveData();
});

// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// データのセーブ＆ロード関連
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// セーブをする関数
function saveData() {
    const saveData = {
        playerData,
        PossessionCharacter,
        savedParty,
        currentUnlockedStage,
        autoSaveCharacter,
    }
    localStorage.setItem('playerDates', JSON.stringify(saveData));
}

// セーブしているデータをロードする為に必要なデータ型に変える関数
function loadData() {
    const recoveryData = JSON.parse(localStorage.getItem('playerDates'));

    // 復帰データが空の場合処理を中断する
    if (recoveryData === null) return;

    // プレイヤーデータへロード後のデータを代入
    playerData.gold = recoveryData.playerData.gold;
    playerData.tickets = recoveryData.playerData.tickets;
    playerData.material = recoveryData.playerData.material;

    // 所持キャラクターへロード後のデータを代入
    Object.assign(PossessionCharacter, recoveryData.PossessionCharacter);

    // パーティ編成をロード後の編成状態へ書き換える
    savedParty = [...recoveryData.savedParty];
    partyMember = [...savedParty];

    // ステージ解放状況をロード後の状態に書き換える
    currentUnlockedStage = recoveryData.currentUnlockedStage;

    autoSaveCharacter = recoveryData.autoSaveCharacter ?? null;
}

// 末尾