const express = require('express')
const index = express()
const port = 3000

index.get('/', (req, res) => {
    res.send("<a href='/contact'>Contact US</a> <br> <a href='/about'>About Us</a>")
})

index.get('/contact', (req, res) => {
    res.send("<h1>Contact Us Page</h1>")
})
index.get('/about', (req, res) => {
    res.send("<h1>About Page</h1>")
})
index.get('*', (req, res) => {
    res.send("<h1>404. This page does not exist</h1><br><h2>Please go back <a href='/'>home</a></h2>")
})

index.listen(port, () => {
    console.log(`Example app listening on port ${port} http://localhost:3000`)
})