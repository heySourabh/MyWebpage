# Copyright (c) Sourabh Bhat
# Computer programs to solve problems from Compressible Fluid Flow (P. Oosthuizen, W. E. Carscallen)
# Program written by Sourabh Bhat (mail.spbhat@gmail.com)

# Chapter 1, problem 6

import lib.numerical as num
import matplotlib.pyplot as plt
import lib.eos as eos

from lib.geometry import area_circle
from lib.mass import mass

# Given data:
# Steady flow
T1 = 30 + 273  # K
p1 = 150e3  # Pa
V1 = 100  # m/s
D1 = 5e-2  # m
T2 = 30 + 273  # K
p2 = 75e3  # Pa
V2 = 150  # m/s
D2 = 1.5e-2  # m
T3 = 30 + 273  # K
p3 = 90e3  # Pa
D3 = 9e-2  # m
# ------------------------------------

# To calculate: V3

# Solution:
rho1 = eos.rho(p1, T1)
rho2 = eos.rho(p2, T2)
rho3 = eos.rho(p3, T3)

A1 = area_circle(D1)
A2 = area_circle(D2)
A3 = area_circle(D3)

m1 = mass(rho1, A1, V1)
m2 = mass(rho2, A2, V2)


# mass conservation equation
def eqn(V3):
    m3 = mass(rho3, A3, V3)
    return m1 + m2 - m3


V3 = num.solve_nr(eqn, V1)
print("The velocity in the exit pipe is %f m/s." % V3)

plt.imshow(plt.imread("images/q06_im01.svg.png"))
plt.axis("off")
plt.show()
