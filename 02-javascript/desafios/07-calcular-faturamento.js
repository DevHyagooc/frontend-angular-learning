// Desafio — faturamento

// Use:
// const vendas = [
//   { id: 1, valor: 100, status: 'aprovada' },
//   { id: 2, valor: 250, status: 'cancelada' },
//   { id: 3, valor: 300, status: 'aprovada' },
//   { id: 4, valor: 150, status: 'aprovada' }
// ];

// Precisamos calcular:
// o faturamento total considerando somente vendas aprovadas.

// Antes do código, escreva:
// Problema: 
// Quais vendas entram no cálculo:
// Método(s) escolhido(s):
// Por que:
// Valor inicial do acumulador:
// Resultado esperado:

// Não vou dizer se deve usar um ou dois métodos.

// Quero que você tome a decisão.


// RESPOSTA
// Problema: Saber o valor total das vendas aprovadas
// Quais vendas entram no cálculo: As aprovadas
// Método(s) escolhido(s): Reduce
// Por que: Pois quero fazer uma soma dos valores
// Valor inicial do acumulador: 0
// Resultado esperado: soma total dos aprovados
const vendas = [
  { id: 1, valor: 100, status: 'aprovada' },
  { id: 2, valor: 250, status: 'cancelada' },
  { id: 3, valor: 300, status: 'aprovada' },
  { id: 4, valor: 150, status: 'aprovada' }
];

const totalVendasAprovadas = vendas.reduce((acumulador, venda) => {
   if(venda.status === 'aprovada'){
      return acumulador + venda.valor
   }
   return acumulador
}, 0)

console.log(totalVendasAprovadas)