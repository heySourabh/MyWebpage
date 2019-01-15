# Copyright (c) Sourabh Bhat
# Computer programs to solve problems from Compressible Fluid Flow (P. Oosthuizen, W. E. Carscallen)
# Program written by Sourabh Bhat (mail.spbhat@gmail.com)

# Chapter 1, problem 4

import lib.eos as eos
import lib.isentropic as isen

# Given data:
m = 2  # kg
T1 = 30 + 273  # K
p1 = 100e3  # Pa
# undergoes isentropic process
T2 = 850 + 273  # K
# ------------------------------------

# To calculate:
# - Final pressure (p2)
# - initial and final densities (rho1, rho2)
# - initial and final volumes (vol1, vol2)

# Solution:
p2 = isen.p2(p1, T2 / T1)
print("Final pressure = %f Pa" % p2)

rho1 = eos.rho(p1, T1)
print("Initial density = %f kg/m^3" % rho1)

rho2 = eos.rho(p2, T2)
print("Final density = %f kg/m^3" % rho2)

vol1 = m / rho1
print("Initial volume = %f m^3" % vol1)

vol2 = m / rho2
print("Final volume = %f m^3" % vol2)
