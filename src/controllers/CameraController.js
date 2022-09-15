const CameraService = require('../services/CamerasService')

module.exports = {
  buscarTodos: async (req, res) => {
    let json = { error: '', result: [] }

    let cameras = await CameraService.buscarTodos()

    for (let i in cameras) {
      json.result.push({
        //armazenar em um novo array o nome das cameras
        codigo: cameras[i].codigo,
        token: cameras[i].token,
        nome: cameras[i].nome
      })
    }
    res.json(json)
  },
  buscarUm: async (req, res) => {
    let json = { error: '', result: [] }

    let codigo = req.params.codigo
    let camera = await CameraService.buscarUm(codigo)
    if (camera) {
      json.result = camera
    }

    res.json(json)
  },
  criarCamera: async (req, res) => {
    let json = { error: '', result: [] }

    let nome = req.body.nome
    let token = req.body.token

    if (nome && token) {
      let cameraCodigo = await CameraService.criarCamera(nome, token)
      json.result = {
        codigo: cameraCodigo,
        nome,
        token
      }
    } else {
      json.error = 'Campos não enviados'
    }
    console.log(json.result)
    res.json('Camera Cadastrada')
  },
  editarCamera: async (req, res) => {
    let json = { error: '', result: [] } //retorn um json com array vazio
    let codigo = req.params.codigo // pegar o ID do banco
    let nome = req.body.nome // pegar o nome do banco
    let token = req.body.token // pegar o token do banco

    if (codigo && nome && token) {
      await CameraService.editarCamera(codigo, nome, token) //vou pegar codigo, nome e token do DB
      json.result = {
        nome,
        codigo,
        token
      }
    } else {
      json.error = 'Campos não enviados'
    }
    res.json('Cadastro atualizado')
  },
  excluirCamera: async (req, res) => {
    let json = { error: '', result: [] }
    await CameraService.excluirCamera(req.params.codigo)
    res.json('Camera Excluida')
  }
}
