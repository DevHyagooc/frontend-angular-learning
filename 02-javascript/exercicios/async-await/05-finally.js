// Exercício 5 — finally

// Use novamente uma Promise que possa:
// resolve
// ou
// reject

// Na função async, use:
// try
// catch
// finally

// Antes de executar, responda:
// O finally depende do await terminar com sucesso? Não, caso retorne um erro ele também será executado

const buscarAnime = (deveFalhar) => {
   return new Promise((resolve, reject) => {
      if(deveFalhar){
         reject(new Error('Não foi possível buscar o anime'))
         return
      }

      resolve('Naruto Shippuden')
   })
} 

const exibirAnime = async (deveFalhar) => {
   try{
      const resultado = await buscarAnime(deveFalhar)
      console.log(resultado)
   }
   catch (erro){
      console.log(erro.message)
   }
   finally{
      console.log('Operação encerrada')
   }
}

exibirAnime(false)
exibirAnime(true)