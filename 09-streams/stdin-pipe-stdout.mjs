import { Transform } from 'stream'
import fs from 'fs'

// // Pipe to file
// const filePath = './files/stdin-dump.txt'
// const writeStream = fs.createWriteStream(filePath)
// process.stdin.pipe(writeStream)

// // Pipe to stdout
// process.stdin.pipe(process.stdout)

const upperCaseStream = new Transform({
    transform: function (chunk, encoding, cb) {
        const upperCased = chunk.toString().toUpperCase()
        cb(null, upperCased)
    },
})

const reverseString = new Transform({
    transform(chunk, encoding, cb) {
        const arrayOfChars = chunk.toString().split('')
        const lastChar = arrayOfChars.pop()
        const reversString = arrayOfChars.reverse().concat(lastChar).join('')
        cb(null, reversString)
    },
})

process.stdin.pipe(upperCaseStream).pipe(reverseString).pipe(process.stdout)
