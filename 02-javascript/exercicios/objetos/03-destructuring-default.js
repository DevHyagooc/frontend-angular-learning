// Médio — valor padrão

// Use:
// const usuario = {
//   nome: 'Carlos'
// };

// Extraia:
// nome
// ativo

// e faça com que:
// ativo

// tenha valor padrão:
// false

// Antes de executar, preveja:
// nome = ?
// ativo = ?

// Previsão: Nome Carlos e ativo false
const usuario = {
  nome: 'Carlos'
};

const {nome, ativo = false} = usuario

console.log(nome)
console.log(ativo)