f = open('input03.txt', 'r')
t = f.read().split('\n')

## Part 01 ##

horizontal_shapes = []

for i in t:
    numbers = map(int, i.split())
    horizontal_shapes.append(numbers)

# Create a function to check if a list of 3 numbers can be a triangle

def check_if_triangle(shapes):
    possible_triangle = 0
    for i in range(len(shapes)):
        shapes[i].sort()    #sorts so hypotenuse is the third one (index = 2)
        c1 = shapes[i][0]
        c2 = shapes[i][1]
        h = shapes[i][2]
        if c1 + c2 > h:
            possible_triangle +=1
    return possible_triangle

print 'Possible row triangle : ',check_if_triangle(horizontal_shapes)


## Part 02 ##

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

#print vertical_shapes

print 'Possible vertical triangle : ',check_if_triangle(vertical_shapes)
