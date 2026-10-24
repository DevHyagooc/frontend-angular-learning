// Médio — destructuring dentro de map

// Use:
// const clientes = [
//   { id: 1, nome: 'Ana', ativo: true },
//   { id: 2, nome: 'Carlos', ativo: false },
//   { id: 3, nome: 'Mariana', ativo: true }
// ];

// Sua tarefa:
// gerar um array contendo apenas os nomes.

// Faça primeiro da forma que você já conhece:
// cliente.nome

// Depois faça uma segunda versão usando destructuring no parâmetro da callback.

// Compare as duas e responda:
// Qual você achou mais legível neste exemplo?

// Não existe resposta obrigatória.

const clientes = [
  { id: 1, nome: 'Ana', ativo: true },
  { id: 2, nome: 'Carlos', ativo: false },
  { id: 3, nome: 'Mariana', ativo: true }
];

// Forma 1
const nomesClientes1 = clientes.map((cliente) => {
   return cliente.nome
})

console.log(nomesClientes1)

// Forma 2
const nomesClientes2 = clientes.map(({nome}) => {
   return nome
})

console.log(nomesClientes2)

// Achei a forma 1 mais legível, fica tudo bem explícito do que está sendo chamado