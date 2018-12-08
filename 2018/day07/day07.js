const fs = require('fs')

fs.readFile('input.txt', 'utf-8', (err, data) => {
    let dataArray = data.split('\n')

    let re = /Step (\w+) must be finished before step (\w+) can begin./

    let instructions = []
    let available = []      //pre-requisites are cleared/completed
    let toComplete = []
    let completed = []      //can be cleared from prereq arrays

    // Creates toComplete array
    for (let item of dataArray) {
        let match = re.exec(item)

        instructions.push({
            prereq: match[1],
            letter: match[2] 
        })
        if (toComplete.indexOf(match[2]) == -1)
            toComplete.push(match[2])
    }

    // Array of objects that represent the letters and their pre-requisites
    let prereq = {}

    for (let line of instructions) {
        let letter = line.letter
        if (!prereq[letter])
            prereq[letter] = []
        prereq[letter].push(line.prereq)
    }

    // Creates array of available letters (prereq are met)
    for (let item of instructions) {
        if (toComplete.indexOf(item.prereq) == -1) {
            let availableLetter = item.prereq

            if (available.indexOf(availableLetter) == -1) {
                available.push(item.prereq)
            }
        }
    }

    let first = available.sort()[0]

    const main = (letter) => {
        for (let p in prereq) {
            let prereqs = prereq[p]
            for (let i in prereqs) {
                if (prereqs[i] == letter) {
                    prereqs.splice(i, 1)
                }
                if (prereqs.length == 0) {
                    available.push(p)
                    delete prereq[p]
                }
            }
        }
        completed.push(letter)
        available.shift()
        let next = available.sort()[0]
        
        if (available.length > 0) {
            main(next)
        }

        return completed
    }

    let stepsOrder = main(first)

    console.log('steps order:', stepsOrder.join('')) 
})
