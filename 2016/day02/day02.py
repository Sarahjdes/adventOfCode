f = open('input02.txt', 'r')
instr = f.read().split()

#print instr

instructions = []

for i in range(len(instr)):
    instructions.append(list(instr[i]))

print instructions

keypad = {'[-1, 1]':'1', 
    '[0, 1]':'2',
    '[1, 1]':'3',
    '[-1, 0]':'4',
    '[0, 0]':'5',
    '[1, 0]':'6',
    '[-1, -1]':'7',
    '[0, -1]':'8',
    '[1, -1]':'9'}

position = [int(0),int(0)]

code = []

for i in range(len(instructions)):
    for j in range(len(instructions[i])):
        if instructions[i][j] == 'U':
            if position[1] < 1: 
                position[1] += 1
            #print '...',position
        elif instructions[i][j] == 'R':
            if position[0] < 1:
                position[0] += 1
            #print '...',position
        elif instructions[i][j] == 'D':
            if -1 < position[1]:
                position[1] -= 1
            #print '...',position
        elif instructions[i][j] == 'L':
            if -1 < position[0]:
                position[0] -= 1
            #print '...',position
    #print position
    print keypad[str(position)]
    code.append(keypad[str(position)])
    
print 'final position : ',position
#print code
print 'bathroom code : ',''.join(code)

