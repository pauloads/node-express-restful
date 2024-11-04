import express from "express"
import {create, findById, listAll, remove, update} from "../controllers/user.controller.js"

const router = express.Router()

router.get('/', listAll)
router.post('/', create)
router.get('/:id', findById)
router.put('/:id', update)
router.delete('/:id', remove)

export default router