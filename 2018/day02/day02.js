const fs = require('fs')

fs.readFile('input.txt', 'utf-8', (err, data) => {
    let arr = data.split('\n')
    let containsTwoCount = 0
    let containsThreeCount = 0

    for (let id of arr) {
        let containsTwo = false
        let containsThree = false
        for (let letter of id) {
            let count = 0
            for (let i of id) {
                if (letter == i) {
                    count++
                }
            }
            if (count == 2)
                containsTwo = true
            if (count == 3)
                containsThree = true
        }
        if (containsTwo)
            containsTwoCount++
        if (containsThree)
            containsThreeCount++
    }
    console.log('checksum:', containsTwoCount * containsThreeCount)
})
