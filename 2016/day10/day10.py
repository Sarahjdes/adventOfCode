import pprint

f = open('input10.txt', 'r')
t = f.read().split('\n')

#print t

d = {}
out = {}

#values to compare

microchip_a = 17
microchip_b = 61

def from_input(num,chip):
    if not num in d:
        d[num] = []
    d[num].append(int(chip))

def give(num,receiver_num,dest,chip):
    if dest == 'output':
        if not receiver_num in out:
            out[receiver_num] = []
        out[receiver_num].append(chip)
        d[num].remove(chip)
    if dest == 'bot':
        if not receiver_num in d:
            d[receiver_num] = []
        d[receiver_num].append(chip)
        d[num].remove(chip)
    #print chip,'was given from',num,'to',dest,receiver_num

def find_comparer(a,b):
    for key, value in c.iteritems():
        if value == [a, b]:
            return key

## Populate d with input

for i in t:
    m = i.split(' ')
    if m[0] == 'value':
        #print '..',m
        #print 'bot :',m[5],'has chip :',m[1]
        from_input(m[5],m[1])

## Parsing data to create instr

instr = {}

for i in t:
    m = i.split(' ')
    if m[0] == 'bot':
        bot = m[1]
        instr[bot] = {}
        instr[bot]['low'] = {}
        instr[bot]['high'] = {}
        instr[bot]['low']['t'] = m[5]
        instr[bot]['low']['n'] = m[6]
        instr[bot]['high']['t'] = m[10]
        instr[bot]['high']['n'] = m[11]
        
## Search in d for bots with 2 chips

c = {}

while len(d) > 0:
    for num, chip in d.copy().iteritems():
        if len(chip) == 2:
            #print num,'has',chip
            chip.sort()
            bot_with_two = num
            chip1 = chip[0]
            chip2 = chip[1]
            c[bot_with_two] = [chip1, chip2]
            give(bot_with_two,instr[bot_with_two]['low']['n'],instr[bot_with_two]['low']['t'],chip1)
            give(bot_with_two,instr[bot_with_two]['high']['n'],instr[bot_with_two]['high']['t'],chip2)
            d.pop(bot_with_two)

print 'Bot :',bot
print 'Output bin :',out
#print 'Comparisons :',c
print 'Bot :',find_comparer(microchip_a,microchip_b),'compared values :',microchip_a,'and',microchip_b
print 'Multiplied output from 0, 1 and 2 :',out[str(0)][0]*out[str(1)][0]*out[str(2)][0]
