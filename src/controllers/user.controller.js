import {sayHello} from "../services/user.service.js"

export function listAll(req, res) {
    if(req.query.name) {
        res.json({message: sayHello(req.query.name)})
    } else {
        res.status(400).send({message: 'What is your name?'})
    }
}

export function findById(req, res) {
    res.json({message: `HI! ${req.params.id}`})
}

export function create(req, res) {
    console.log(req.body)
    res.json({user: req.body})
}

export function update(req, res) {
    res.json({message: `now your name is ${req.body.name} da silva`})
}

export function remove(req, res) {
    res.json({message: `Bye user ${req.params.id}`})
}