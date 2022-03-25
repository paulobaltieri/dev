const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const router = express.Router()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.1"
    })
})

const create = router.post('/', (req, res, next) => {
    res.status(201).send(req.body)
})

const put = router.put('/:id', (req, res, next) => {
    const id = req.params.id
    res.status(200).send({ id: id, item: req.body })
})

const delet = router.delete('/', (req, res, next) => {
    res.status(200).send(req.body)
})

app.use('/', route)
app.use('/racas', create)
app.use('/raca', put)
app.use('/raca', delet)

module.exports = app