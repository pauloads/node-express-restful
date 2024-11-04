import express from 'express'
import userRouter from './src/routes/user.route.js'

const app = express()
const PORT = 3000

app.use(express.json())

// routes
app.get("/", (req, res) => res.json({message: "oxe!!!!!!!!"}))
app.use('/api/users', userRouter)

app.listen(PORT, () => console.log(`Express server is up and listening on port ${PORT}`))
