radio.setGroup(1)
radio.setTransmitPower(1)
basic.showIcon(IconNames.Skull)
basic.forever(function () {
    radio.sendString("1")
    basic.pause(50)
})
