import express from 'express'
import path from 'path'

import { fileURLToPath } from 'url'
import listData from '../data/lists.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json(listData)
})

router.get('/:id', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../../client/public/model.html'))
})

export default router