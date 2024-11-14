radio.onReceivedValue(function (name, value) {
    if (value == 0) {
        led.toggle(parseFloat(name.charAt(0)), parseFloat(name.charAt(1)))
    } else {
        led.plot(parseFloat(name.charAt(0)), parseFloat(name.charAt(1)))
    }
})
radio.setGroup(223)
basic.forever(function () {
	
})
