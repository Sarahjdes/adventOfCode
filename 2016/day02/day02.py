f = open('test02.txt', 'r')
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

keypad_diamond = {'[2, 0]':'1',
    '[1, -1]':'2',
    '[2, -1]':'3',
    '[3, -1]':'4',
    '[0, -2]':'5',
    '[1, -2]':'6',
    '[2, -2]':'7',
    '[3, -2]':'8',
    '[4, -2]':'9',
    '[1, -3]':'A',
    '[2, -3]':'B',
    '[3, -3]':'C',
    '[2, -4]':'D'}

position = [int(0),int(0)]

position_d = [int(0),int(-2)]

tmp_coord = [int(0), int(-2)]

code = []

digits = len(instructions)

def U():
    tmp_coord[1] = position_d[1] + 1
    return 'ouistiti'

for i in range(len(instructions)):
    for j in range(len(instructions[i])):
        if instructions[i][j] == 'U':
            if position_d[1] in keypad_diamond: 
                position_d[1] += 1
                print 'ouistiti'
            print '...',position
        elif instructions[i][j] == 'R':
            if position_d[0] < 1:
                position_d[0] += 1
            #print '...',position
        elif instructions[i][j] == 'D':
            if -1 < position_d[1]:
                position_d[1] -= 1
            #print '...',position
        elif instructions[i][j] == 'L':
            if -1 < position_d[0]:
                position_d[0] -= 1
            #print '...',position
    #print position
    print keypad[str(position)]
    code.append(keypad[str(position)])

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
    #print keypad[str(position)]
    #code.append(keypad[str(position)])
    
#print 'final position : ',position
#print code
#print 'bathroom code : ',''.join(code)

print U()
