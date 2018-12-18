# Copyright (c) Sourabh Bhat
# Computer programs to solve problems from Compressible Fluid Flow (P. Oosthuizen, W. E. Carscallen)
# Program written by Sourabh Bhat (mail.spbhat@gmail.com)

# Chapter 1, problem 3

import lib.eos as eos

# Given data:
p = 130e3  # Pa
T = 30 + 273  # K
# ------------------------------------

# Solution:
rho = eos.rho(p, T)
print("The air density at this point = %f kg/m^3" % rho)

kg_to_lbm = 2.2046
m_to_ft = 3.2808
print("The air density at this point = %f lbm/ft^3" % (rho * kg_to_lbm / m_to_ft ** 3))
