// Função 1: buscarClientePorId
// Problema: encontrar um cliente específico a partir de seu id
// Método escolhido: find

// Função 2: filtrarClientesAtivos
// Problema: filtrar clientes por seu status ativo
// Método escolhido: filter

// Função 3: calcularSaldoTotal
// Problema: fazer um calculo total dos saldos dos clientes
// Método escolhido: reduce

export const buscarClientePorId = (id, dadosCliente) => {
   const cliente = dadosCliente.find((cliente) => {
      return cliente.id === id
   })
   return cliente
}

export const filtrarClientesAtivos = (dadosCliente) => {
   const clientesAtivos = dadosCliente.filter(cliente => cliente.ativo)
   return clientesAtivos
}

export const calcularSaldoTotal = (dadosCliente) => {
   const saldoTotal = dadosCliente
   .reduce((acumulador, clienteAtual) => {
      return acumulador + clienteAtual.saldo
   }, 0)
   return saldoTotal
}