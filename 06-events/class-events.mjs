import { error } from 'console'
import EventEmitter from 'events'

class Post extends EventEmitter {
    constructor(author, text) {
        super()
        this.author = author
        this.text = text
        this.likesQty = 0
        this.on('likePost', (username) => {
            console.log(`${username} liked your post!`)
        })
        this.on('error', (error) => {
            console.error(error)
        })
    }

    like(username) {
        if (!username) {
            return this.emit(
                'error',
                new Error('No username in the like request!')
            )
        }
        this.likesQty++
        this.emit('likePost', username)
    }
}

const myPost = new Post('Bigdan', 'My hreat post')

// console.log(myPost.author)
// console.log(myPost.text)
// console.log(myPost.likesQty)
myPost.like('Slava')
setTimeout(() => myPost.like(), 2000)
setTimeout(() => myPost.like('Den'), 3000)
// console.log(myPost.likesQty)
