// Exercício 4 — await + erro

// Use:
// const buscarDados = (deveFalhar) => {
//   return new Promise((resolve, reject) => {
//     if (deveFalhar) {
//       reject(new Error('Falha ao buscar dados'));
//       return;
//     }

//     resolve('Dados encontrados');
//   });
// };

// Crie:
// executar

// usando:
// async
// try
// await
// catch

// Teste:
// buscarDados(false)
// buscarDados(true)

// Mas faça o consumo através da sua função async.

const buscarDados = (deveFalhar) => {
  return new Promise((resolve, reject) => {
    if (deveFalhar) {
      reject(new Error('Falha ao buscar dados'));
      return;
    }

    resolve('Dados encontrados');
  });
};

const executar = async (deveFalhar) => {
   try{
      const resultado = await buscarDados(deveFalhar)
      console.log(resultado)
   }
   catch (erro){
      console.log(erro.message)
   }
}

executar(false)
executar(true)