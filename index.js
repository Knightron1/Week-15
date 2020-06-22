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

// console.log([...object])

// console.log(Object.keys(object))

// const emojis = ['#', '!']

// function* genFunc1(){
//     yield 'Å'
//     yield* emojis
//     yield 'Ê'
// }

// const genObj = genFunc1()


// console.log(...genObj)


function* generatorFunction1(){
    const second = yield 'First!'
    console.log(second)
    return 'All Done!'
}
const genObj = generatorFunction1()

console.log(genObj.next())
console.log(genObj.next())


// function* getLargeNumber(){
//     let number = 0
//     while (true){
//         yield getLargeNumber(10, number)
//         number++
//     }
// }

// const it = getLargeNumber()
// console.log(it.next().value)
// console.log(it.next().value)


const bookClubs = [
    {
        name: "The Cool Club",
        clubMembers: [
            {
            name: "John Doe",
            books: [
                {id: 'hs891', title: 'A Perfect Book'},
                {id: 'ey812', title: 'A Good Book'}
            ]
            }
        ],
        
    },
    {
        name: 'The Better Club',
        clubMembers: [
            {
                name: 'Jane Doe',
                books: [
                    {id: 'u8291', title: 'A Great Book'},
                    {id: 'p9201', title: 'A Nice Book'}
                ]
            }
        ]
    }
]

function* iterateBooks(books){
    for (let i=0; i < books.length; i++){
        yield books[i]
    }
}

function* iterateMembers(members){
    for (let i = 0; i < members.length; i++) {
        const clubMember = members[i]
        yield* iterateBooks(clubMember.books)
    }
}

function* iterateBookClubs(bookClubs){
    for (let i = 0; i < bookClubs.length; i++){
        const bookClub = bookClubs[i]
        yield* iterateMembers(bookClub.clubMembers)
    }
}

const it = iterateBookClubs(bookClubs)

console.log(...it)

function findBook(id){
    const genObj = iterateBookClubs(bookClubs)
    let result = genObj.next()

    while (!result.done) {
        if (result.value.id === id) {
            return result.value
        } else {
            result = genObj.next()
        }
    }
}

console.log(findBook('ey812'))