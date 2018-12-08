f = open('test11.txt', 'r')
t = f.read().split('\n')

print t

a = 0
b = 0
c = 0
d = 0

def cpy(x,y):
    y = x
    print y
    return y

def inc(x):
    x += 1
    return x

def dec(x):
    x -= 1
    return x

def jnz(x,y):
    if x != 0:
        i += y
    return i

for i in t:
    m = i.split(' ')
    if m[0] == 'cpy':
        cpy(m[1],m[2])
    elif m[0] == 'inc':
        print m[1]
        inc(int(m[1]))
    elif m[0] == 'dec':
        dec(int(m[1]))
    elif m[0] == 'jnz':
        jnz(m[0])
