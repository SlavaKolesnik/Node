import express from 'express'
import morgan from 'morgan'

const app = express()

// logs info about request
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use((req, res) => {
    console.log(req.body)
    return res.send('This is express server')
})

app.listen(5000, () => {
    console.log('server is listening at port 5000')
})
