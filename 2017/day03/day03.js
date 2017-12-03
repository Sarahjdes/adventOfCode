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

    console.log('Index:', index, 
        '\tNumber:', square.number, 
        '\tCoordinates:', square.coordinates, 
        '\tBottom-Right:', corner.bottomright.number, 
        '\tTop-Right:', corner.topright.number, 
        '\tTop-Left:', corner.topleft.number,  
        '\tBottom-Left:', corner.bottomleft.number)

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
