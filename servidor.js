// Import express
const express = require("express")
const app = express()

// Import path
const path = require("path")

// Port that would be used
const PORTA = 5000

app.use(
    express.static(path.join(__dirname,"public"))// Afirma que os arquivos estáticos requeridos estão nessa pasta
)

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "views", "estes_page.html"))
})

app.listen(PORTA, ()=>{
    console.log(`Servidor rodando no endereçço: localhost${PORTA}`)
})