let Degree = 0
input.calibrateCompass()
basic.forever(function () {
    Degree = input.compassHeading()
    if (Degree < 45) {
        basic.showArrow(ArrowNames.North)
    }
    if (Degree < 45 && Degree > 135) {
        basic.showArrow(ArrowNames.East)
    }
    if (Degree < 135 && Degree > 225) {
        basic.showArrow(ArrowNames.South)
    }
    if (Degree < 225 && Degree > 315) {
        basic.showArrow(ArrowNames.West)
    }
})
