const fs = require('fs')

fs.readFile('input.txt', 'utf-8', (err, data) => {
    let arr = data.split('\n')
    let fabric = []
    let overlapping = {}

    for (let claim of arr) {
        let re = /#(\d+) @ (\d+),(\d+): (\d+)x(\d+)/g
        let match = re.exec(claim)
        let claimData = {
            id: match[1],
            x: Number(match[2]),
            y: Number(match[3]),
            wide: Number(match[4]),
            tall: Number(match[5])
        }

        for (let h = claimData.x; h < (claimData.wide + claimData.x); h++) {
            for (let v = claimData.y; v < (claimData.tall + claimData.y); v++) {
                let square = h + ',' + v

                if (fabric.indexOf(square) > -1)
                    overlapping[square] = true
                else 
                    fabric.push(square)
            }
        }
    }
    let overlappingCount = Object.keys(overlapping).length

    console.log('overlapping squares:', overlappingCount)
})
