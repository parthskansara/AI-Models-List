import express from 'express'
import listRouter from './routes/lists.js'

const app = express()

app.use('/public', express.static('./public'))

app.use('/scripts', express.static('./public/scripts'))

app.use('/lists', listRouter)

app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">Listicle</h1>')
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server running on https://localhost:${PORT}`)
})