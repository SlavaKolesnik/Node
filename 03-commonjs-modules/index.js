const { myName, myHobbies, myFavoriteNumber } = require('./multiple-export')
const {
    myName: myOtherName,
    myFriendsName,
    myGreatHobbies,
} = require('./export-and-import')

const greetingFn = require('./my-modules/single-export')
// DON'T USE ABSOLUTE PATHS
// const greetingFn = require('c:\\Users\\Administrator\\Desktop\\Node\\03-commonjs-modules\\single-export.js')

// Import from multiple-exports
console.log(myName)
console.log(myFavoriteNumber)
console.log(myHobbies)

// mutates array in the multiple-exports module!
myHobbies.push('climbing')

// Import from single-export
console.log(myHobbies)
greetingFn(myName)

// Imports from export-and-import
console.log(myOtherName)
console.log(myFriendsName)
console.log(myGreatHobbies)
