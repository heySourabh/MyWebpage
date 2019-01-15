# Copyright (c) Sourabh Bhat
# Computer programs to solve problems from Compressible Fluid Flow (P. Oosthuizen, W. E. Carscallen)
# Program written by Sourabh Bhat (mail.spbhat@gmail.com)

# Chapter 1, problem 8

import lib.numerical as num

# Given data:
thrust = 18e3  # N
V1 = 900 / 3.6  # m/s
p1 = 50e3  # Pa
m1 = 75  # kg/s
m_fuel = 3  # kg/s
p2 = 55e3  # Pa
Aexit = 0.2  # m^2
# ------------------------------------

# To calculate: V2

# Solution:
m2 = m1 + m_fuel
momentum_in = m1 * V1
pressure_thrust = (p2 - p1) * Aexit


# conservation of horizontal momentum equation
def eqn(V2):
    momentum_out = m2 * V2
    return momentum_out - momentum_in + pressure_thrust - thrust


V2 = num.solve_nr(eqn, V1)

print("The jet efflux velocity %f m/s." % V2)
