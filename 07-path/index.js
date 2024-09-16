const path = require('path')

const filePath = 'C:\\Users\\Administrator\\Desktop\\Node\\07-path\\index.js'
const textFilePath = 'C:\\Users\\Administrator\\Desktop\\file.txt'
const relativePath = './node/movie.mov'
const directoryPath = './node/subfolder'

console.log(path.isAbsolute(filePath)) //true
console.log(path.isAbsolute(relativePath)) //false

console.log(path.basename(filePath)) // index.js
console.log(path.basename(directoryPath)) // subfolder

console.log(path.dirname(filePath)) // C:\Users\Administrator\Desktop\Node\07-path
console.log(path.dirname(directoryPath)) // ./node

console.log(path.resolve(relativePath)) // c:\Users\Administrator\Desktop\Node\07-path\node\movie.mov

console.log(path.extname(textFilePath)) // .txt
console.log(path.extname(relativePath)) // .mov
console.log(path.extname(directoryPath)) //  ''

console.log(path.parse(filePath)) //{
//     root: 'C:\\',
//     dir: 'C:\\Users\\Administrator\\Desktop\\Node\\07-path',
//     base: 'index.js',
//     ext: '.js',
//     name: 'index'
//   }

const parsePath = path.parse(filePath)
console.log(filePath) // C:\Users\Administrator\Desktop\Node\07-path\index.js
console.log(path.join(parsePath.dir, `renamed-${parsePath.name}.mjs`)) // C:\Users\Administrator\Desktop\Node\07-path\renamed-index.mjs
