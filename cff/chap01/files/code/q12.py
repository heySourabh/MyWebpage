# Copyright (c) Sourabh Bhat
# Computer programs to solve problems from Compressible Fluid Flow (P. Oosthuizen, W. E. Carscallen)
# Program written by Sourabh Bhat (mail.spbhat@gmail.com)

# Chapter 1, problem 12

import lib.isentropic as isen
import lib.material_properties as prop
import lib.numerical as num
from lib.energy import energy

# Given data:
# Isentropic flow
V1 = 0  # m/s, very low velocity
T1 = T0 = 2000 + 273  # K
p1 = p0 = 6.8e6  # Pa
pe = p_amb = 10e3  # Pa
thrust = 10e6  # N
gamma = 1.4
# ------------------------------------
Aexit = 1.0  # Required if pe != p_amb

# To calculate: mass flow rate

# Solution:
molar_mass = 2.016  # kg/kmol
R = prop.R(molar_mass)

cp = prop.cp(R, gamma)
Te = isen.T2(T1, pe / p1, gamma)


# Conservation of energy equation
def eqn_energy(Ve):
    return energy(T0, 0, cp) - energy(Te, Ve, cp)


Ve = num.solve_nr(eqn_energy, init=100.0)  # +ve initial guess

# Conservation of momentum
momentum_in = 0
pressure_thrust = (pe - p_amb) * Aexit


def eqn_momentum(me):
    momentum_out = me * Ve
    return thrust - momentum_out + momentum_in - pressure_thrust


me = num.solve_nr(eqn_momentum, init=0.0)

print("If the required thrust is %f MN, the required hydrogen mass flow rate is %f kg/s." % (thrust / 10 ** 6, me))
