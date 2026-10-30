// Médio — buscar cliente

// Use:
// const clientes = [
//   { id: 1, nome: 'Ana' },
//   { id: 2, nome: 'Carlos' }
// ];

// Crie:
// buscarClientePorId

// Ela deve retornar uma Promise.

// Depois de 500ms:
// encontrou cliente
// → resolve(cliente)

// não encontrou
// → reject(Error)

// Use o método de array que você já conhece.

// No consumo:
// .then()
// .catch()
// .finally()

// Teste:
// id 2
// id 10

const clientes = [
  { id: 1, nome: 'Ana' },
  { id: 2, nome: 'Carlos' }
];

const buscarClientePorId = (pessoaId) => {
   return new Promise((resolve, reject) => {
   
      setTimeout(() => {
         const clienteBuscado = clientes.find((cliente) => { return cliente.id === pessoaId})
   
         if(clienteBuscado) {
            resolve(clienteBuscado)
            return
         }

         reject(new Error('Cliente não encontrado!'))
      }, 500)
   })
}

buscarClientePorId(2)
.then((resultado) => {
   console.log(resultado)
})
.catch((erro) => {
   console.log(erro.message)
})
.finally(() => {
   console.log('Busca finalizada!')
})

buscarClientePorId(10)
.then((resultado) => {
   console.log(resultado)
})
.catch((erro) => {
   console.log(erro.message)
})
.finally(() => {
   console.log('Busca finalizada!')
})