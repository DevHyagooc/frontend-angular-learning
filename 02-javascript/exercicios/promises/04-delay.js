// Exercício 4 — Promise com atraso

// Crie uma função:
// buscarDados

// Ela deverá retornar uma Promise.

// Dentro dela, use:
// setTimeout(() => {
//   // resolve
// }, 1000);

// Após aproximadamente 1 segundo, resolva com:
// 'Dados carregados'

// Depois consuma usando .then().

// Antes de executar, coloque:
// console.log('Início');

// antes da chamada e:
// console.log('Fim');

// logo depois dela.

// Preveja a ordem das três mensagens.

// Ordem prevista: Início, Fim, Dados carregados

const buscarDados = () => {
   return new Promise((resolve) => {
      setTimeout(() => {
         resolve('Dados carregados')
      }, 1000)
   })
}

console.log('Início')

buscarDados()
.then((resultado) => {
   console.log(resultado)
})

console.log('Fim')