// Exercício 2 — primeiro try/catch

// Reutilize a função anterior.

// Sua tarefa é chamar:
// validarIdade(-5)

// dentro de um try.

// No catch:
// imprima apenas a mensagem do erro

// Depois responda:
// Qual é a diferença observável entre executar a função sem try/catch e executá-la dentro de try/catch? com o try/catch o tratamento de erros fica muito mais simples.

const validarIdade = (idade) => {
   if(idade < 0){
      throw new Error('Idade inválida!')
   }
   return true
};

try{
   validarIdade(-5)
}catch (erro) {
   console.log(erro.message)
}