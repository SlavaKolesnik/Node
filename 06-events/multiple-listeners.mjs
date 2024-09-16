import { EventEmitter } from 'events'

const myEmitter = new EventEmitter()

// Створюємо подію
myEmitter.on('myEvent', () => {
    console.log('First event listener')
})

myEmitter.on('myEvent', () => {
    console.log('Second event listener')
})

myEmitter.on('otherEvent', () => console.log('Other event'))

// Збільшуємо кількість подій (по замовчуванню макс. 10)
myEmitter.setMaxListeners(25)

// .getMaxListeners() =максимальна кількість подій, .eventNames() - імена подій
console.log(myEmitter.getMaxListeners())
console.log(myEmitter.eventNames())

// Викликаємо подію
setTimeout(() => myEmitter.emit('myEvent'), 1000)
