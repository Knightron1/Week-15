function normalFunction(){
    console.log("this is the first message")
    console.log("this is the second message")
    console.log("this is the third message")
    console.log("this is the fourth message")
}

console.log(normalFunction());


// function* genFunc(){
//     yield 'STARS'
//     console.log('First Log!')
//     yield 'HEARTS'
//     console.log('Second Log!')
//     return 'Done!'
// }

// console.log(genFunc());

// const genObj = genFunc()

// console.log(genObj.next())
// console.log(genObj.next())
// console.log(genObj.next())
// console.log(genObj.next())

function* getSpread(){
    yield "Twon"
    yield "Too"
    yield 'Free'
}

const getObj = getSpread()

for (let item of getObj) {
    console.log(item)
}


const array = ['$', '&', '@']
const string = 'I love Javascript!'
const object =  {name: "Lydia Hallie"}
function regularFunction(){
    return 'I am a regular function'
} 
function* generatorFunction(){
    return 'I am a generator function'
}
const generatorObject = generatorFunction()

array[Symbol.iterator]

string[Symbol.iterator]

generatorObject[Symbol.iterator]

object[Symbol.iterator] = function* () {
    yield this
}

// object[Symbol.iterator] = function* () {
//     yield Object.keys(this)
// }

console.log([...object])

console.log(Object.keys(object))

const emojis = ['#', '!']

function* genFunc1(){
    yield 'Å'
    yield* emojis
    yield 'Ê'
}

const genObj = genFunc1()


console.log(...genObj)