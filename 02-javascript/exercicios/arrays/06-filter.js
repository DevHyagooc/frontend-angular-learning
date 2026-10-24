// Fácil — filter

// Use:
// const numeros = [5, 12, 8, 20, 3, 15];

// Crie um novo array contendo apenas números maiores que 10.

// Antes de implementar, escreva:
// Entrada: 
// Condição: 
// Saída esperada: 

// Depois responda:
// Por que filter faz mais sentido aqui do que map?

// RESPOSTA

// Entrada: Números
// Condição: Apenas números maiores que 10
// Saída esperada: Array com apenas números maiores que 10

const numeros = [5, 12, 8, 20, 3, 15];

const numerosMaioresQueDez =  numeros.filter((numero) => {
   return numero > 10
})

console.log(numerosMaioresQueDez)

// Filter faz mais sentido nesse caso porque eu quero listar várias informações, não quero transformar e nem buscar um valor específico