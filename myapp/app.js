const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/', (req,res) => res.send('Got a POST request'));


app.put('/user', (req,res) => res.send('Got a PUT request at /user babay'));

app.delete('/user', (req,res) => res.send('Got a DELETE request at /user dawg'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));