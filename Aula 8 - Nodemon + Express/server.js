const express = require('express');
const { allowedNodeEnvironmentFlags } = require('process');
const app = express();


//         Criar   ler   atualizar   apagar
// CRUD -> CREATE, READ, UPDATE,     DELETE
//         POST    GET   PUT         DELETE   <- Metodos HTTP

//http://meusite.com/ <- GET -> Entregue a página /
//http://meusite.com/sobre <- GET -> Entregue a página /sobre

app.get('/', (requisicao, resposta) => {
  resposta.send(`
  <form action="/" method="POST">
  Nome: <input type="text" name="nome">
  <button>Enviar</button>
  </form>
  `);
});

app.post('/', (requisicao, resposta) => {
  resposta.send('Recebi o formulário');
});

app.get('/contato', (requisicao, resposta) => {
  resposta.send('Obrigado por entrar em contato com a gente')
})

app.listen(3000), () =>{
  console.log('Acessar http://localhost:3000');
  console.log('Servidor rodando...');
};

//Para rodarmos o servidor, podemos colocar o comando: node nomedoarquivo.js no terminal do VS
//Podemos tambem entrar no terminal local e entrar na pasta do arquivo e executar o mesmo comando: node nomedoarquivo.js



