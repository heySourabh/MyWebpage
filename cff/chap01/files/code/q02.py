# Copyright (c) Sourabh Bhat
# Computer programs to solve problems from Compressible Fluid Flow (P. Oosthuizen, W. E. Carscallen)
# Program written by Sourabh Bhat (mail.spbhat@gmail.com)

# Chapter 1, problem 2

# Given data:
a = 90  # ft/s^2
m = 8000  # lbm
# ------------------------------------

# Solution:
F = m * a  # Gravitational force

print("The gravitational force = %f lbm-ft/s^2" % F)
print("The gravitational force = %f lbf" % (F / 32.2))
