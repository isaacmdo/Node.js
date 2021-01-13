Nesta aula vamos ativar as sessions para nosso express,

Sessions são utilizadas para salvar alguma coisa referente ao navegador do cliente para abrir uma session para ele no nosso servidor,
com isso podemos identificar um cliente conectado anteriormente, caso o mesmo não tenha limpado o historio ou cookies do navegador,
assim logarmos o cliente como exemplo.

Tambem nesta aula vamos usar flash mensagens, flash mensagens são mensagens que são retornadas quando ha alguma acao específicas do cliente,
como um erro de senha invalida por exemplo 

para isso utilizamos dois pacotes no npm do express com o comando:
npm i express-session connect-mongo connect-flash