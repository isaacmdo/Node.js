//Arquivo routes.js e o arquivo que trata as rotas da aplicação

const express = require('express'); //<< O arquivo usa o express
const route = express.Router(); //<< O arquivo usa a função Router do express
const homeController = require('./controllers/homeController');//<<importamos o camingo do arquivo
const contatoController = require('./controllers/contatoController');

//Rotas da home
route.get('/', homeController.paginaInicial); //<< aqui o router entra em ação tratanto as rotas
route.post('/', homeController.trataPost); //<< O primeiro parametro e a rota da url e o segundo é onde está o arquivo do codigo da rota do primeiro parametro
//Usamos os metodos corretos do metodo enviado (GET, POST)

//Rotas de contato
route.get('/contato', contatoController.paginaInicial)

module.exports = route;