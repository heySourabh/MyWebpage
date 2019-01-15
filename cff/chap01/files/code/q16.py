# Copyright (c) Sourabh Bhat
# Computer programs to solve problems from Compressible Fluid Flow (P. Oosthuizen, W. E. Carscallen)
# Program written by Sourabh Bhat (mail.spbhat@gmail.com)

# Chapter 1, problem 16

# Given data: Heat exchanger
m = 200  # kg/s
A1 = 0.7  # m^2
p1 = 1600e3  # Pa
V1 = 150  # m/s
Ae = 2.4  # m^2
pe = 80e3  # Pa
Ve = 2300  # m/s
# ------------------------------------

# To calculate: Thrust force on nozzle

# Solution:
# Applying the momentum equation in horizontal direction
momentum_in = m * V1
momentum_out = m * Ve
pressure_force_in = p1 * A1
pressure_force_out = pe * Ae


def thrust(p_amb):
    pressure_force_amb = p_amb * (A1 - Ae)
    return momentum_out - momentum_in + pressure_force_out - pressure_force_in + pressure_force_amb


# assuming p_amb = p1
print("If ambient pressure is same as inlet pressure, the thrust force on nozzle is %f N." % thrust(p1))
print("If ambient pressure is same as exit pressure, the thrust force on nozzle is %f N." % thrust(pe))
