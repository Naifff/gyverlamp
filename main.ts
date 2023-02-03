input.onSound(DetectedSound.Loud, function () {
    while (loop) {
    	
    }
})
let loop = false
loop = false
let strip = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
basic.forever(function () {
    for (let i = 0; i <= 360; i++) {
        for (let j = 0; j <= 7; j++) {
            strip.setPixelColor(j, neopixel.hsl(i / (j * 45), 100, 50))
        }
    }
})
