# Copyright (c) Sourabh Bhat
# Computer programs to solve problems from Compressible Fluid Flow (P. Oosthuizen, W. E. Carscallen)
# Program written by Sourabh Bhat (mail.spbhat@gmail.com)

# Chapter 1, problem 10

from lib.geometry import area_circle

# Given data:
Ve = 2300  # m/s
me = m_fuel = 120  # kg/s (fuel contains oxidizer)
pe = 90e3  # Pa
De = 0.3  # m
# ------------------------------------

# To calculate: Thrust at sea level

# Solution:
p_atm = 101325  # atmospheric pressure at sea level
momentum_in = 0
momentum_out = me * Ve
Aexit = area_circle(De)
pressure_thrust = (pe - p_atm) * Aexit

thrust = momentum_out - momentum_in + pressure_thrust

print("The thrust developed when the rocket is launched at sea level is %f N." % thrust)
