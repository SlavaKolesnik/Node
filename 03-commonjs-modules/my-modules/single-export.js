function greeting(name) {
    console.log('Hello,', name)
}

console.log(__filename)
module.exports = greeting

// DON'T dO THIS!
// module.exports remain {}
// exports = greeting
