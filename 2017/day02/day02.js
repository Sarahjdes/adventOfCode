const fs = require('fs')

fs.readFile('input.txt', 'utf-8', (err, data) => {
    let arr = parser(data)
    let differences = []
    for (i = 0; i < arr.length; i++) {
        differences.push(max(arr[i])-min(arr[i]))
    }
    console.log('Checksum Difference: ', differences.reduce(sum))

    let divisibles = []
    for (i = 0; i < arr.length; i++) {
        let row = arr[i].map(x => parseInt(x))
        row.sort((a, b) => b-a)
        while (row.length > 0) {
            for (j = 1; j < row.length; j++) {
                if (row[0]%row[j] == 0) {
                    divisibles.push(row[0]/row[j])
                }
            }
            row.shift()
        }
    }
    console.log('Checksum Divisible: ', divisibles.reduce(sum))
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

let divide = (acc, curr) => acc / curr
