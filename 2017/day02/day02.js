const fs = require('fs')

fs.readFile('input.txt', 'utf-8', (err, data) => {
    let arr = parser(data)
    let differences = []
    for (i = 0; i < arr.length; i++) {
        differences.push(max(arr[i])-min(arr[i]))
    }
    console.log('Checksum: ', differences.reduce(sum))
})

let parser = (data) => {
    let array = []
    let rows = data.split('\n')
    for (i = 0; i < rows.length; i++) {
        array.push(rows[i].split('\t'))
    }
    return array
}

let min = (arr) => {
    let map = arr.map(item => parseInt(item))
    return Math.min(...map)
}

let max = (arr) => {
    let map = arr.map(item => parseInt(item))
    return Math.max(...map)
}

let sum = (acc, curr) => acc + curr
