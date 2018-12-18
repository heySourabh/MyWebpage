# Copyright (c) Sourabh Bhat
# Computer programs to solve problems from Compressible Fluid Flow (P. Oosthuizen, W. E. Carscallen)
# Program written by Sourabh Bhat (mail.spbhat@gmail.com)

# Chapter 1, problem 14

import lib.material_properties as prop
import lib.numerical as num
import lib.eos as eos
from lib.energy import energy
from lib.mass import mass

# Given data:
gamma = 1.3
V1 = 120  # m/s
T1 = 200 + 273  # K
p1 = 700e3  # Pa
Ve = 240  # m/s
Te = 450 + 273  # K
# ------------------------------------
A1 = Ae = A = 1  # m^2, assumed = 1 as mass flow rate needs to be calculated per unit area

# To calculate:
#  - heat added per unit mass
#  - mass flow rate per unit area

# Solution:
molar_mass = 12 * 1 + 16 * 2
R = prop.R(molar_mass)
cp = prop.cp(R, gamma)

energy_in = energy(T1, V1, cp, m=1)
energy_out = energy(Te, Ve, cp, m=1)


# Conservation of energy equation
def eqn_energy(q):
    return energy_in + q - energy_out


q = num.solve_nr(eqn_energy)

# Using the ideal gas equation of state at the inlet
rho1 = eos.rho(p1, T1, R)

m = mass(rho1, A1, V1)

print("The amount of heat being added to the carbon dioxide per unit mass of gas is %f J/kg." % q)
print("The mass flow rate through the duct per unit cross-sectional area of the duct is %f kg/s-m^2." % m)
