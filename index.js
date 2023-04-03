const express = require('express')
const port = 3500
const app = express()

app.get('/hello/:username', (req, res) =>{

    console.log(typeof req.params.username)
    res.send(`Hola ${req.params.username.toUpperCase()}`)
})

app.get('/add/:x/:y', (req, res)=>{
    const {x,y} = req.params
    res.send(`Result: ${ parseInt(x) + parseInt(y)}`)
})

app.get('/users/:username/photo',(req,res)=>{
    if(req.params.username.toUpperCase() === "DIEGO"){
        return res.sendFile('./img/descarga.jpg',{
            root: __dirname
        })
    }
    res.send('El usuario no tiene acceso..!!>:V')
})
app.get('/name/:name/age/:age', (req, res)=>{
    res.send(`El usuario ${req.params.name} tiene ${req.params.age} años!!`)
})

app.listen(port)
console.log(`Server on port ${port}`)