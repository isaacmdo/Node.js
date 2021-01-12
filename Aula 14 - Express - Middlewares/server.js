const express = require('express');
const { allowedNodeEnvironmentFlags } = require('process');
const app = express();
const routes = require('./routes')
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middleware')

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));//<< caminho absoluto da pasta public para conteudos staticos

app.set('views', path.resolve(__dirname, 'src', 'views'));//<< aqui está o caminho absoluto da pasta view
app.set('view engine', 'ejs'); //<< setamos essa engina para podermos usar codigo de programacao (for, if, echo...) dentro do html e podermos renderizar a view
//npm i ejs para instalar a dependencia


//Nossos proprios Middlewares
app.use(middlewareGlobal);
app.use(routes);

app.listen(3000), () =>{
  console.log('Acessar http://localhost:3000');
  console.log('Servidor rodando...');
};
