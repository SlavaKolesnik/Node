import EventEmitter from 'events'
import fs from 'fs'

const fileEmiter = new EventEmitter()

const filePath = '.first.txt'

fileEmiter.on('writeComplete', () => {
    console.log(`File "${filePath}" was writen`)
    fs.appendFile(filePath, '\nOne more line', () => {
        fileEmiter.emit('appendComplete')
    })
})

fileEmiter.on('appendComplete', () => {
    console.log(`Appended text to the "${filePath}" file`)
    fs.rename(filePath, './rename-first.txt', () => {
        fileEmiter.emit('renameComplete')
    })
})

fileEmiter.on('renameComplete', () => {
    console.log('File was rename')
})

fs.writeFile(filePath, 'First file text', () => {
    fileEmiter.emit('writeComplete')
})
