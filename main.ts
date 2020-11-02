input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
    NACE_UN_VENADO = 5
    basic.showNumber(NACE_UN_VENADO)
})
let CONTADOR = 0
let NACE_UN_VENADO = 0
let VENADO = 0
NACE_UN_VENADO = 5
basic.forever(function () {
    CONTADOR += 1
    basic.showNumber(CONTADOR)
    VENADO = randint(1, 6)
    if (VENADO == 1) {
        NACE_UN_VENADO = NACE_UN_VENADO + 1
        basic.showIcon(IconNames.Angry)
    }
    if (VENADO == 2 || (VENADO == 3 || VENADO == 4)) {
        NACE_UN_VENADO = NACE_UN_VENADO - 1
        basic.showIcon(IconNames.Sad)
    }
    if (VENADO == 5 || VENADO == 6) {
        NACE_UN_VENADO = NACE_UN_VENADO
        basic.showIcon(IconNames.Happy)
    }
    if (NACE_UN_VENADO == 0) {
        basic.showString("GAME OVER")
        control.reset()
    }
})
