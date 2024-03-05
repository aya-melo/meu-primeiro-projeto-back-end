const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
 response.json({
    nome: 'Mayara Melo',
    imagem: 'https://static.cdninstagram.com/rsrc.php/v3/yI/r/VsNE-OHk_8a.png',
    minibio: 'Comunicadora e modelo'
 })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)