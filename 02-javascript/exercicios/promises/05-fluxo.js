// Exercício 5 — fluxo assíncrono

// Sem modificar inicialmente:
console.log('1');

const promessa = new Promise((resolve) => {
  setTimeout(() => {
    console.log('2');

    resolve('3');
  }, 500);
});

promessa.then((resultado) => {
  console.log(resultado);
});

console.log('4');

// Antes de executar, escreva:
// Ordem prevista: 1, 4, 2, 3

// Depois execute.

// Se sua previsão estiver errada, explique por que.

// Esse exercício é importante.