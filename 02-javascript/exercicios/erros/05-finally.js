// Exercício 5 — finally

// Use:
// const executar = (deveFalhar) => {
//   if (deveFalhar) {
//     throw new Error('Operação falhou');
//   }

//   return 'Operação concluída';
// };

// Faça dois testes:
// executar(false)
// executar(true)

// utilizando:
// try
// catch
// finally

// Antes de executar, responda:
// O finally será executado nos dois casos?

const executar = (deveFalhar) => {
  if (deveFalhar) {
    throw new Error('Operação falhou');
  }

  return 'Operação concluída';
};

try{
   console.log(executar(true))
}catch (erro) {
   console.log(erro.message)
}finally{
   console.log('Encerrando operação...')
}

try{
   console.log(executar(false))
}catch (erro) {
   console.log(erro.message)
}finally{
   console.log('Encerrando operação...')
}