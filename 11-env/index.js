const dotenv = require('dotenv')
dotenv.config()
// or "require('dotenv').config()"

console.log(dotenv)

console.log(process.env.DB_USERNAME)
console.log(process.env.DB_PASSWORD)
console.log(process.env.DB_URL)
