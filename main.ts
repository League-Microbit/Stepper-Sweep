let motor = stepperMotor.createMotor(
DigitalPin.P13,
DigitalPin.P14,
DigitalPin.P15,
DigitalPin.P16
)
motor.setDelay(0)
basic.forever(function () {
    images.arrowImage(ArrowNames.East).showImage(0)
    motor.moveClockwise(2000, stepUnit.Steps)
    images.arrowImage(ArrowNames.West).showImage(0)
    motor.moveAntiClockwise(2000, stepUnit.Steps)
})
