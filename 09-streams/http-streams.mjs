import http from 'http'
import fs from 'fs'

const server = http.createServer((request, response) => {
    const filePath = './files/index.html'
    // With streams
    if (request.url === '/' && request.method === 'GET') {
        const readStream = fs.createReadStream(filePath)
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/html')
        readStream.pipe(response)
    }
    // Without streams. We read entire file and then send it to the client
    if (request.url === '/no-stream' && request.method === 'GET') {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                response.statusCode = 500
                response.end('Error reading file on server')
            } else {
                response.statusCode = 200
                response.setHeader('Content-Type', 'text/html')
                response.end(data)
            }
        })
    }
})

server.listen(5000, () => {
    console.log('Server is listening at port 5000')
})
