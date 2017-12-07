const fs = require('fs')

fs.readFile('input.txt', 'utf-8', (err, data) => {
    let structure = parse(data)

    allNamesAbove = []
     
    pushAllChildrens(structure, allNamesAbove)

    console.log('The bottom program is:', findBottomProgram(structure, allNamesAbove))
})

let parse = (data) => {
    let arr = data.split('\n')
    return arr.map(line => {
        let info = {}
        info.name = line.split('-> ')[0].split(' ')[0]
        info.weigh = line.split('-> ')[0].split(' ')[1].match(/(\d+)/)[0]
        if (line.split('-> ')[1] !== undefined) {
            info.namesAbove = line.split('-> ')[1].split(', ')
        }
        return info
    })
}

let pushAllChildrens = (structure, array) => {
    for (i = 0; i < structure.length; i++) {
        if (structure[i].namesAbove) {
            allNamesAbove.push(...structure[i].namesAbove)
        }
    }
    return allNamesAbove
}

let findBottomProgram = (structure, array) => {
    for (i = 0; i < structure.length; i++) {
        if (allNamesAbove.indexOf(structure[i].name) == -1) {
            return structure[i].name
        }
    } 
}
