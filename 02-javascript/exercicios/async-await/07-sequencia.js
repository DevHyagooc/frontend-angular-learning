// Exercício 7 — sequência dependente

// Use estas duas funções:
// const buscarCliente = () => {
//   return Promise.resolve({
//     id: 1,
//     nome: 'Ana'
//   });
// };

// const buscarSaldo = (clienteId) => {
//   return Promise.resolve({
//     clienteId,
//     saldo: 500
//   });
// };

// Sua tarefa:
// buscar cliente
// ↓
// pegar id
// ↓
// buscar saldo usando id
// ↓
// mostrar nome + saldo

// Use uma função async.

// Antes de implementar:
// Por que buscarSaldo depende do resultado de buscarCliente? R: Porque é a partir do buscarCliente que conseguimos o id, e o buscar saldo precisa do id

const buscarCliente = () => {
  return Promise.resolve({
    id: 1,
    nome: 'Ana'
  });
};

const buscarSaldo = (clienteId) => {
  return Promise.resolve({
    clienteId,
    saldo: 500
  });
};

const exibirNomeSaldo = async () => {
   try {
      const cliente = await buscarCliente()

      const saldoCliente = await buscarSaldo(cliente.id)

      console.log(`O saldo de ${cliente.nome} é: R$${saldoCliente.saldo}`)
   } catch (erro) {
      console.log('Operação falhou')
   }
}

exibirNomeSaldo()