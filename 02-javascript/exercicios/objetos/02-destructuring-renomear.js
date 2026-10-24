// Fácil — renomeando propriedade

// Use:
// const cliente = {
//   id: 1,
//   nome: 'Mariana'
// };

// Extraia:
// nome

// mas crie uma variável chamada:
// nomeCliente

// Depois explique em comentário:
// Qual é a diferença entre o nome da propriedade e o nome da variável criada? R: renomeando eu consigo ganhar clareza sobre oq exatamente é aquele nome

const cliente = {
  id: 1,
  nome: 'Mariana'
};

const {nome: nomeCliente} = cliente

console.log(nomeCliente)