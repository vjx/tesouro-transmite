radio.setGroup(1)
radio.setTransmitPower(1)
basic.showIcon(IconNames.Skull)
basic.forever(function () {
    radio.sendNumber(1)
    basic.pause(50)
})
