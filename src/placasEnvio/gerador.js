module.exports = {
  plate: () => {
    var result = ''

    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for (var i = 0; i < 3; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    var numbers = '0123456789'
    for (var i = 0; i < 4; i++) {
      result += numbers.charAt(Math.floor(Math.random() * numbers.length))
    }
    return result
  },
  //variavel para fazer o envio do array
  confidence: () => {
    //função para definir minimo e maximo do random
    min = Math.ceil(80) //retorna o menor número inteiro maior ou igual a definição
    max = Math.floor(100) //Retorna: o maior inteiro não maior que x
    let result = Math.floor(Math.random() * (max - min)) + min
    return result
  } // envio aleatório de acertividade da placa
}
