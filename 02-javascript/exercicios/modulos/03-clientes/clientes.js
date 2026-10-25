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