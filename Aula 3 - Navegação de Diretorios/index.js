
const path = require('path');

console.log(__filename);//Caminhgo absoluto do arquivo
console.log(__dirname);//Caminho absoluto do diretorio

console.log(path.resolve(__dirname, '..', '..'));// 2 pontos volta o diretorio

console.log(path.resolve(__dirname, '.', '.',));// 1 ponto avança o diretorio

console.log(path.resolve(__dirname, '..', '..', 'files'));// Podemos colocar o nome do diretorio da pasta atual






