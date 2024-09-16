const fs = require('fs')

fs.writeFile('./first.txt', 'First file text', (err) => {
    if (err) console.log(err)
    else {
        console.log('File "first.txt" was writen')
        fs.appendFile('./first.txt', '\nOne more line', (err) => {
            if (err) console.log(err)
            else {
                console.log('Appended text to the first.txt file')
                fs.rename('./first.txt', './rename-first.txt', (err) => {
                    if (err) console.log(err)
                    else console.log('File was rename')
                })
            }
        })
    }
})
