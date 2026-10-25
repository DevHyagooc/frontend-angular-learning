// Médio — spread em array

// Use:
// const clientes = ['Ana', 'Carlos'];

// Crie um novo array contendo:
// ['Ana', 'Carlos', 'Mariana']

// sem usar push.

// Depois responda:
// Por que essa abordagem cria outro array em vez de alterar diretamente o original? R: Porque eu criei uma nova variável usando spread, logo não altero o array inicial mas sim o novo criado com spread

const clientes = ['Ana', 'Carlos'];

const clientesAtualizado = [
   ...clientes,
   'Mariana'
]

console.log(clientes)
console.log(clientesAtualizado)