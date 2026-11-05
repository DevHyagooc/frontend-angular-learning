// Método/estratégia escolhida: filter
// Por quê? Filtro todas a proposta comparando uma propriedade
export const getPropostasAprovadas = (lista) => {
   return lista.filter(proposta => proposta.status === 'aprovada')
}

// Método/estratégia escolhida: reduce
// Por quê? Soma uma propriedade de todos os objetos
export const getValorTotalAprovado = (lista) => {
   const propostasAprovadas = getPropostasAprovadas(lista)
   return propostasAprovadas.reduce((acumulado, proposta) => {
      return acumulado + proposta.valor
   }, 0)
}

const propostas = [
  {
    id: 1,
    cliente: 'Ana',
    status: 'aprovada',
    valor: 1000
  },
  {
    id: 2,
    cliente: 'Carlos',
    status: 'pendente',
    valor: 2500
  },
  {
    id: 3,
    cliente: 'Mariana',
    status: 'aprovada',
    valor: 3000
  }
];
// Método/estratégia escolhida: map
// Por quê? para criar um novo array sem referência
export const atualizarStatusProposta = (id, novoStatus, lista) => {
   const listaAtualizada = lista.map((proposta) => {
      if(proposta.id === id){
         const propostaAtualizada = {
            ...proposta,
            status: novoStatus
         }
         return propostaAtualizada
      }
         return proposta
   })

   return listaAtualizada
}

// Método/estratégia escolhida: find função async
// Por quê? Função async pra simular uma api e find pra buscar o objeto a partir do Id
const esperar = (tempo) => {
   return new Promise((resolve) => {
      setTimeout(resolve, tempo);
  });
}

export const buscarPropostaPorId = async (id, lista) => {
   await esperar(500)

   if(id <= 0) {
      throw new Error('Id da proposta inválido! Digite um número maior que 0.')
   }

   const proposta = lista.find(proposta => proposta.id === id)

   if(!proposta){
      throw new Error('Proposta não encontrada!')
   }

   return proposta
}