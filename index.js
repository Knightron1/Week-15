function normalFunction(){
    console.log("this is the first message")
    console.log("this is the second message")
    console.log("this is the third message")
    console.log("this is the fourth message")
}

console.log(normalFunction());


function* genFunc(){
    yield 'STARS'
    console.log('First Log!')
    yield 'HEARTS'
    console.log('Second Log!')
    return 'Done!'
}

console.log(genFunc());
