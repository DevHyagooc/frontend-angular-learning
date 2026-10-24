// Fácil — soma com reduce

// Use:
// const valores = [10, 20, 30, 40];

// Calcule o total usando reduce.

// Antes de implementar, responda em comentários:
// Qual será o valor inicial do acumulador? R: 0
// O que valorAtual representa? R: Representa o valor atual que está sendo percorrido da lista
// O que a callback precisa retornar? R: Não entendi a pergunta, mas acho que seria o total da soma dos valores

// Resultado esperado:
// 100

const valores = [10, 20, 30, 40];

const somaValores = valores.reduce((acumulador, valorAtual) => {
   return acumulador + valorAtual
}, 0)

console.log(somaValores)