ordo = 50
absi = 50

favourite_number = 1362

office_create = [(x,y) for y in range(ordo) for x in range(absi)]

office = {}

def calculate((x,y)):
    return x*x+3*x+2*x*y+y+y*y

def add_favourite(x):
    return x + favourite_number

def to_binary(x):
    return "{0:b}".format(x)

def even_or_odd(x):
    sum_1 = str(x).count('1')
    if sum_1 % 2 == 0:
        return 'open_space'
    else:
        return 'wall'

def office_map():
    om = []

    office[(1, 1)] = 'start'
    office[(31, 39)] = 'finish'

    for i in office_create:
        for coord in office:
            if office[coord] == 'wall':
                office[coord] = ' '
            elif office[coord] == 'open_space':
                office[coord] = '#'
            elif office[coord] == 'start' or office[coord] == 'finish':
                office[coord] = 'O'
            elif office[coord] == ' route':
                office[coord] = '0'
        om.append(office[i])

    ##generate this map!

    for i in range(50):
        print ''.join(om[50*i:50*i+50])
        #print 50*i
        #print 50*i+50
    
def route(x,y,x2,y2):
    while office[(x2,y2)] != 'visited':
        if office[(x,y)] == 'ending':
            print 'found at','(',x,',',y,')'
            return True
        elif office[(x,y)] == 'unreachable':
            print 'wall at','(',x,',',y,')'
            return False
        elif office[(x,y)] == 'visited': 
            print 'visited at','(',x,',',y,')'
            return False

        print 'visiting %d,%d' % (x,y)

        #mark as visited
        office[(x,y)] = 'visited'
        print 'Destination'       

for i in office_create:
    office[i] = even_or_odd(to_binary(add_favourite(calculate(i))))

#print office

office_map()
route(1,1,31,39)
