// Exercício 1 — primeira função async

// Crie:
// const obterNumero = async () => {
//   return 10;
// };

// Depois:
// const resultado = obterNumero();

// console.log(resultado);

// Antes de executar, responda:
// 1. resultado será 10 diretamente? Não
// 2. O que uma função async retorna? Uma promise com o seu retorno
// 3. Qual será o estado dessa Promise depois que return 10 for processado? fulfilled
// Depois execute e observe o console.

const obterNumero = async () => {
  return 10;
};

const resultado = obterNumero();

console.log(resultado);