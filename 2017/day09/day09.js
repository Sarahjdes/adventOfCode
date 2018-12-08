const fs = require('fs')

fs.readFile('input.txt', 'utf-8', (err, data) => {
    console.log(removeGarbage(data))
})

let parser = (input) => {
    let re = /(\{.*\})/
    console.log(input.match(re))
}

let removeGarbage = (input) => {
    let empty = /\<\>/g
    let randomChar = /\<.+\>/g
    let extraLt = /\<+\>/g
    let exclamation = /!./g

    noExclamation = input.replace(exclamation, '')
    noExtraLt = noExclamation.replace(extraLt, '')
    noRandomChar = noExtraLt.replace(randomChar, '')
    noEmpty = noRandomChar.replace(empty, '')
    
    return noEmpty
}


