let lichteinfall = 0
basic.forever(function () {
    lichteinfall = input.lightLevel()
    pins.analogWritePin(AnalogPin.P0, 1000 - Math.min(1000, lichteinfall * 7))
    basic.pause(100)
})
