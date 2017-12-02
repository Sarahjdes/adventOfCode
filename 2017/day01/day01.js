const fs = require('fs')

fs.readFile('input.txt', 'utf-8', (err, data) => {
    let arr = data.split('')

    let sum = 0
    let step = 1
    for (let i = 0; i < arr.length; i++) {
        let nextStep = i + step
        if (nextStep >= arr.length){
            nextStep = arr.length - nextStep
        }
        if (arr[i] == arr[nextStep]) {
            sum += parseInt(arr[i])
        }
    }
    console.log('Sum 100%: ',sum)

    let sum50 = 0
    let step50 = arr.length/2
    for (let i = 0; i < arr.length; i++) {
        let nextStep50 = i + step50
        if (nextStep50 >= arr.length){
            nextStep50 -= arr.length
        }
        if (arr[i] == arr[nextStep50]) {
            sum50 += parseInt(arr[i])
        }
    }
    console.log('Sum 50%: ',sum50)
})
