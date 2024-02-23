import express, { json } from 'express'
import cors from 'cors'
import { getCategories, addCategory, deleteCategory, updateCategory } from './controllers/CategoryController.js'

const app = express()

app.use(cors())
app.use(json())

app.get('/api/categories', getCategories)
app.post('/api/categories', addCategory)
app.delete('/api/categories/:id', deleteCategory)
app.put('/api/categories/:id', updateCategory)

app.use((_req, res) => {
    res.status(404).json({
        message: 'Resource not found'
    })
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running')
})