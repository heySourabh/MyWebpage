description = [
    "Is the flow incompressible?",
    "Gravitational force acting on a spacecraft",
    "Units conversion",
    "Isentropic process",
    "Conservation of energy",
    "Conservation of mass",
    "Thrust developed by jet engine",
    "Jet efflux velocity",
    "Thrust with afterburner",
    "Thrust developed by rocket",
    "Effect of ambient pressure on thrust",
    "Mass flow rate of hydrogen",
    "Jet propulsion system for an automobile",
    "Flow of CO<sub>2</sub> with heat addition",
    "Heat exchanger",
    "Force acting on nozzle of rocket engine"
]

print('<table class="table table-hover">')
print('<thead class="thead-light">')
print('<tr>')
print('<th>#</th>')
print('<th>Problem Description</th>')
print('<th>Online</th>')
print('</tr>')
print('</thead>')

print('<tbody>')

for i, desc in enumerate(description):
    q = i+1
    print('<tr>')
    print(f'<th>{q}</th>')
    print('<td>')
    print(f'<a href="online/{q:02d}/index.html">')
    print(f'<img src="images/{q:02d}.png" width="200" alt="Problem {q}"><br>')
    print(desc)
    print('</a>')
    print('</td>')
    print(f'<td><a href="online/{q:02d}/index.html">link</a></td>')
    print('</tr>')

print('</tbody>')
print('</table>')
