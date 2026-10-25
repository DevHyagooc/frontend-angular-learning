// Desafio — atualização sem mutação direta

// Use:
// const cliente = {
//   id: 1,
//   nome: 'Ana',
//   idade: 25,
//   ativo: true
// };

// Sua tarefa:
// criar um novo objeto representando o mesmo cliente, mas com ativo: false, sem modificar cliente.

// Antes do código:
// Objeto original: 
// Mudança desejada:
// Preciso modificar ou criar?
// Por quê?

// Depois da implementação, exiba os dois objetos e confirme que:
// cliente.ativo
// → true

// clienteAtualizado.ativo
// → false

// RESPOSTA
// Objeto original: Objeto cliente, com id 1, nome Ana, idade 25 e ativo
// Mudança desejada: Objeto se manter, com exceção do ativo que deve ser false
// Preciso modificar ou criar? criar um novo
// Por quê? porque foi pedido para não modificar o cliente original
const cliente = {
  id: 1,
  nome: 'Ana',
  idade: 25,
  ativo: true
};

const clienteInativo = {
   ...cliente,
   ativo: false
}

console.log(cliente)
console.log(clienteInativo)