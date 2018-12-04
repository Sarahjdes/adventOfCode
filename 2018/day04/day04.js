const fs = require('fs')

fs.readFile('input.txt', 'utf-8', (err, data) => {
    let arr = data.split('\n').sort()

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

    let mostSleepingGuard = Object.keys(totalLog).reduce((a, b) => totalLog[a] > totalLog[b] ? a : b )

    console.log('guard sleeping the most:', mostSleepingGuard)

    let mostSleptMinute = Object.keys(log[mostSleepingGuard]).reduce((a, b) => log[mostSleepingGuard][a] > log[mostSleepingGuard][b] ? a : b)

    console.log('most slept minute:', mostSleptMinute)

    let checksumOne = mostSleepingGuard * mostSleptMinute

    console.log('checksum strategy 1:', checksumOne)

    let mostSleptMinuteByGuard = {}
    let frequencyOfMostSleptMinute = {}

    for (let guard in log) {
        mostSleptMinuteByGuard[guard] = Object.keys(log[guard]).reduce((a, b) => log[guard][a] > log[guard][b] ? a : b)
        let mostSlept = mostSleptMinuteByGuard[guard]
        frequencyOfMostSleptMinute[guard] = log[guard][mostSlept]
    }

    let guardSleepingTheMostAtSingleMinute = Object.keys(frequencyOfMostSleptMinute).reduce((a, b) => frequencyOfMostSleptMinute[a] > frequencyOfMostSleptMinute[b] ? a : b)

    console.log('guard sleeping the most:', guardSleepingTheMostAtSingleMinute)
    console.log('most slept minute:', mostSleptMinuteByGuard[guardSleepingTheMostAtSingleMinute])

    let checksumTwo = guardSleepingTheMostAtSingleMinute * mostSleptMinuteByGuard[guardSleepingTheMostAtSingleMinute]
    
    console.log('checksum strategy 2:', checksumTwo)
})

