sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    mySprite2.destroy(effects.spray, 500)
    info.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        f f f f f f f f f f f f f f . . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 f f f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 f f f 
        f f f f f f f f f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 200, 0)
})
let projectile: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    f f . . . f f f f f f . . . . . 
    3 f . . f f 9 9 9 9 f f . . . . 
    3 f f f f 9 9 9 9 9 9 f f f f f 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
    f f f f 1 f f f f f f 1 f f f f 
    . . . 1 1 . . . . . . 1 . . . . 
    . . . . f . . . . . . f . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
info.setScore(0)
mySprite.setStayInScreen(true)
game.onUpdateInterval(1000, function () {
    mySprite2 = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 3 . . . . . . . 
        . . . . . . . 3 3 . . . . . . . 
        . . . . . . 3 3 3 . . . . . . . 
        . . . . . 3 3 3 3 . . . . . . . 
        . . . . 9 9 9 3 3 . . . . . . . 
        . . . . 9 9 9 3 3 . . . . . . . 
        . . . . . 3 3 3 3 . . . . . . . 
        . . . . . . 3 3 3 . . . . . . . 
        . . . . . . . 3 3 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, -50, randint(-25, 35))
    mySprite.setFlag(SpriteFlag.AutoDestroy, false)
})
