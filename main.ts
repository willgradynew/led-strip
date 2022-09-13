input.onButtonPressed(Button.A, function () {
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Orange))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Orange))
    strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Yellow))
    strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(10, neopixel.colors(NeoPixelColors.Orange))
    strip.setPixelColor(11, neopixel.colors(NeoPixelColors.Yellow))
    strip.setPixelColor(12, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(13, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(14, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(15, neopixel.colors(NeoPixelColors.Orange))
    strip.setPixelColor(16, neopixel.colors(NeoPixelColors.Yellow))
    strip.setPixelColor(17, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(18, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(19, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(20, neopixel.colors(NeoPixelColors.Orange))
    strip.setPixelColor(21, neopixel.colors(NeoPixelColors.Yellow))
    strip.setPixelColor(22, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(23, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(24, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(25, neopixel.colors(NeoPixelColors.Orange))
    strip.setPixelColor(26, neopixel.colors(NeoPixelColors.Yellow))
    strip.setPixelColor(27, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(28, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(29, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(30, neopixel.colors(NeoPixelColors.White))
    strip.show()
})
input.onGesture(Gesture.TiltLeft, function () {
	
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.White))
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
