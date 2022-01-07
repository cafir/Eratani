// Buatlah logic algorithm sorting untuk data di bawah ini
//8 2 20 -7 25 -1 5

const array = [8, 2, 20, -7, 25, -1, 5];

const minToMax = (array) => {
    return array.sort((a, b) => {return a - b} )
}

console.log(minToMax(array))

const maxToMin = (array) => {
    return array.sort((a, b) => {return b - a} )
}

console.log(maxToMin(array))