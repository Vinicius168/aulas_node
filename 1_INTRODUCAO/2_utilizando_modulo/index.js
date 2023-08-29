const fs = require ('fs') // fs - file system
const { finished } = require('stream')

fs.readFile('texto.txt', 'utf8', (erro, dados) => {
    if(erro) {
        console.log(erro)
        return
    }

    console.log(dados)
})
