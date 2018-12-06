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

    let reactedPolymer = removeOpposites(arr)

    console.log('units remaining of fully reacted polymer:', reactedPolymer.length)
})
