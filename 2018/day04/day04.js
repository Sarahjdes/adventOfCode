const fs = require('fs')

fs.readFile('input.test.txt', 'utf-8', (err, data) => {
    let arr = data.split('\n').sort()

    console.log(arr)

    let log = {}
    let totalLog = {}

    let falls
    let id

    for (let entry of arr) {
        let re = /\[(\d+)-(\d+)-(\d+) (\d+):(\d+)\] (Guard #(\d+)|falls|wakes)/g

        let match = re.exec(entry)

        let minute = Number(match[5])
        let action = match[6]
        let guardId = match[7]

        if (action.match('Guard')) {
            id = guardId
            if (!log[id]) {
                totalLog[id] = 0
            }
        } else if (action == 'falls') {
            falls = minute
        } else if (action == 'wakes') {
            totalLog[id] += (minute-falls)
            for (let i = falls; i < minute; i++) {
                if (!log[id])
                    log[id] = {}
                if (!log[id][i])
                    log[id][i] = 0
                log[id][i]++
            }
        }

        falls = minute
    }

    let mostSleepingGuard = Object.keys(totalLog).reduce(function(a, b){ return totalLog[a] > totalLog[b] ? a : b });

    console.log('guard sleeping the most:', mostSleepingGuard)

    let mostSleptMinute = Object.keys(log[mostSleepingGuard]).reduce((a, b) => log[mostSleepingGuard][a] > log[mostSleepingGuard][b] ? a : b)

    console.log('most slept minute:', mostSleptMinute)

    let checksum = mostSleepingGuard * mostSleptMinute

    console.log('checksum:', checksum)
})

