f = open('input03.txt', 'r')
t = f.read().split('\n')

#print t

shapes = []

for i in t:
    numbers = map(int, i.split())
    numbers.sort()
    shapes.append(numbers)

#print shapes

possible_triangle = 0

for i in range(len(shapes)):
    c1 = shapes[i][0]
    c2 = shapes[i][1]
    h = shapes[i][2]
    if c1 + c2 > h:
        #print h,' is bigger than ',c1+c2
        possible_triangle += 1

print 'Possible row triangle : ',possible_triangle

## Part 02 ##

#print t

vertical = []
vertical1 = []
vertical2 = []
vertical3 = []

for i in t:
    numbers = map(int, i.split())
    #print numbers
    vertical1.append(numbers[0])
    vertical2.append(numbers[1])
    vertical3.append(numbers[2])

vertical = vertical1 + vertical2 + vertical3

vertical_shapes = [vertical[i:i+3] for i in range(0, len(vertical), 3)]

for i in vertical_shapes:
    i.sort()

#print vertical_shapes

possible_vertical_triangle = 0

for i in range(len(vertical_shapes)):
    c1 = vertical_shapes[i][0]
    c2 = vertical_shapes[i][1]
    h = vertical_shapes[i][2]
    if c1 + c2 > h:
        possible_vertical_triangle += 1

print 'Possible vertical triangle : ',possible_vertical_triangle
