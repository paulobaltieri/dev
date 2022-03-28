exports.post = (req, res, next) => {
    console.log('teste')
    res.status(201).send({
        prod: "metodo post",
        item: req.body
    })
}
exports.put = (req, res, next) => {
    const id = req.params.id
    res.status(201).send({
        id: id,
        item: req.body
    })
}
exports.delete = (req, res, next) => {
    res.status(201).send(req.body)
}
