import express from 'express'
import cors from 'cors'
import { getCategories } from './controllers/CategoryController.js'

const app = express()

app.use(cors())

app.get('/api/categories', getCategories)

app.use((_req, res) => {
    res.status(404).json({
        message: 'Resource not found'
    })
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running')
})