// Médio — buscar cliente

// Reaproveite sua ideia da etapa anterior:
// const buscarClientePorId = (id, clientes) => {
//   return new Promise((resolve, reject) => {
//     // ...
//   });
// };

// Não precisa reinventar essa função.

// Agora o objetivo é criar outra:
// exibirCliente

// Ela deve:
// ser async
// ↓
// try
// ↓
// await buscarClientePorId(...)
// ↓
// mostrar cliente

// erro?
// ↓
// catch

// Teste:
// id 2
// id 10
// id 0

const clientes = [
  { id: 1, nome: 'Ana', ativo: true },
  { id: 2, nome: 'Sasori', ativo: true },
  { id: 3, nome: 'Carlos', ativo: false }
];

const buscarClientePorId = (id, clientes) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id <= 0) {
        reject(new Error('ID inválido'));
        return;
      }

      const cliente = clientes.find((cliente) => cliente.id === id);

      if (!cliente) {
        reject(new Error('Cliente não encontrado'));
        return;
      }

      resolve(cliente);
    }, 500);
  });
};

const exibirCliente = async (id) => {
   try {
      const cliente = await buscarClientePorId(id, clientes)
      console.log(cliente)
   } catch (erro) {
      console.log(erro.message)
   }
}

exibirCliente(2)
exibirCliente(10)
exibirCliente(0)