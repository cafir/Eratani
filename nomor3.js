// Buatlah fungsi logic algorithm search dari array di bawah ini:

const data = ['Danawi Liam','Tarjaya','Daruna','Warsoni', 'John Wick','Hadi PS','Derian Lekso']

const searchArray = (input) => {
    return data.filter((x) => x.toLowerCase().includes(input.toLowerCase()))
}

console.log(searchArray("Danawi Liam")) //[ 'Danawi Liam' ]
console.log(searchArray("Danawi")) //[ 'Danawi Liam' ]
console.log(searchArray("Da")) // [ 'Danawi Liam', 'Daruna']