motor = stepperMotor.create_motor(DigitalPin.P0, DigitalPin.P1, DigitalPin.P2, DigitalPin.P3)

def on_forever():
    basic.show_icon(IconNames.HEART)
    motor.move_clockwise(1000, stepUnit.STEPS)
    basic.show_icon(IconNames.HEART)
    motor.move_anti_clockwise(1000, stepUnit.STEPS)
basic.forever(on_forever)
