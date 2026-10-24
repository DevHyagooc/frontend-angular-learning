// Médio — total de produtos

// Use:
// const produtos = [
//   { nome: 'Mouse', preco: 100 },
//   { nome: 'Teclado', preco: 200 },
//   { nome: 'Monitor', preco: 1200 }
// ];

// Calcule o valor total dos produtos usando reduce.

// Responda Antes:
// Entrada: produtos
// Acumulador: 0
// Valor atual: produto atual na varredura
// Saída: Valor total somado

// Depois explique:
// Por que reduce faz mais sentido do que map neste problema?

const produtos = [
  { nome: 'Mouse', preco: 100 },
  { nome: 'Teclado', preco: 200 },
  { nome: 'Monitor', preco: 1200 }
];

const somaProdutos = produtos.reduce((acumulador, produto) => {
   return acumulador + produto.preco
}, 0)

console.log(somaProdutos)

// O reduce faz mais sentido nesse caso pois o map serve para transformar os objetos de um array, e o reduce eu quero realizar uma soma da propriedade preco de todos os objetos