const fs = require('fs')

var isDone = false

fs.readFile('input.txt', 'utf-8', (err, data) => {
    let currentConf = parser(data).map(item => parseInt(item))
    let configurations = []

    while(isDone == false) {
        main(currentConf, configurations)
    }
})

let parser = (data) => {
    return data.split('\t')
}

let loop = (toDistribute, currentCfg) => {
    if (toDistribute >= currentCfg.length) {
        toDistribute -= currentCfg.length
        if (toDistribute >= currentCfg.length) {
            console.log('still too big, will loop again')
            return loop(toDistribute, currentCfg)
        } else {
            console.log('-->', toDistribute)
            return toDistribute
        }
    } else {
        return toDistribute
    }
}

let main = (currentConfig, configurations) => {
    console.log('----------------------------------------------------------')
    console.log('current array is:', currentConfig)
    let max = Math.max(...currentConfig)    //finds bigger block
    console.log('max value is:', max)
    let maxIndex = currentConfig.indexOf(max) //index of that block
    console.log('setting value of index', maxIndex, 'to 0')
    currentConfig[maxIndex] = 0 //sets value of max block to 0
    console.log('after reset, array is:', currentConfig)
    console.log('distributing', max)
    for (i = 1; i <= max; i++) {
        console.log('[', i, ']')
        let toDistr = maxIndex + i
        console.log('hypothetical current index:', toDistr)
        let currentPosition = loop(toDistr, currentConfig)
        console.log('actual current position is:', currentPosition)
        console.log('setting new value for block number', currentPosition)
        currentConfig[currentPosition]++
    }
    console.log('done distributing')
    console.log('current config is:', currentConfig)
    let stringConfig = currentConfig.join('-')
    if (configurations.indexOf(stringConfig) == -1) {
        console.log('current config', currentConfig, 'does not exists in', configurations)
        console.log('pushing', currentConfig, 'in array')
        configurations.push(currentConfig.join('-'))
        console.log('configuration array so far:', configurations)
    } else {
        isDone = true
        return console.log('There are', configurations.length + 1, 'redistribution cycles')
    } 
}
