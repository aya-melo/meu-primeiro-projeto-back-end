const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Mayara Melo',
        imagem: 'https://static.cdninstagram.com/rsrc.php/v3/yI/r/VsNE-OHk_8a.png',
        minibio: 'Comunicadora e modelo'
    },
    {
        nome: 'Iana Chan',
        imagem: '',
        minibio: 'fundadora da Pogramaria'
    },
    {
        nome:'Simara Conceição',
        imagem: '',
        minibio: 'Instrutora programaria'
    }
]

function mostraMulheres(request, response) { 
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)