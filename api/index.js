const express = require('express')
const servidor = express() 

servidor.get('/', (req, res, next) =>{
    return res.send({
        "mensagem": "Bem-vindo ao servidor Node.JS"
    })
})

servidor.listen(3000, () => {
    console.log('Servidor funcionando!')
})