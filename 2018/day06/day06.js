const fs = require('fs')

fs.readFile('input.txt', 'utf-8', (err, data) => {
    let dataArray = data.split('\n')

    let arrX = []
    let arrY = []

    for (let coord of dataArray) {
        arrX.push(Number(coord.split(', ')[0]))
        arrY.push(Number(coord.split(', ')[1]))
    }

    let maxX = Math.max(...arrX)
    let maxY = Math.max(...arrY)

    let minX = Math.min(...arrX)
    let minY = Math.min(...arrY)

    let coordinates = {}

    for (let coord of dataArray) {
        coordinates[coord] = 0
    }
    
    let infiniteCoords = []

    for (let x = minX; x <= maxX; x++) {
        for (let y = minY; y <= maxY; y++) {
            let coords = {}
            for (let coord of dataArray) {
                let md = Math.abs(x-coord.split(', ')[0]) + Math.abs(y-coord.split(', ')[1])
                coords[coord] = md
            }
            let closest = Object.keys(coords).reduce((a, b) => coords[a] < coords[b] ? a : b)
            let mdArray = Object.values(coords)
            let closestCount = 0
            for (let i of mdArray) {
                if (i == coords[closest])
                    closestCount++
            }
            if (closestCount == 1)
                coordinates[closest]++
            if (x == minX || x == maxX || y == minY || y == maxY) {
                if (closestCount == 1) {
                    if (infiniteCoords.indexOf(closest) == -1)
                        infiniteCoords.push(closest)
                }
            } 
        }
    }

    for (let i of infiniteCoords) {
        delete coordinates[i]
    }

    let biggest = Object.keys(coordinates).reduce((a, b) => coordinates[a] > coordinates[b] ? a : b)

    console.log('largest finite area:', coordinates[biggest])

    let safeRegion = 0

    for (let x = minX; x <= maxX; x++) {
        for (let y = minY; y <= maxY; y++) {
            let mdSum = 0
            for (let coord of dataArray) {
                let md = Math.abs(x-coord.split(', ')[0]) + Math.abs(y-coord.split(', ')[1])
                mdSum += md
            }
            if (mdSum < 10000)
                safeRegion++
        }
    }

    console.log('safe region:', safeRegion)
})
