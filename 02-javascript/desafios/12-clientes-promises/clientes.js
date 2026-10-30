export const buscarClientePorId = (clienteId, clientes) => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         if(clienteId <= 0){
            reject(new Error('Id inválido!'))
            return
         }

         const cliente = clientes.find((cliente) => { return cliente.id === clienteId })

         if(!cliente){
            reject(new Error('Cliente não encontrado!'))
            return
         }

         resolve(cliente)
      }, 1000)
   })
}