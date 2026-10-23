// Fácil — função com retorno 

// Crie uma função:
// calcularDobro

// Ela deve:
// receber um número
// ↓
// calcular o dobro
// ↓
// retornar o resultado

// Depois execute:
// const resultado = calcularDobro(8);

// console.log(resultado);

// Antes de implementar, escreva em comentários:
// 1. Qual será o parâmetro? R: Será a variável que armazenará o valor do número
// 2. Qual será a entrada? R: A entrada será o número que a função vai receber
// 3. Qual processamento acontecerá? R: Ele calculará o dobro do número (número * 2)
// 4. O que deverá ser retornado? R: O resultado do número calculado

function calcularDobro(numero) {
   const resultado = numero * 2
   return resultado
}

const resultado = calcularDobro(8);

console.log(resultado);