import { season as mySeason, temperature } from './names-exports.mjs'
import { isRaning, humidity } from './inline-exports.mjs'
import getDataFromServer from './defaul-export.mjs'
import DEFAULT_SERVER from './mixed-exports.mjs'
import {
    USERNAME as MY_USERNAME,
    PASSWORD as MY_PASSWORD,
} from './mixed-exports.mjs'

console.log(mySeason)
console.log(temperature + 11)
B
console.log(isRaning, humidity)

getDataFromServer('https://jsonplaceholder.typicode.com/posts/1')
    .then((post) => console.log(post))
    .catch((error) => console.error(error))

console.log(DEFAULT_SERVER)
console.log(MY_USERNAME, MY_PASSWORD)
