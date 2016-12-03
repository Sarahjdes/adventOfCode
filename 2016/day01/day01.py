f = open('input01.txt', 'r')
instr = f.read().split(', ')

print instr

instructions = []

for i in range(0,len(instr)):
    coo = []
    coo.append(instr[i][0])
    coo.append(int(instr[i][1:]))
    instructions.append(coo)

print instructions

direction = 'north'

position = [0,0]

for i in range(0,len(instructions)):
    if direction == 'north':
        if instructions[i][0] == 'R':
            position[0] = position[0]+instructions[i][1]
            direction = 'east'
        elif instructions[i][0] == 'L':
            position[0] = position[0]-instructions[i][1]
            direction = 'west'
    elif direction == 'east':
        if instructions[i][0] == 'R':
            position[1] = position[1]-instructions[i][1]
            direction = 'south'
        elif instructions[i][0] == 'L':
            position[1] = position[1]+instructions[i][1]
            direction = 'north'
    elif direction == 'south':
        if instructions[i][0] == 'R':
            position[0] = position[0]-instructions[i][1]
            direction = 'west'
        elif instructions[i][0] == 'L':
            position[0] = position[0]+instructions[i][1]
            direction = 'east'
    elif direction == 'west':
        if instructions[i][0] == 'R':
            position[1] = position[1]+instructions[i][1]
            direction = 'north'
        elif instructions[i][0] == 'L':
            position[1] = position[1]-instructions[i][1]
            direction = 'south'
    #print position

print 'final position : ',position

blocks_away = abs(position[1])+abs(position[0])

print 'blocks away : ',blocks_away
