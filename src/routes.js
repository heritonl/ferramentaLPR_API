const express = require('express') //importar o express
const router = express.Router() //criar manipuladores de rota modulares e montáveis

const CameraController = require('./controllers/CameraController')
const ApiController = require('./controllers/ApiController')

router.post('/envio', ApiController.envio)
router.get('/cameras', CameraController.buscarTodos)
router.get('/cameras/:codigo', CameraController.buscarUm)
router.post('/cameras', CameraController.criarCamera)
router.put('/cameras/:codigo', CameraController.editarCamera)
router.delete('/cameras/:codigo', CameraController.excluirCamera)

module.exports = router
