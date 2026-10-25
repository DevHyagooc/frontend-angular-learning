export const somar = (...valores) => {
   const total = valores.reduce((acumulador, valorAtual) => {
      return acumulador + valorAtual
   })
   return total
}

export const subtrair = (...valores) => {
   const total = valores.reduce((acumulador, valorAtual) => {
      return acumulador - valorAtual
   })
   return total
}

export const multiplicar = (...valores) => {
   const total = valores.reduce((acumulador, valorAtual) => {
      return acumulador * valorAtual
   })
   return total
}