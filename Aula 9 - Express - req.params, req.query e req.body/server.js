const express = require('express');
const { allowedNodeEnvironmentFlags } = require('process');
const app = express();

//aqui nós habilitamos o tratamento do que do que é postado, retornando um objeto do body do que foi postado
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send(`
  <form action="/" method="POST">
  Nome: <input type="text" name="nome">
  <button>Enviar</button>
  </form>
  `);
});


//Parametros (params) são o que vem depois da "/" da url como /testes/123/456
//Query são query strings, no endereço url como /?nome=Isaac&sobrenome=Moura
//Query's sempre começam com o sinal de '?' no começo associado por uma chave e um valor, com a junção
//de mais chaves e valores associados pelo sinal '& ex: ?nome=Isaac&sobrenome=Moura
app.get('/testes/:idUsuarios?', (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.send('Oi');
});


//o metodo body e o conteudo do que é postado, neste codigo so temos um input, então o metodo body retornará so ele,
//se quisermos acessar apenas um input especifico enviado, utilizamos no caso req.body.outroinput.
app.post('/', (req, res) => {
  console.log(req.body.nome);
  res.send('Recebi o formulário');
});

app.get('/contato', (req, res) => {
  res.send('Obrigado por entrar em contato com a gente')
})

app.listen(3000), () =>{
  console.log('Acessar http://localhost:3000');
  console.log('Servidor rodando...');
};
