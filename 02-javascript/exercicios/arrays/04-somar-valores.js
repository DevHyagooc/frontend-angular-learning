// Médio — somando valores

// Temos:
// const valores = [10, 20, 30, 40];

// Sua tarefa:
// calcule a soma de todos os valores utilizando um loop.

// Resultado esperado:
// 100

// Antes de implementar, escreva:
// O que preciso guardar durante a iteração? R: O valor somado
// Como esse valor muda a cada volta? R: Vai passar por uma soma

// Você pode escolher entre for e for...of.

// Depois explique por que escolheu um deles.

const valores = [10, 20, 30, 40]

let somaValores = 0

for(const valor of valores) {
   somaValores += valor
}

console.log(somaValores)

// Escoilhi for of por não rpecisar utilizar os índices no loop, além de que eu queria pegar todos os valores, eu não tinha uma outra condição