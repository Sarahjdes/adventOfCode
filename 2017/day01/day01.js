const fs = require('fs')

fs.readFile('input.txt', 'utf-8', (err, data) => {
    let dataArr = data.split('')
    let digits = []
    console.log(dataArr)
    for (let i = 0; i < dataArr.length; i++) {
        if (dataArr[i] == dataArr[i+1]) {
            digits.push(parseInt(dataArr[i]))
        }
    }

    if (dataArr[0] == dataArr[dataArr.length - 1]) {
        digits.push(parseInt(dataArr[0]))
    }
    let summer = (accumulator, currentValue) => accumulator + currentValue
    console.log('Sum: ',digits.reduce(summer))
})
