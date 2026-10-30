// Exercício 1 — primeira Promise

// Crie uma Promise chamada:
// operacao

// Ela deve finalizar imediatamente com sucesso usando:
// resolve

// e fornecer:
// 'Operação concluída'

// Depois use:
// .then()

// para imprimir o resultado.

// Antes de executar, responda:
// 1. Qual será o estado inicial da Promise? R: Pending
// 2. Depois de resolve, qual será o estado? R: Como só fiz sucesso fulfilled, se tivesse erro seria rejected
// 3. O que a callback do .then() recebe? R: Uma promise

const operacao = new Promise((resolve) => {
   resolve('Operação concluída')
})

operacao.then((resultado) => {
   console.log(resultado)
})