import re

f = open('input07.txt', 'r')
l = f.read().split('\n')

#print l

support_TLS = []

def check_form(group): 
    if re.search('(.)(.)\\2\\1', group):
        if re.search('(.)\\1{3}', group):
            return False
            #print 'contains a aaaa form :',group
        else:
            return True
            #print 'contains an abba form :',group
    else:
        return False
        #print 'does not contain a palindrome :',group

for IP_address in l:
    m = re.search('^\w+', IP_address)
    group1 = m.group()
    n = re.search('\[\w+', IP_address)
    group2 = n.group().replace('[', '')
    o = re.search('\w+$', IP_address)
    group3 = o.group()

    if check_form(group2):
        print IP_address,'doesn\'t support TSL (square brackets)'
    else:
        if check_form(group1) or check_form(group3):
            print IP_address,'supports TLS'
            support_TLS.append(IP_address)
        else:
            print IP_address,'doesn\'t support TLS'
    
print len(support_TLS),'IPs support TLS'
