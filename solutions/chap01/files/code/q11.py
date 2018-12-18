# Copyright (c) Sourabh Bhat
# Computer programs to solve problems from Compressible Fluid Flow (P. Oosthuizen, W. E. Carscallen)
# Program written by Sourabh Bhat (mail.spbhat@gmail.com)

# Chapter 1, problem 11

from lib.geometry import area_circle

# Given data:
Ve = 750  # m/s
me = 350  # kg/s
pe = 75e3  # Pa
De = 0.3  # m
# ------------------------------------

# To calculate:
# (a) Thrust when p_amb = 100 kPa
# (b) Thrust when p_amb = 20 kPa

# Solution:
# part (a)
p_amb = 100e3  # Pa
momentum_in = 0
momentum_out = me * Ve
Aexit = area_circle(De)
pressure_thrust = (pe - p_amb) * Aexit

thrust = momentum_out - momentum_in + pressure_thrust

print("Thrust developed by this engine when the ambient pressure is 100 kPa is %f N." % thrust)

# part (b)
p_amb = 20e3  # Pa
pressure_thrust = (pe - p_amb) * Aexit
thrust = momentum_out - momentum_in + pressure_thrust
print("Thrust developed by this engine when the ambient pressure is 20 kPa is %f N." % thrust)
