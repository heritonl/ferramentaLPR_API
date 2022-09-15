// import axios from 'axios'
// import gerarPlaca from './geradorPlacas.js'
const teste = require('../controllers/CameraController')

let intervalo = 200
let passagens = 2
if (intervalo >= 100) {
  //condição para executar função
  setTimeout(function () {
    for (let i = 0; i < passagens; i++) {
      //contador de passagens
      let envio1 //variavel para fazer o envio do array
      function getRandomInt(min, max) {
        //função para definir minimo e maximo do random
        min = Math.ceil(80) //retorna o menor número inteiro maior ou igual a definição
        max = Math.floor(100) //Retorna: o maior inteiro não maior que x
        return Math.floor(Math.random() * (max - min)) + min
      } // envio aleatório de acertividade da placa
      envio1 = {
        camera_token: 'token', //envio da camera
        confidence: getRandomInt(), //acertividade da placa
        image: 'data:image/jpeg;base64,iVBORw0', //imagem de teste
        license_plate: gerarPlaca(), //função gerar placa
        measured_at: new Date() // pega a data atual
      }

      // await axios
      //   .post('http://192.169.1.96:8888/api/v1/iniciar', envio) //envio do json para api lpr, envia o array envio

      //   .catch(function (error) {
      //     // cath especifica o que fazer se encontrar algo

      //     console.log(error) //imprime mensagem de erro
      //   })

      console.log(envio)
      console.log('Retirar console.log envio do index')
    }
  }, intervalo)
} else {
  console.log('Quantidade de milissegundos invalido!')
}
