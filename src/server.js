require('dotenv').config({ path: '.env' })
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const routes = require('./routes')

const server = express()
server.use(cors()) //utilizado quando uma resposta pode ser compartilhada
server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())

server.use('/api', routes) //todas as minhas rotas vão utilizar /api na frente

server.listen(process.env.PORT, () => {
  console.log(`Servidor rodando em : http://${process.env.DB_HOST}:${process.env.DB_PORT}`)
})
