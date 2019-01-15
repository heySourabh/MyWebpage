# Copyright (c) Sourabh Bhat
# Computer programs to solve problems from Compressible Fluid Flow (P. Oosthuizen, W. E. Carscallen)
# Program written by Sourabh Bhat (mail.spbhat@gmail.com)

# Chapter 1, problem 15

import lib.numerical as num
import lib.eos as eos
from lib.energy import energy

# Given data: Heat exchanger
V1 = 120  # m/s
T1 = 225 + 273  # K
p1 = 2.5e6  # Pa
Ve = 30  # m/s
Te = 80 + 273  # K
pe = 2.45e6  # Pa
# ------------------------------------

# To calculate:
# - Heat added/removed per kilogram of air
# - density of air at inlet of heat exchanger
# - density of air at exit of heat exchanger

# Solution:
energy_in = energy(T1, V1)
energy_out = energy(Te, Ve)


# Conservation of energy equation
def eqn_energy(q):
    return energy_in + q - energy_out


q = num.solve_nr(eqn_energy)  # sign of q indicates whether heat is added or removed
qdir = "heat added"
if q < 0: qdir = "heat removed"

rho1 = eos.rho(p1, T1)
rhoe = eos.rho(pe, Te)

print("The %s per kilogram of air flowing through the heat exchanger is %f J/kg." % (qdir, abs(q)))
print("The density of the air at the inlet of the heat exchanger is %f kg/m^3." % rho1)
print("The density of the air at the exit of the heat exchanger is %f kg/m^3." % rhoe)
