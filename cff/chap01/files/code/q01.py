# Copyright (c) Sourabh Bhat
# Computer programs to solve problems from Compressible Fluid Flow (P. Oosthuizen, W. E. Carscallen)
# Program written by Sourabh Bhat (mail.spbhat@gmail.com)

# Chapter 1, problem 1

import lib.bernoulli as bernoulli
import lib.eos as eos
import matplotlib.pyplot as plt

# Given data:
v1 = 30  # m/s
p1 = 120e3  # Pa
T1 = 10 + 273  # K
v2 = 250  # m/s
# ------------------------------------

# Solution:
rho = eos.rho(p1, T1)  # using inlet conditions

# Using Bernoulli's equation
p2 = bernoulli.p2(p1, v1, v2, rho)

print("Using Bernoulli's equation, pressure = %f Pa" % p2)

# If temperature is assumed to be constant
T2 = T1
rho2 = eos.rho(p2, T2)

print("Assuming temperature to be constant, density = %f kg/m^3" % rho2)
print("Using inlet conditions, density = %f kg/m^3" % rho)

diff = (rho - rho2) / rho
print("Percentage difference in calculations = %f%%" % (diff * 100))

if diff < 0.05:
    print("The use of Bernoulli's equation is justified")
else:
    print("The use of Bernoulli's equation is NOT justified")

plt.imshow(plt.imread("images/q01_im01.svg.png"))
plt.axis("off")
plt.show()
