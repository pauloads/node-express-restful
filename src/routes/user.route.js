import express from "express"
import {listAll} from "../controllers/user.controller.js"

export default (app) => {
    const router = express.Router()

    router.get('/', listAll)

    app.use("/api/users", router)
}