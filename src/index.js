const path = require('path')
const express = require('express')
var morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')));

//HTTP logger
app.use(morgan('combined'))

// Template engine
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/home', (req, res) => {
  return res.render('home')
})

app.get('/news', (req, res) => {
  return res.render('views')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})