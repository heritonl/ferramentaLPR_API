const axios = require('axios')
// const uniqueRandomArray = require('unique-random-array')
// const placas = require('../placaEnvio/geradorPlacas')
const gerador = require('../placasEnvio/gerador')

module.exports = {
  envio: async (req, res) => {
    try {
      const data = req.body //armazenando os dados do body na variavel

      const envio = {
        camera_token: data.token, //envio da camera
        confidence: gerador.confidence(), //acertividade da placa
        image: 'data:image/jpeg;base64,iVBORw0', //imagem de teste
        license_plate: gerador.plate(), //função gerar placa
        measured_at: new Date() // pega a data atual
      }
      console.log(envio)

      //ENVIANDO PARA O SISTEMA LPR
      // const response_api = await axios.post(process.env.API_URL, envio) //envio do json para api lpr, envia o array envio
      // console.log(envio).catch(function (error) {
      //   //cath especifica o que fazer se encontrar algo
      //   throw error
      // })

      const response = {
        license_plate: envio.license_plate,
        measured_at: envio.measured_at,
        response: response_api.data.time
      }

      console.log(response)
      res.json(response)

      //condição para executar função
    } catch (error) {
      return res.status(404).json({ error: error.message })
    }
  }
}
