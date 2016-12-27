f = open('input08.txt', 'r')
t = f.read().split('\n')

pixels_wide = 50
pixels_tall = 6

create_screen = [(x,y) for y in range(pixels_tall) for x in range(pixels_wide)]

screen = {}

for i in create_screen:
    screen[str(i)] = 'off'


## Will turn on all lights of a top-left rectangle

def rectangle(A,B):
    small_rectangle = [(x,y) for x in range(A) for y in range(B)]
    for i in small_rectangle:
        screen[str(i)] = 'on'


## Will rotate a row or a column

def rotate(o,A,B):
    if o == 'row':
        line = []
        for i in range(pixels_wide):
            line.append((i,A))
    elif o == 'column':
        line = []
        for i in range(pixels_tall):
            line.append((A,i))
    c_screen = screen.copy()
    for i in range(len(line)):
        screen[str(line[i])] = c_screen[str(line[i-B])]

sequence = []   # Initialy wanted to make a list of dict ('sequence') with all instructions

for i in t:
    e = {}
    m = i.split(' ')
    e['action'] = m[0]
    if m[0] == 'rect':
        n = m[1].split('x')
        e['A'] = n[0]
        e['B'] = n[1]
        rectangle(int(n[0]),int(n[1]))
    elif m[0] == 'rotate':
        e['orientation'] = m[1]
        n = m[2].split('=')
        e['A'] = n[1]
        e['B'] = m[4]
        rotate(m[1],int(n[1]),int(m[4]))
    sequence.append(e)


## 2nd STAR

def screen_display():
    
    all_pixels = []

    for i in create_screen:
        for pixel in screen:
            if screen[pixel] == 'on':
                screen[pixel] = '#'
            elif screen[pixel] == 'off':
                screen[pixel] = ' '
        all_pixels.append(screen[str(i)])

    print ''.join(all_pixels[0:50])
    print ''.join(all_pixels[50:100])
    print ''.join(all_pixels[100:150])
    print ''.join(all_pixels[150:200])
    print ''.join(all_pixels[200:250])
    print ''.join(all_pixels[250:300])

values = screen.values()
print 'Lit Pixels :',values.count('on')

print 'Code Displayed on the Screen :'
screen_display()
