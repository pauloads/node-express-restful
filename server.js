import express from 'express'
import userRoutes from './src/routes/user.route.js'

const app = express()
const PORT = 3000

app.get("/", (req, res) => {
    res.json({message: "express server is running"})
})

userRoutes(app)

app.listen(PORT, () => {
    console.log(`Express server is up and listening on port ${PORT}`)
})
