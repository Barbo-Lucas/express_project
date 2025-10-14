const express = require("express")
const { engine } = require("express-handlebars")
const path = require('path')
const routes = require('./routes')

const PORT = 3000
const app = express()
const handlebars = require("express-handlebars")

app.engine('handlebars', engine({defaultLayout: 'main', extname: '.handlebars'}))
app.set('view engine', 'handlebars')

app.use(express.static(path.join(__dirname, 'css/')))
app.use(express.static(path.join(__dirname, 'js/')))

app.get('/', routes)

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})