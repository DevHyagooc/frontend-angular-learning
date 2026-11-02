// Exercício 2 — primeiro await

// Use:
// const obterNumero = () => {
//   return Promise.resolve(10);
// };

// Crie outra função:
// exibirNumero

// Ela deve ser async.

// Dentro dela:
// usar await
// ↓
// guardar resultado
// ↓
// console.log

// Sua saída deve ser:
// 10

// Depois responda:
// Sem await, o que a variável receberia? R: receberia uma Promise {10}

const obterNumero = () => {
  return Promise.resolve(10);
};

const exibirNumero = async () => {
   const resultado = await obterNumero()

   console.log(resultado)
}

exibirNumero()