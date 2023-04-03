const express = require('express')
const port = 3500
const app = express()

app.get('/', (req, res) => {

    res.send('Omlam')
})

app.get('/mylife', (req, res) => {
    res.sendFile('./img/descarga.jpg',{
        root: __dirname
    })
})

app.get('/user', (req, res) => {
    res.json({  nombre: "Daigo",
                apellido: "Mendieta",
                edad: 20,
                points: [1,2,3],
                adress: {
                    ciudad: "Lima - Peru",
                    distrito: "Lurigancho-Chosica",
                    calle: "Av Primavera lt 7"
                }
            })
})

app.get('/isAlive', (req, res) => {

    res.sendStatus(204)
})

app.listen(port)
console.log(`Server on port ${port}`)