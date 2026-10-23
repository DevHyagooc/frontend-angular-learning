// Fácil — converter para arrow function 

// Você tem:
// function calcularTriplo(numero) {
//   return numero * 3;
// }

// Faça duas versões:
// Versão A
// → arrow function com { } e return

// Versão B
// → arrow function com retorno implícito

// Depois responda em comentários:
// 1. As três versões produzem resultados diferentes? R: Não
// 2. Em qual versão o return fica explícito? R: Versão A
// 3. Qual delas você acha mais legível neste exemplo? Por quê? R: Versão A, por não ter nada implícito fica melhor de identificar o que está acontecendo


// Versão A
const calcularTriploA = (numero) => {
   return numero * 3;
}

// Versão B
const calcularTriploB = numero => numero * 3;

console.log(calcularTriploA(2))
console.log(calcularTriploB(2))