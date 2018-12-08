f = open('test02.txt', 'r')
instr = f.read().split()

print instr

instructions = []

for i in instr:
    instructions.append(list(i))

print instructions

keypad = {'[0, 0]':'7',
    '[1, 0]':'8',
    '[2, 0]':'9',
    '[0, 1]':'4',
    '[1, 1]':'5',
    '[2, 1]':'6',
    '[0, 2]':'1',
    '[1, 2]':'2',
    '[2, 2]':'3'}

position = [int(1),int(1)]

def U():
    tmp_pos = position
    tmp_pos[1] += 1
    if str(tmp_pos) in keypad:
        return tmp_pos
    else:
        return position

def D():
    tmp_pos = position
    tmp_pos[1] -= 1
    if str(tmp_pos) in keypad:
        return tmp_pos
    else:
        return position

def R():
    tmp_pos = position
    tmp_pos[0] += 1
    if str(tmp_pos) in keypad:
        return tmp_pos
    else:
        print position
        return position

def L():
    tmp_pos = position
    tmp_pos[0] -= 1
    if str(tmp_pos) in keypad:
        return tmp_pos
    else: 
        return position

def input_instructions(input_instr):
    for i in input_instr:
        print i
        for j in i:
            print j
            if j == "U":
                position = U()
                print position
            elif j == "D":
                position = D()
                print position
            elif j == "R":
                position = R()
                print position
            elif j == "L":
                position = L()
                print position

        print 'final position',position
    print keypad[str(position)]

input_instructions(instructions)
