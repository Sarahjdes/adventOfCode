const input = parseInt(process.argv[2])
console.log('Input:', input)

var coordinates

let manhattanDistance = (coord) => {
    return Math.abs(coord.x) + Math.abs(coord.y)
}

for (i = 0; coordinates == undefined; i++) {
    let index = i
    let number = (2*i+1)*(2*i+1)
    let side = 2*i + 2
    let square = {
        'number': number,
        'coordinates': {
            'x': i, 
            'y': -i
        }
    }
    let corner = {
        'bottomright': {
            'number': number + 1, 
            'coordinates': {
                'x': square.coordinates.x + 1, 
                'y': square.coordinates.y
            }
        }, 
        'topright': {
            'number': number + side,
            'coordinates': {
                'x': square.coordinates.x + 1, 
                'y': -square.coordinates.y + 1
            }
        },
        'topleft': {
            'number': number + 2 * side,
            'coordinates': {
                'x': -square.coordinates.x - 1, 
                'y': -square.coordinates.y + 1
            }
        }, 
        'bottomleft': {
            'number' : number + 3 * side,
            'coordinates': {
                'x': -square.coordinates.x - 1, 
                'y': square.coordinates.y - 1
            }
        }
    }

    /*
    console.log('Index:', index, 
        '\tNumber:', square.number, 
        '\tCoordinates:', square.coordinates, 
        '\tBottom-Right:', corner.bottomright.number, 
        '\tTop-Right:', corner.topright.number, 
        '\tTop-Left:', corner.topleft.number,  
        '\tBottom-Left:', corner.bottomleft.number)
    */

    if (input == square.number) {
        console.log('The input is a square number!')
        coordinates = square.coordinates
    } else if (input == corner.bottomright.number || 
            input == corner.topright.number || 
            input == corner.topleft.number || 
            input == corner.bottomleft.number) {
        console.log('The input is a corner!')
            if (input == corner.bottomright.number) {
                console.log('Bottom-right corner to be specific')
                coordinates = corner.bottomright.coordinates
            } else if (input == corner.topright.number) {
                console.log('Top-right corner to be specific')
                coordinates = corner.topright.coordinates
            } else if (input == corner.topleft.number) {
                console.log('Top-left corner to be specific')
                coordinates = corner.topleft.coordinates
            } else if (input == corner.bottomleft.number) {
                console.log('Bottom-left corner to be specific')
                coordinates = corner.bottomleft.coordinates
            }
    } else {
        if (input > corner.bottomright.number && input < corner.topright.number) {
            console.log('The input is on the right side')
            coordinates = {
                'x': corner.bottomright.coordinates.x, 
                'y': corner.bottomright.coordinates.y + (input - corner.bottomright.number)
            }
        } else if (input > corner.topright.number && input < corner.topleft.number) {
            console.log('The input is on the top side')
            coordinates = {
                'x': corner.topright.coordinates.x - (input - corner.topright.number), 
                'y': corner.topright.coordinates.y
            }
        } else if (input > corner.topleft.number && input < corner.bottomleft.number) {
            console.log('The input is on the left side')
            coordinates = {
                'x': corner.topleft.coordinates.x, 
                'y': corner.topleft.coordinates.y - (input - corner.topleft.number)
            }
        } else if (input > corner.bottomleft.number && input < (2*(i+1)+1)*(2*(i+1)+1)) {
            console.log('The input is on the bottom side')
            coordinates = {
                'x': corner.bottomleft.coordinates.x + (input - corner.bottomleft.number),
                'y': corner.bottomleft.coordinates.y
            }
        }
    }
}

console.log('The coordinates are:', coordinates, 'and', manhattanDistance(coordinates), 'steps are required')

let current = {
    value: 1, 
    position: {
        x: 0,
        y: 0
    }, 
    direction: 'right'
}
let filled = []

for (i = 0; current.value < input; i++) {
    let index = i

    let value = 0

    if (index == 0) {
        value = 1
    }

    for (j = 0; j < filled.length; j++) {
        let diffX = Math.abs(current.position.x - filled[j].position.x)
        let diffY = Math.abs(current.position.y - filled[j].position.y)
        if (diffX <= 1 && diffY <= 1) {
            value += filled[j].value
        } 
    }

    filled.push({
        position: {
            x: current.position.x, 
            y: current.position.y
        }, 
        value: value, 
        direction: current.direction
    })

    if (current.direction == 'up') {
        current.position.y += 1
    } else if (current.direction == 'left') {
        current.position.x -= 1
    } else if (current.direction == 'down') {
        current.position.y -= 1
    } else if (current.direction == 'right') {
        current.position.x += 1
    }

    if (current.position.x -1 == -current.position.y && current.direction == 'right') {
        current.direction = 'up'
    } else if (current.position.x == current.position.y && current.direction == 'up') {
        current.direction = 'left'
    } else if (-current.position.x == current.position.y && current.direction == 'left') {
        current.direction = 'down'
    } else if (-current.position.x == -current.position.y && current.direction == 'down') {
        current.direction = 'right'
    }

    current.value = value
} 

console.log('First value larger than', input, ':', current.value)
