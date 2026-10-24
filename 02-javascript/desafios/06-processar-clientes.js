// Desafio

// const clientes = [
//   { id: 1, nome: 'Ana', idade: 25, ativo: true },
//   { id: 2, nome: 'Carlos', idade: 17, ativo: true },
//   { id: 3, nome: 'Mariana', idade: 32, ativo: false },
//   { id: 4, nome: 'João', idade: 19, ativo: true }
// ];

// Resolva três necessidades separadamente:
// 1. gerar um array com clientes ativos;
// 2. gerar um array somente com os nomes;
// 3. encontrar o cliente com id === 3.
// Antes de cada implementação escreva:
// Problema:
// Método escolhido:
// Por que:

// Não combine tudo em uma expressão gigante. Quero avaliar sua escolha de método.

const clientes = [
  { id: 1, nome: 'Ana', idade: 25, ativo: true },
  { id: 2, nome: 'Carlos', idade: 17, ativo: true },
  { id: 3, nome: 'Mariana', idade: 32, ativo: false },
  { id: 4, nome: 'João', idade: 19, ativo: true }
];

// 1. gerar um array com clientes ativos;
// Problema: Filtrar os clientes ativos
// Método escolhido: Filter
// Por que: Quero uma listagem com vários valores, já filtrados

const clientesAtivos = clientes.filter((cliente) => {
   return cliente.ativo
})

// 2. gerar um array somente com os nomes;
// Problema: Transformar o array pra que ele retorne apenas os nomes
// Método escolhido: Map
// Por que: Quero transformar um array para criar outro

const nomesClientes = clientes.map((cliente) => {
   return cliente.nome
})

// 3. encontrar o cliente com id === 3.
// Problema: Fazer uma busca específica na minha lista
// Método escolhido: find
// Por que: Quero fazer uma busca específica pelo id

const buscarCliente = clientes.find((cliente) => {
   return cliente.id === 3
})

console.log(clientesAtivos)
console.log(nomesClientes)
console.log(buscarCliente)