// Exercício 2 — Promise rejeitada

// Crie uma Promise que use:
// reject(new Error(...))

// Mensagem:
// Operação falhou

// Use:
// .catch()

// para imprimir apenas:
// erro.message

// Depois responda:
// A callback do .then() seria executada nesse caso? Por quê?

const anime = new Promise((resolve, reject) => {
   const encontrou = false

   if(encontrou){
      resolve({
         id: 1,
         nome: 'Monster'
      })
      return
   }

   reject(new Error('Operação falhou'))
})

anime
.then((resultado) => {
   console.log(resultado)
})
.catch((erro) => {
   console.log(erro.message)
})