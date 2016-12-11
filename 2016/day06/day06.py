import string

f = open('test06.txt', 'r')
l = f.read().split('\n')

repetition_code = []

for i in range(len(l[0])):
    d = dict.fromkeys(string.ascii_lowercase, 0)
    for j in l:
        letter = j[i]
        d[letter] += 1
    most_common = sorted(d, key=d.__getitem__, reverse=True)[0]
    repetition_code.append(most_common)

print 'Repetition code :',''.join(repetition_code)


