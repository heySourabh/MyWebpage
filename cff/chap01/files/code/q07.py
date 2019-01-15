# Copyright (c) Sourabh Bhat
# Computer programs to solve problems from Compressible Fluid Flow (P. Oosthuizen, W. E. Carscallen)
# Program written by Sourabh Bhat (mail.spbhat@gmail.com)

# Chapter 1, problem 7

# Given data:
V1 = 800 / 3.6  # m/s
m1 = 35  # kg/s
V2 = 590  # m/s
m2 = m1  # kg/s (ignoring fuel)
# p2 = p1
# ------------------------------------

# To calculate: Thrust

# Solution:
momentum_in = m1 * V1
momentum_out = m2 * V2
# assume p1=p2=1, Aexit=1
p1 = 1
p2 = p1
Aexit = 1
pressure_thrust = (p2 - p1) * Aexit

thrust = momentum_out - momentum_in + pressure_thrust

print("The thrust developed by the engine is %f N." % thrust)
