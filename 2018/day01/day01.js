const fs = require('fs')

fs.readFile('input.txt', 'utf-8', (err, data) => {
    let arr = data.split('\n')

    const reducer = (acc, curr) => Number(acc) + Number(curr)

    console.log('resulting frequency:', arr.reduce(reducer))

    let frequencies = []
    let currentFrequency = 0
    let twice

    let loopIt = (arr) => {
        frequencies.push(currentFrequency)
        for (let i of arr) {
            currentFrequency += Number(i)

            if (frequencies.indexOf(currentFrequency) < 0){
                frequencies.push(currentFrequency)
            } else {
                twice = currentFrequency
                return
            }
        }
        if (!twice)
            loopIt(arr)
    }

    loopIt(arr)

    console.log('first frequency to appear twice:', currentFrequency)
})
