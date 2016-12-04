f = open('input03.txt', 'r')
t = f.read().split('\n')

#print t

shapes = []

for i in t:
    numbers = map(int, i.split())
    print numbers.sort()
    shapes.append(numbers)

print shapes

possible_triangle = 0

for i in range(len(shapes)):
    c1 = shapes[i][0]
    c2 = shapes[i][1]
    h = shapes[i][2]
    if c1 + c2 > h:
        #print h,' is bigger than ',c1+c2
        possible_triangle += 1

print possible_triangle
