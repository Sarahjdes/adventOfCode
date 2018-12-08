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
    print check_form(IP_address)

#for IP_address in l:
#    if re.search('\[\w+\]'):
#        print IP_address,'is not TLS'
#    if re.search
#    if n = re.search('\[\w+\]', IP_address)
#        if n:
#            in_brackets = n.group()
#
#    o = re.search('\w+$', IP_address)
#    if o:
#        end = o.group()
#    p = re.search('\]\w+\[', IP_address)
#    if p:
#        middle = p.group()

    #print beginning
    #print in_brackets
    #print end

    #if check_form(group2):
    #    print IP_address,'doesn\'t support TSL (square brackets)'
    #else:
    #    if check_form(group1) or check_form(group3):
    #        print IP_address,'supports TLS'
    #        support_TLS.append(IP_address)
    #    else:
    #        print IP_address,'doesn\'t support TLS'
    
print len(support_TLS),'IPs support TLS'
