input.onButtonPressed(Button.A, function () {
    if (loop) {
        loop = false
    } else {
        loop = true
    }
})
let dist = 0
let loop = false
loop = false
let strip = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
basic.forever(function () {
    dist = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    basic.pause(1000)
    if (loop) {
        for (let i = 0; i <= 360; i++) {
            for (let j = 0; j <= 7; j++) {
                strip.setPixelColor(j, neopixel.hsl(i / (j * 45), 100, 50))
            }
            strip.show()
        }
    }
    if (loop) {
        basic.showNumber(1)
    } else {
        basic.showNumber(0)
    }
})
