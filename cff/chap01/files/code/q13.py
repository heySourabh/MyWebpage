# Copyright (c) Sourabh Bhat
# Computer programs to solve problems from Compressible Fluid Flow (P. Oosthuizen, W. E. Carscallen)
# Program written by Sourabh Bhat (mail.spbhat@gmail.com)

# Chapter 1, problem 13

from lib.energy import energy
from lib.mass import mass
import lib.numerical as num
import lib.eos as eos

# Given data:
m_rate = 3  # kg/s
V1 = 0  # m/s
p1 = p0 = p_amb = 100e3  # Pa
T1 = T0 = T_amb = 30 + 273  # K
Ve = 500  # m/s
pe = 140e3  # kPa
q = 600e3  # W
# ------------------------------------

# To calculate:
#  - Ae
#  - Thrust

# Solution:
energy_in = energy(T1, V1, m=m_rate)


# Applying the conservation of energy equation
def eqn_energy(Te):
    energy_out = energy(Te, Ve, m=m_rate)
    return energy_in + q - energy_out


Te = num.solve_nr(eqn_energy, init=T1)

rhoe = eos.rho(pe, Te)


# Applying conservation of mass equation
def eqn_mass(Ae):
    return mass(rhoe, Ae, Ve) - m_rate


Ae = num.solve_nr(eqn_mass, init=1.0)

momentum_in = m_rate * V1
momentum_out = m_rate * Ve
pressure_thrust = (pe - p_amb) * Ae


# Applying the conservation of horizontal momentum
def eqn_momentum(thrust):
    return thrust - momentum_out + momentum_in - pressure_thrust


thrust = num.solve_nr(eqn_momentum)

print("The nozzle discharge area is %f m^2." % Ae)
print("The thrust developed by the system is %f N." % thrust)
