require('dotenv').config();

const express = require('express');
const { allowedNodeEnvironmentFlags } = require('process');
const app = express();


const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conectei a base de dados');
    app.emit('Pronto');
  })
  .catch(e => console.log(e));
  
  const session = require('express-session');
  const MongoStore = require('connect-mongo')(session);
  const flash = require('connect-flash');

const routes = require('./routes')
const path = require('path');
const helmet = require('helmet');
const csrf = require('csurf');
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware')



app.use(helmet());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));//<< caminho absoluto da pasta public para conteudos staticos

const sessionOptions = session({
  secret: 'iosdinfiosnfssdi',
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7, //7 Dias de sessão
    httpOnly: true 
  }
})

app.use(sessionOptions);
app.use(flash());


app.set('views', path.resolve(__dirname, 'src', 'views'));//<< aqui está o caminho absoluto da pasta view
app.set('view engine', 'ejs'); //<< setamos essa engina para podermos usar codigo de programacao (for, if, echo...) dentro do html e podermos renderizar a view
//npm i ejs para instalar a dependencia

app.use(csrf());
//Nossos proprios Middlewares
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);

app.on('Pronto', () => {
  app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor rodando...');
  });
});

