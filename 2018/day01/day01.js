const fs = require('fs')

fs.readFile('input.txt', 'utf-8', (err, data) => {
    let arr = data.split('\n')

    const reducer = (acc, curr) => Number(acc) + Number(curr)

    console.log('resulting frequency:', arr.reduce(reducer))
})
