questions = 48
for q in range(1, questions + 1):
    print('<tr>')
    print('<th>%d</th>' % q)
    print('<td><img src="images/q%02d.png" alt=""><br>' % q)
    print('problem desc')
    print('</td>')
    print('<td><a href="#">q%02d.pdf</a></td>' % q)
    print('<td><a href="#">q%02d.py</a></td>' % q)
    print('</tr>')
