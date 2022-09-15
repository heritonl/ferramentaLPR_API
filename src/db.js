const mysql = require('mysql')
//cria conexão com o banco
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port:process.env.DB_PORT
})

connection.connect(error => {
  if (error) throw error //throw gera o erro no console
  console.log(`Conectado ao Banco de Dados: ${process.env.DB_DATABASE}`)
})

module.exports = connection
