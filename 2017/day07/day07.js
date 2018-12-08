const fs = require('fs')

fs.readFile('input.txt', 'utf-8', (err, data) => {
    let structure = parse(data)

    allNamesAbove = []
     
    pushAllChildrens(structure, allNamesAbove)

    console.log('The bottom program is:', findBottomProgram(structure, allNamesAbove))

    //console.log(structure)

    for (let i in structure) {
        let tower = structure[i]
        let totalWeight = tower.weight
        
        if (tower.namesAbove) {
           getWeight(tower.namesAbove) 
        }

        tower.totalWeight = totalWeight
    }

    let newStructure = structure.map((tower) => {
        if (tower.namesAbove) {
            tower.namesAbove.map(subTower => {
                    //console.log(weightByName(structure, subTower))
                if (subTower.namesAbove) {
                } 
            })
                //console.log('--')
        } else {
            tower.totalWeight = tower.weight
        }
    })

    console.log(structure)
})

let parse = (data) => {
    let arr = data.split('\n')
    return arr.map(line => {
        let info = {}
        info.name = line.split('-> ')[0].split(' ')[0]
        info.weight = line.split('-> ')[0].split(' ')[1].match(/(\d+)/)[0]
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

let findDiscTowersWeight = (tower) => {
    console.log(tower.namesAbove)
    tower.namesAbove.map(x => console.log(x))
}

let weightByName = (array, towerName) => {
    let result = array.filter(tower => tower.name == towerName)
    return console.log(result[0].weight, result[0].namesAbove)
}

let namesAboveByName = (array, towerName) => {
    let result = array.filter(tower => tower.name == towerName)
    return console.log(result[0].namesAbove)
}

let getWeight = (obj) => {
    if (obj.namesAbove) {
        for (let i in obj.namesAbove) {
            getWeight(obj.namesAbove[i])
        }
    } else {
        return obj.weight
    }
}
