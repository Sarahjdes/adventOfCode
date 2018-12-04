const fs = require('fs')

fs.readFile('input.txt', 'utf-8', (err, data) => {
    let arr = data.split('\n')
    let fabric = {}
    let overlapping = {}
    let overlappingClaimsId = []

    let allClaims = []

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

        allClaims.push(claimData.id)

        for (let h = claimData.x; h < (claimData.wide + claimData.x); h++) {
            for (let v = claimData.y; v < (claimData.tall + claimData.y); v++) {
                let square = h + ',' + v

                if (fabric[square]) {
                    overlapping[square] = true
                    if (overlappingClaimsId.indexOf(claimData.id) == -1) {
                        overlappingClaimsId.push(claimData.id)
                    }
                    if (overlappingClaimsId.indexOf(fabric[square]) == -1) {
                        overlappingClaimsId.push(fabric[square])
                    }
                } else {
                    fabric[square] = claimData.id
                }

                fabric[square] = claimData.id
            }
        }
    }
    let overlappingCount = Object.keys(overlapping).length

    console.log('overlapping squares:', overlappingCount)

    let nonOverlapping

    for (let id of allClaims) {
        if (overlappingClaimsId.indexOf(id) == -1)
            nonOverlapping = id
    }

    console.log('non overlapping claim:', nonOverlapping)
})
