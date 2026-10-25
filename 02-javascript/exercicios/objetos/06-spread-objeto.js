// Fácil — copiar objeto com spread

// Use:
// const clienteOriginal = {
//   nome: 'Ana',
//   ativo: true
// };

// Crie:
// clienteCopia

// usando spread.

// Depois altere:
// clienteCopia.ativo

// para false.

// Antes de executar, preveja:
// 1. Qual será clienteOriginal.ativo? R: true
// 2. Qual será clienteCopia.ativo? R: false
// 3. Por que agora eles não se comportam como no exemplo antigo de referência compartilhada? R: Porque agora eu estou utilizando o spread e eles não compartilham o mesmo objeto como referência, mas sim cria um novo seguindo o que é passado

const clienteOriginal = {
  nome: 'Ana',
  ativo: true
};

const clienteCopia = {
   ...clienteOriginal,
   ativo: false
}

console.log(clienteOriginal)
console.log(clienteCopia)