// Médio — find

// Use:
// const produtos = [
//   { id: 1, nome: 'Notebook' },
//   { id: 2, nome: 'Mouse' },
//   { id: 3, nome: 'Teclado' }
// ];

// Encontre o produto com:
// id = 2

// Antes de implementar, responda:
// 1. Você espera receber um array ou um objeto? Espero receber um objeto, pois estou buscando o primeiro valor encontrado, eu quero algo específico
// 2. O que aconteceria se procurasse id = 99? O método iria retornar undefined

const produtos = [
  { id: 1, nome: 'Notebook' },
  { id: 2, nome: 'Mouse' },
  { id: 3, nome: 'Teclado' }
];

const buscarProduto = produtos.find((produto) => {
   return produto.id === 2
})

console.log(buscarProduto)