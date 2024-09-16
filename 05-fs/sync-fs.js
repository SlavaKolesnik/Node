const fs = require('fs')

// Avoid using sync version! They block event loop!
try {
    fs.writeFileSync('./first.txt', 'First file text')
    console.log('File "first.txt" was writen')
    fs.appendFileSync('./first.txt', '\nOne more line')
    console.log('Appended text to the first.txt file')
    fs.renameSync('./first.txt', './rename-first.txt')
    console.log('File was rename')
} catch (error) {
    console.log(error)
}
