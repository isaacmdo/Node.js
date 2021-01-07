//Comando: npm init -y para iniciar o npm

//Comando: npm install express para instalar o pacote express ou o que vc queira com npm install

//Flag: -E no pacote para nao atualizar a versao do pacote com npm update ex: npm install express -E

//Comando: npm update para atualizar os pacotes de dependencias

//Webpack e Express são dependencias de desenvolvimento, esses pacotes são necessarios para edição do codigo fonte,
//quando a aplicação já esta rodando no servidor, não precisamos mais utilizar esses pacotes,
//pois o codigo já fui compilado para o nosso bundle que esta no servidor, devemos utilizar os pacotes
//quando querendo fazer um deploy da aplicação para atualizando do codigo fonte.

//Para mover um pacote necessario para o desenvolvimento e não utilizado no servidor, utilizamos
//o comando: npm install nomedopacote --save-dev
//(Assim movendo para devDependencies no packege.json)
//e o comando: npm install nomedopacote --save-prod, para mover para dependencias (produção)

//Comando: npm install express@2.1.1 para escolher a versão desejada, utilizamos o @versãoescolhida

//Versões funcionando assim:  major.minor.patch = (2.1.1)
//major: versao principal, cuidado ao mudar a versao atual para um major maior ou menos, a aplicação pode parar de funcionar.
//minor: ao realizando a mudança para uma mais atual a aplicação ainda vai funcionar
//patch: aplicação continua funcionando com um patch mais recente

