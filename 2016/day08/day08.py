f = open('input08.txt', 'r')
t = f.read().split('\n')

print t

pixels_wide = 50
pixels_tall = 6

create_screen = [(x,y) for x in range(pixels_wide) for y in range(pixels_tall)]

screen = {}

for i in create_screen:
    screen[str(i)] = 'off'

#Will turn on all lights of a top-left rectangle

def rectangle(A,B):
    small_rectangle = [(x,y) for x in range(A) for y in range(B)]
    for i in small_rectangle:
        #print i
        screen[str(i)] = 'on'

def rotate(o,A,B):
    if o == 'row':
        line = []
        for i in range(pixels_wide):
            line.append((i,A))
        print 'Line :',line
    elif o == 'column':
        line = []
        for i in range(pixels_tall):
            print (A,i)
            line.append((A,i))
        print 'Line :',line
    c_screen = screen.copy()
    for i in range(len(line)):
        print c_screen[str(line[i-B])]
        screen[str(line[i])] = c_screen[str(line[i-B])]

sequence = []

for i in t:
    e = {}
    m = i.split(' ')
    e['action'] = m[0]
    if m[0] == 'rect':
        n = m[1].split('x')
        e['A'] = n[0]
        e['B'] = n[1]
        print n[0]
        print n[1]
        rectangle(int(n[0]),int(n[1]))
    elif m[0] == 'rotate':
        e['orientation'] = m[1]
        n = m[2].split('=')
        e['A'] = n[1]
        e['B'] = m[4]
        rotate(m[1],int(n[1]),int(m[4]))
    sequence.append(e)

#for i in sequence:
#    print i
#    if i['action'] == 'rect':
#        rectangle(i['A'],i['B'])
#    elif i['action'] == 'rotate':
#        rotate(i['orientation'],i['A'],i['B'])

def testing_pixels():
    for pixel in screen:
        if screen[pixel] == 'on':
            screen[pixel] = '#'
        elif screen[pixel] == 'off':
            screen[pixel] = '.'
    print screen['(0, 0)'],screen['(1, 0)'],screen['(2, 0)'],screen['(3, 0)'],screen['(4, 0)'],screen['(5, 0)'],screen['(6, 0)']
    print screen['(0, 1)'],screen['(1, 1)'],screen['(2, 1)'],screen['(3, 1)'],screen['(4, 1)'],screen['(5, 1)'],screen['(6, 1)']
    print screen['(0, 2)'],screen['(1, 2)'],screen['(2, 2)'],screen['(3, 2)'],screen['(4, 2)'],screen['(5, 2)'],screen['(6, 2)']

#testing_pixels()

#rectangle(3,2)
#testing_pixels()

#rotate('column',1,1)
#testing_pixels()

#rotate('row',0,4)
#testing_pixels()

#rotate('column',1,1)
#testing_pixels()

values = screen.values()
print values.count('on')
