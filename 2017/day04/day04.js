const fs = require('fs')

fs.readFile('input.txt', 'utf-8', (err, data) => {
    let arr = parser(data, false)

    let validCount = 0
    let enforcedValidCount = 0

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

    let arrEnforced = parser(data, true)

    for (i = 0; i < arrEnforced.length; i++) {
        console.log(arrEnforced[i])
        let isUnique = true
        arrEnforced[i].sort()
        console.log(arrEnforced[i])
        while (arrEnforced[i].length > 0 && isUnique == true) {
            let current = arrEnforced[i][0]
            arrEnforced[i].shift()
            console.log('Looking for', current, 'in', arrEnforced[i])
            if (arrEnforced[i].indexOf(current) == -1) {
                console.log(current, 'is unique!')
            } else {
                console.log(current, 'is not unique')
                isUnique = false
            }
        }
        if (isUnique == true) {
            enforcedValidCount ++
        }
    }

    console.log('Valid passphrases:', validCount)
    console.log('Valid passphrases (enforced):', enforcedValidCount)
})

let parser = (data, sort) => {
    let array = []
    if (sort == false) {
        let rows = data.split('\n')
        for (i = 0; i < rows.length; i++) {
            array.push(rows[i].split(' '))
        }
    } else if (sort == true) {
        let rows = data.split('\n')
        for (i = 0; i < rows.length; i++) {
            let subArray = []
            let words = rows[i].split(' ')
            for (j = 0; j < words.length; j++) {
                let letters = words[j].split('')
                letters.sort()
                let orderedLetters = letters.join('')
                subArray.push(orderedLetters)
            }
            array.push(subArray)
        }
    }
    return array
}
