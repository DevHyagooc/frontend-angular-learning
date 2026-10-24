// Fácil — destructuring básico de objeto

// Use:
// const produto = {
//   id: 10,
//   nome: 'Notebook',
//   preco: 3500
// };

// Extraia usando destructuring:
// nome
// preco

// Depois imprima os dois.

// Antes, responda:
// 1. O objeto original é alterado? R: Não
// 2. A variável criada precisa ter o mesmo nome da propriedade neste caso? R: Sinm


const produto = {
  id: 10,
  nome: 'Notebook',
  preco: 3500
};

const {nome, preco} = produto

console.log(nome)
console.log(preco)