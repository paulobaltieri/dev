const app = require('../src/app')
const http = require('http')
const express = require('express')
const debug = require('debug')

const port = normalizePort(process.env.PORT || '3000')

app.set('port', port)

const server = http.createServer(app)
const router = express.Router()

const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: 'Node Store API',
        version: '0.0.1'
    })
})

app.use('/', route)

server.listen(port)
server.on('error', onError)
server.on('listening', onListening)

console.log('API rodando na porta ' + port)

function normalizePort(val) {
    const port = parseInt(val, 10)
    if (isNaN(port)) {
        return val
    }
    if (port >= 0) {
        return port
    }
    return false
}
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error
    }

    const bind = typeof port === 'string' ?
        'Pipe ' + port :
        'Port ' + port

    switch (error.code) {
        case 'EACCESS':
            console.error(binf + 'require elevared privileges')
            process.exitCode(1)
            break;
        case 'EADDRINUSE':
            console.error(bind + 'is already in use')
            process.exit(1)
        default:
            throw error

    }
}
function onListening() {
    const addr = server.address()
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port
    debug('Listening on ' + bind)
}
