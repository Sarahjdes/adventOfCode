const fs = require('fs')

fs.readFile('input.txt', 'utf-8', (err, data) => {
    let arr = parser(data)

    let validCount = 0

    for (i = 0; i < arr.length; i++) {
        console.log(arr[i])
        let isUnique = true
        while (arr[i].length > 0 && isUnique == true) {
            let current = arr[i][0]
            arr[i].shift()
            console.log('Looking for', current, 'in', arr[i])
            if (arr[i].indexOf(current) == -1) {
                console.log(current, 'is unique!')
            } else {
                console.log(current, 'is not unique')
                isUnique = false
            }
        }
        if (isUnique == true) {
            validCount ++
        }
    }

    console.log('Valid passphrases:', validCount)
})

let parser = (data) => {
    let array = []
    let rows = data.split('\n')
    for (i = 0; i < rows.length; i++) {
        array.push(rows[i].split(' '))
    }
    return array
}
