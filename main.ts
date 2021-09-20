radio.onReceivedString(function (receivedString) {
    if (Math.abs(radio.receivedPacket(RadioPacketProperty.SignalStrength) + 42) < distanceSetting) {
        basic.showIcon(IconNames.No)
    } else {
        basic.showIcon(IconNames.Yes)
    }
})
let distanceSetting = 0
radio.setGroup(1)
radio.setTransmitPower(1)
distanceSetting = 10
basic.forever(function () {
    radio.sendNumber(138)
    basic.pause(1000)
})
