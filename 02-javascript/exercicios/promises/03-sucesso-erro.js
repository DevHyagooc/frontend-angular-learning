// Exercício 3 — sucesso ou erro

// Crie:
// const executarOperacao = (deveFalhar) => {
//   // retornar Promise
// };

// Regras:
// deveFalhar === false
// → resolve('Sucesso')

// deveFalhar === true
// → reject(new Error('Falha'))

// Faça dois testes:
// executarOperacao(false)
// executarOperacao(true)

// Use:
// then
// catch

// para observar os dois caminhos.

const executarOperacao = (deveFalhar) => {
   return new Promise((resolve, reject) => {
      if(deveFalhar){
         resolve('Falha')
         return
      }

      reject(new Error('Sucesso'))
  })
};

executarOperacao(true)
.then((resultado) => {
   console.log(resultado)
})
.catch((erro) => {
   console.log(erro.message)
})

executarOperacao(false)
.then((resultado) => {
   console.log(resultado)
})
.catch((erro) => {
   console.log(erro.message)
})