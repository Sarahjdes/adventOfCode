const fs = require('fs')

fs.readFile('input.txt', 'utf-8', (err, data) => {
    let arr = data.split('') 

    const areOpposites = (a, b) => {
        if ((a.toLowerCase() == b) || (a.toUpperCase() == b))
            if (a != b)
                return true
        else
            return false
    }

    const removeOpposites = (dataArray) => {
        let hasChanged = false
        for (let i = 0; i < dataArray.length; i++) {
            if (areOpposites(dataArray[i], dataArray[i+1])) {
                dataArray.splice(i, 2)
                hasChanged = true
                i--
            }
        }
        if (hasChanged)
            removeOpposites(dataArray)
        return dataArray
    } 
    
    let starOneData = arr.slice()
    let reactedPolymer = removeOpposites(starOneData)

    console.log('units remaining of fully reacted polymer:', reactedPolymer.length)

    const removePairs = (letter, dataArray) => {
        for (let i = 0; i < dataArray.length; i++) {
            if (dataArray[i] == letter || dataArray[i] == letter.toLowerCase()) {
                dataArray.splice(i, 1)
                i--
            }
        }
        return dataArray
    }

    let allReactedShortenedPolymers = []

    for (let i = 65; i <= 90; i++) {
        let starTwoData = arr.slice()
        let shortened = removePairs(String.fromCharCode(i), starTwoData)
        let reactedShortenedPolymer = removeOpposites(shortened)
        allReactedShortenedPolymers.push(reactedShortenedPolymer.length)
        allReactedShortenedPolymers.sort()
    }
    console.log('shorter produced polymer:', allReactedShortenedPolymers[0])
})
