import express from 'express'

const app = express()

app.use((_req, res) => {
    res.status(404).json({
        message: 'Resource not found'
    })
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running')
})