# Copyright (c) Sourabh Bhat
# Computer programs to solve problems from Compressible Fluid Flow (P. Oosthuizen, W. E. Carscallen)
# Program written by Sourabh Bhat (mail.spbhat@gmail.com)

# Chapter 1, problem 5

import lib.numerical as num
import matplotlib.pyplot as plt
from lib.energy import energy

# Given data:
# Steady and adiabatic
V1 = 100  # m/s
T1 = 120 + 273  # K
V2 = 300  # m/s
T2 = -50 + 273  # K
# ------------------------------------

# To calculate: T3

# Solution:
# assume m1 = m2 = 1
m1 = 1  # kg/s
m2 = m1
m3 = m1 + m2

# conservation of energy
e1 = energy(T1, V1, m=m1)
e2 = energy(T2, V2, m=m2)


# e1 + e2 - e3 = 0
def eqn(T3):
    V3 = 0
    return e1 + e2 - energy(T3, V3, m=m3)


T3 = num.solve_nr(eqn, init=T1)

print("The temperature of the air in the large chamber is %f K or %f deg. C." % (T3, T3 - 273))

plt.imshow(plt.imread("images/q05_im01.svg.png"))
plt.axis("off")
plt.show()
