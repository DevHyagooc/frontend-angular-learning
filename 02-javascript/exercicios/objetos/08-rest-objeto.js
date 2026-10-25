// Médio — Rest com objeto

// Use:
// const cliente = {
//   id: 10,
//   nome: 'Carlos',
//   idade: 35,
//   ativo: true
// };

// Com destructuring + rest, separe:
// id

// e:
// dadosCliente

// de forma que dadosCliente contenha:
// {
//   nome: 'Carlos',
//   idade: 35,
//   ativo: true
// }

// Depois explique:
// Nesse caso, ...dadosCliente é spread ou rest? Por quê? Nesse caso é um rest, pois estou separando o id anteriormente e definindo todo o restante como dadosCliente

const cliente = {
  id: 10,
  nome: 'Carlos',
  idade: 35,
  ativo: true
};

const {id, ...dadosCliente} = cliente

console.log(id)
console.log(dadosCliente)