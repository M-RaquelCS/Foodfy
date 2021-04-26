const express = require('express')
const nunjucks = require('nunjucks')

const server = express();
const dataRecipes = require('./data')

server.use(express.static('public'))
server.use(express.static('src/styles'))
server.use(express.static('src/styles/pages'))
server.use(express.static('src/styles/components'))

server.set('view engine', 'njk')

nunjucks.configure('src/pages', {
    express:server,
    noCache: true,
    autoescape: false
})

server.get('/', function(req, res){
    return res.render('home', { dataRecipes })
})
server.get('/recipes', function(req, res){
    return res.render('recipes', { dataRecipes })
}) 
server.get('/details', function(req, res){
    const recipes = [...dataRecipes];
    const id = req.query.id;
    res.render('detailsRecipe', {recipe: recipes[id]})
})
server.get('/about', function(req, res){
    return res.render('about')
})
server.listen(5000, function(){
    console.log('server')
})