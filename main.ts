input.onGesture(Gesture.TiltLeft, function () {
    strip = neopixel.create(DigitalPin.P0, 36, NeoPixelMode.RGB)
    strip.showColor(neopixel.colors(NeoPixelColors.White))
    basic.showLeds(`
        # . . . .
        # . . . .
        # # # . .
        # . # . .
        # # # . .
        `)
    strip.clear()
})
input.onButtonPressed(Button.B, function () {
	
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # # # # #
        # . . . #
        `)
    strip.setBrightness(50)
    for (let index = 0; index < 6; index++) {
        strip.show()
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        strip.shift(1)
        basic.pause(100)
    }
    for (let index = 0; index < 6; index++) {
        strip.show()
        strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Red))
        strip.shift(1)
        basic.pause(100)
    }
    for (let index = 0; index < 6; index++) {
        strip.show()
        strip.setPixelColor(12, neopixel.colors(NeoPixelColors.Red))
        strip.shift(1)
        basic.pause(100)
    }
    for (let index = 0; index < 6; index++) {
        strip.show()
        strip.setPixelColor(18, neopixel.colors(NeoPixelColors.Red))
        strip.shift(1)
        basic.pause(100)
    }
    for (let index = 0; index < 6; index++) {
        strip.show()
        strip.setPixelColor(24, neopixel.colors(NeoPixelColors.Red))
        strip.shift(1)
        basic.pause(100)
    }
    for (let index = 0; index < 6; index++) {
        strip.show()
        strip.setPixelColor(30, neopixel.colors(NeoPixelColors.Red))
        strip.shift(1)
        basic.pause(100)
    }
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    strip.setBrightness(350)
    basic.pause(500)
    strip.setBrightness(5)
    basic.pause(1000)
    strip.setBrightness(1)
    basic.pause(500)
    strip.setBrightness(9)
    basic.pause(1000)
    strip.setBrightness(100)
    basic.pause(500)
    strip.setBrightness(2)
    basic.pause(1000)
    strip.setBrightness(10)
    basic.pause(500)
    strip.setBrightness(350)
    basic.showLeds(`
        # # # . .
        # . . . .
        # # # . .
        # . . . .
        # # # . .
        `)
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 36, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.White))
basic.showLeds(`
    # . . . #
    # # . . #
    # . # . #
    # . . # #
    # . . . #
    `)
strip.clear()
