import express from "express"

const PORT = 3000

const app = express() 

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})

app.get("/produtos", (req, res) => {
    res.send("Lista de produtos")
})