const fs = require('fs')

fs.readFile('input.txt', 'utf-8', (err, data) => {
    let instructions = parser(data)
    let registerSet = []
    let allValues = []

    createRegisters(instructions, registerSet)

    for (let i in instructions) {
        let current = instructions[i]
        let statement = (getRegisterValue(current.condition.register, registerSet) + current.condition.operator + current.condition.value)
        if (eval(statement)) {
            changeRegisterValue(current.register, registerSet, current.incdec, current.amount, allValues)
        } else {
        }
    }

    let finalValues = []

    for (let i in registerSet) {
        finalValues.push(registerSet[i].value)
    }

    console.log('Largest end value:', Math.max(...finalValues))

    console.log('Largest ever value:', Math.max(...allValues))
})

let parser = (data) => {
    let array = []
    let lines = data.split('\n')
    for (let i in lines) {
        if (lines[i].split(' if ')[1].split(' ')[1] == 'inc') {
            var op = 1
        } else {
            var op = -1
        }
        let line = {
            register: lines[i].split(' ')[0],
            incdec: lines[i].split(' ')[1],
            amount: parseInt(lines[i].split(' ')[2]),
            condition: {
                register: lines[i].split(' if ')[1].split(' ')[0], 
                operator: lines[i].split(' if ')[1].split(' ')[1], 
                value: parseInt(lines[i].split(' if ')[1].split(' ')[2])
            }
        }
        array.push(line)
    } 
    return array
}

let createRegisters = (instructionsArray, registerArray) => {
    for (let i in instructionsArray) {
        registerArray.push({
            registerName: instructionsArray[i].register, 
            value: 0
        })
    }
}

let getRegisterValue = (registerName, array) => {
    let register = array.filter((obj) => {
        return obj.registerName == registerName
    })
    return register[0].value
}

let changeRegisterValue = (name, array, incdec, amount, allValuesArray) => {
    let register = array.filter((obj) => {
        return obj.registerName == name
    })
    if (incdec == 'inc') {
        allValuesArray.push(register[0].value + amount)
        return register[0].value += amount
    } else {
        allValuesArray.push(register[0].value - amount)
        return register[0].value -= amount
    }
}
