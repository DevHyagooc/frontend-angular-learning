// Exercício 6 — finally

// Reutilize:
// executarOperacao(deveFalhar)

// dos exercícios anteriores.

// Faça:
// then
// catch
// finally

// e execute uma vez com sucesso e uma vez com erro.

// Responda:
// O .finally() recebeu o valor do resolve ou o erro do reject? R: Não, nenhum dos dois

// Observe pelo comportamento antes de responder.

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
.finally(() => {
   console.log('Operação concluída!')
})

executarOperacao(false)
.then((resultado) => {
   console.log(resultado)
})
.catch((erro) => {
   console.log(erro.message)
})
.finally(() => {
   console.log('Operação concluída!')
})