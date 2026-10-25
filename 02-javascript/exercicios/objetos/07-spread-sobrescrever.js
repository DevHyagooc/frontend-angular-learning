// Fácil — copiar e sobrescrever

// Use:
// const produto = {
//   id: 1,
//   nome: 'Mouse',
//   preco: 100
// };

// Crie um novo objeto chamado:
// produtoAtualizado

// que mantenha todos os dados, mas tenha:
// preco = 120

// Use spread.

// Depois explique:
// Por que a posição de preco: 120 em relação ao spread importa? R: Porque os valores são definidos pela ordem que são definidos, se o preço fosse definido primeiro, oq iria prevalecer seria o preço do objeto produto

const produto = {
  id: 1,
  nome: 'Mouse',
  preco: 100
};

const produtoAtualizado = {
   ...produto,
   preco: 120
}

console.log(produto)
console.log(produtoAtualizado)