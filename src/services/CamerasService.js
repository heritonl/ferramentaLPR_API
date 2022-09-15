const CameraController = require('../controllers/CameraController')
const db = require('../db')
module.exports = {
  buscarTodos: () => {
    return new Promise((aceito, rejeitado) => {
      db.query('SELECT * FROM cameras', (error, results) => {
        if (error) {
          rejeitado(error)
          return
        }
        aceito(results)
      })
    })
  },
  buscarUm: codigo => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        'SELECT * FROM cameras WHERE codigo = ?',
        [codigo],
        (error, results) => {
          if (error) {
            rejeitado(error)
            return
          }
          if (results.length > 0) {
            aceito(results[0])
          } else {
            aceito(false)
          }
        }
      )
    })
  },
  criarCamera: (nome, token) => {
    //campos que vou criar
    return new Promise((aceito, rejeitado) => {
      db.query(
        'INSERT INTO cameras (nome, token) VALUES (?, ?)', //insert na tabela cameras com o campo nome e token
        [nome, token], //parametros
        (error, results) => {
          if (error) {
            rejeitado(error)
            return
          }
          aceito(results.insertCodigo) //inserir parametros com altoincremento do ID
        }
      )
    })
  },
  editarCamera: (codigo, nome, token) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        'UPDATE cameras SET nome = ?, token = ? WHERE codigo = ?',
        [nome, token, codigo],
        (error, results) => {
          if (error) {
            rejeitado(error)
            return
          }
          aceito(results)
        }
      )
    })
  },
  excluirCamera: codigo => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        'DELETE FROM cameras WHERE codigo = ?',
        [codigo],
        (error, results) => {
          if (error) {
            rejeitado(error)
            return
          }
          aceito(results)
        }
      )
    })
  }
}
