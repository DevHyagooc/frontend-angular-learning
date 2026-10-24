// Fácil — previsão

// Antes de executar:
const numeros = [5, 10, 15];

const resultado = numeros.reduce((acumulador, numero) => {
  return acumulador + numero;
}, 0);

console.log(resultado);

// Responda:
// 1. Qual será o resultado final? R: 30
// 2. Quantas vezes a callback será executada? R: 3 vezes
// 3. Qual será o valor do acumulador no início? R: 0
// 4. O que o return da callback representa para a próxima execução? R: Ele incrementa o número atual no acumulador e salva essa soma na variável acumulador    
// Depois execute.