// Exercício 3 — buscar cliente

// Use:
// const clientes = [
//   { id: 1, nome: 'Ana' },
//   { id: 2, nome: 'Carlos' },
//   { id: 3, nome: 'Mariana' }
// ];

// Crie:
// buscarClientePorId

// A função deve:
// receber id e lista
// ↓
// procurar cliente
// ↓
// encontrou?
// ├── sim → retornar cliente
// └── não → lançar Error

// Você já conhece o método apropriado.

// Teste:
// id 2
// id 10

// Mas faça as chamadas com tratamento adequado para não deixar o segundo erro derrubar o fluxo.

const clientes = [
  { id: 1, nome: 'Ana' },
  { id: 2, nome: 'Carlos' },
  { id: 3, nome: 'Mariana' }
];

const buscarClientePorId = (id, lista) => {
   const cliente = lista.find((cliente) => cliente.id === id)

   if(!cliente) {
      throw new Error('Cliente não encontrado!')
   }
   return cliente
}

try{
   const cliente = buscarClientePorId(2, clientes)
   console.log(cliente)
}catch (erro){
   console.log(erro.message)
}

try{
   const cliente = buscarClientePorId(10, clientes)
   console.log(cliente)
}catch (erro){
   console.log(erro.message)
}