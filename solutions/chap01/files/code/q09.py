# Copyright (c) Sourabh Bhat
# Computer programs to solve problems from Compressible Fluid Flow (P. Oosthuizen, W. E. Carscallen)
# Program written by Sourabh Bhat (mail.spbhat@gmail.com)

# Chapter 1, problem 9

# Given data:
m1 = 50  # kg/s
m1_mf1 = 90 / 1  # m1:mf1
V2 = 600  # m/s
m1_mf12 = 50 / 1  # m1:(mf1 + mf2)
V2_afterburner = 730  # m/s
# p1 = p2
# ------------------------------------

# To calculate: thrust without and with afterburner

# Solution:
# Assuming negligible inflow velocity, since the engine is stationary on ground
V1 = 0

# case 1:
m_fuel = m1 / m1_mf1
m2 = m1 + m_fuel
momentum_in = m1 * V1
momentum_out = m2 * V2
pressure_thrust = 0

thrust = momentum_out - momentum_in + pressure_thrust

print("Static thrust without the afterburner is %f N." % thrust)

# case 2:
m_fuel = m1 / m1_mf12
m2 = m1 + m_fuel
momentum_in = m1 * V1
momentum_out = m2 * V2_afterburner
pressure_thrust = 0

thrust = momentum_out - momentum_in + pressure_thrust

print("Static thrust with the afterburner is %f N." % thrust)
