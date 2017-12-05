const fs = require('fs')

fs.readFile('input.txt', 'utf-8', (err, data) => {
    let maze = parser(data)
    let current = 0
    let steps = 0

    while(current < maze.length) {
        let index = current
        current += maze[index]
        maze[index]++
        steps++
    }

    console.log('Steps needed:', steps)
})

let parser = (input) => {
    let array = input.split('\n')
    return array.map(x => parseInt(x))
}
