export const buscarClientePorId = (id, clienteLista) => {
   if(id <= 0){
      throw new Error('O Id informado é inválido!')
   }

   const cliente = clienteLista.find((cliente) => cliente.id === id)
   
   if(!cliente) {
      throw new Error('Cliente não encontrado!')
   }
   
   return cliente
}