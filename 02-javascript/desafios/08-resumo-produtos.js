// Desafio — resumo de produtos

// Use:
// const produtos = [
//   { id: 1, nome: 'Mouse', preco: 100, ativo: true },
//   { id: 2, nome: 'Teclado', preco: 200, ativo: false },
//   { id: 3, nome: 'Monitor', preco: 1200, ativo: true }
// ];

// Sua tarefa é gerar um novo array no formato:
// [
//   'Mouse - R$ 100',
//   'Teclado - R$ 200',
//   'Monitor - R$ 1200'
// ]

// Quero que use:
// map
// +
// destructuring

// Antes:
// Entrada:
// Transformação:
// Saída:

// Depois explique:
// Qual propriedade do objeto você não precisou usar?


// RESPOSTA
// Entrada: Produtos
// Transformação: Transformar os valores usando o map para trazer apenas os dados importantes
// Saída: Array com string contendo nome e valor formatado no padrão desejado

const produtos = [
  { id: 1, nome: 'Mouse', preco: 100, ativo: true },
  { id: 2, nome: 'Teclado', preco: 200, ativo: false },
  { id: 3, nome: 'Monitor', preco: 1200, ativo: true }
];

const listaNomePreco = produtos.map(({nome, preco}) => {
   return `${nome} - R$ ${preco}`
})

console.log(listaNomePreco)

// Não precisei usar as propriedades filter, find e reduce. também não precisei chamar o produto.nome e produto.preco