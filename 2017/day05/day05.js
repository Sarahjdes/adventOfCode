const fs = require('fs')

fs.readFile('input.txt', 'utf-8', (err, data) => {
    regularProcess(parser(data))
    modifiedProcess(parser(data))
})

let parser = (input) => {
    let array = input.split('\n')
    return array.map(x => parseInt(x))
}

let regularProcess = (maze) => {
    let current = 0
    let steps = 0

    while(current < maze.length) {
        let index = current
        current += maze[index]
        maze[index]++
        steps++
    }

    return console.log('Steps needed for regular process:', steps)
}

let modifiedProcess = (maze) => {
    let current = 0
    let steps = 0

    while(current < maze.length) {
        let index = current
        current += maze[index]
        if (maze[index] >= 3) {
            maze[index]--
        } else {
            maze[index]++
        }
        steps++
    }

    return console.log('Steps needed for modified process:', steps)
}
