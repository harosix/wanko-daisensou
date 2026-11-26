// キャラとエネミーをlostした時のアニメーション
function lostCharacterAnimation(element, direction, gameSpeed) {
    const animation = element.animate(
        [
            {
                transform: 'translate(0px, 0px) rotate(0deg)',
                opacity: 1
            },
            {
                transform: `translate(${25 * direction}px, -30px) rotate(${30 * direction}deg)`,
                opacity: 0.6
            },
            {
                transform: `translate(${60 * direction}px, -10px) rotate(${45 * direction}deg)`,
                opacity: 0.1
            },
        ],
        {
            duration: 400,
            easing: 'ease-out',
        }
    )

    // アニメーションが終了したとき
    animation.onfinish = () => {
        element.remove();
    }

    animation.playbackRate = gameSpeed;
}

export {
    lostCharacterAnimation,
}

// キャラの攻撃時のアニメーション
// attackAnimation() {
//     this.moveAttack = this.character.animate(
//         [
//             { transform: 'translateX(0px)' },
//             { transform: `translateX(${this.attackX}px)` },
//             { transform: 'translateX(0px)' }
//         ],
//         {
//             duration: 200,
//         },
//     )
//     this.moveAttack.playbackRate = gameSpeed;
// }