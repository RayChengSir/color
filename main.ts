let BOX = 0
let strip = neopixel.create(DigitalPin.P2, 10, NeoPixelMode.RGB)
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_COLOR_RECOGNITION)
basic.forever(function () {
    huskylens.request()
    BOX = huskylens.readBox_s(Content3.ID)
    if (BOX == 1) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    } else if (BOX == 2) {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
