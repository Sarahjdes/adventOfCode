import re

f = open('input04.txt', 'r')
l = f.read().split('\n')

#print l

def order_str(a_string):
    mylist = []
    a_list = list(a_string)
    a_list.sort()
    sorted_list = ''.join(a_list)
    return sorted_list

encrypted_name = 'aaaaa-bbb-z-y-x-123[abxyz]'
encrypted_name1 = 'not-a-real-room-404[oarel]'
encrypted_name2 = 'a-b-c-d-e-f-g-h-987[abcde]'

sectorID_sum = 0

real_room = 0

for encrypted_name in l:

    m = re.search('^\D+', encrypted_name)
    n = re.search('\d+', encrypted_name)
    o = re.search('\[(\w{5})\]', encrypted_name)

    name = order_str(m.group().replace('-', ''))
    sectorID = int(n.group())
    checksum = o.group().replace('[', '').replace(']', '')

    print 'name : ',name
    print 'sectorID : ',sectorID
    print 'checksum : ',checksum

    d = {}

    for i in list(set(name)):
        name.count(i)
        d[i] = name.count(i)

    print d

    possible_sector = ''.join(sorted(d, key=d.__getitem__, reverse=True)[0:5])

    print possible_sector

    if possible_sector == checksum:
        print 'verdict : real room'
        sectorID_sum = sectorID_sum + sectorID
        real_room += 1
    else:
        print 'verdict : decoy'

    print '----------'
   

print 'TOTAL SECTORID : ',sectorID_sum
print 'REAL ROOM : ',real_room
