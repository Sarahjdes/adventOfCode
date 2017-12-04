const fs = require('fs')

fs.readFile('input.txt', 'utf-8', (err, data) => {
    console.log('Valid passphrases:', validator(data, false))
    console.log('Valid passphrases (enforced):', validator(data, true))
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

let validator = (data, enforced) =>  {
    let array = parser(data, enforced)

    let validCount = 0

    for (i = 0; i < array.length; i++) {
        let isUnique = true
        while (array[i].length > 0 && isUnique == true) {
            let current = array[i][0]
            array[i].shift()
            //console.log('Looking for', current, 'in', array[i])
            if (array[i].indexOf(current) == -1) {
                //console.log(current, 'is unique!')
            } else {
                //console.log(current, 'is not unique')
                isUnique = false
            }
        }
        if (isUnique == true) {
            validCount ++
        }
    }
    
    return validCount    
}
