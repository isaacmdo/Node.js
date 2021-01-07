const nome = 'Luiz';
const sobrenome = 'Miranda';

const falaNome = () => {
  console.log(nome, sobrenome);
};

// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;

// console.log(module.exports);

//exports aponta para module//

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
//Seguindo o contexto procedural, a palavra this vai apontar para module.exports
//Como this.outraCoisa = 'Outra coisa';

//Usamos module.exports se quisermos sobrescrever o objeto com o sinal de atribuição ex:
//module.exports = { nome, sobrenome, idade }
//Esta forma acima não ira funcionar apenas usando exports

console.log(exports);

class Pessoa {
  constructor (nome) {
    this.nome = nome;
  }
}

exports.Pessoa = Pessoa;