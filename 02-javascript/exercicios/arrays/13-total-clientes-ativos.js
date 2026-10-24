// Médio — somar apenas clientes ativos

// Use:
// const clientes = [
//   { nome: 'Ana', valor: 100, ativo: true },
//   { nome: 'Carlos', valor: 200, ativo: false },
//   { nome: 'Mariana', valor: 300, ativo: true }
// ];

// Sua tarefa:
// calcular a soma de valor apenas dos clientes ativos.

// Resultado esperado:
// 400

// Você pode resolver de duas formas:
// A) filter + reduce
// ou
// B) somente reduce com uma condição interna

// Escolha uma.

// Antes de implementar, explique:
// Qual abordagem você escolheu e por quê?

// Não quero que você procure a forma “mais elegante”.

const clientes = [
  { nome: 'Ana', valor: 100, ativo: true },
  { nome: 'Carlos', valor: 200, ativo: false },
  { nome: 'Mariana', valor: 300, ativo: true }
];

// const clientesAtivos = clientes.filter((cliente) => {
//    return cliente.ativo
// })

// const somaValorClientesAtivos = clientesAtivos.reduce((acumulador, cliente) => {
//    return acumulador + cliente.valor
// }, 0)

const somaValorClientesAtivos = clientes.reduce((acumulador, cliente) => {
   if(cliente.ativo){
      return acumulador + cliente.valor
   }
   return acumulador
}, 0)

console.log(somaValorClientesAtivos)

// Fiz as duas formas, mas a filter + reduce eu deixei comentada pois preferu utilizar com a validação de status interna, acredito que dessa forma eu consigo o mesmo resultado utilizando menos linha de código, além de que nessa atividade eu não preciso necessáriamente ter e criar uma lista separada com os clientes ativos, não tenho certeza mas acredito que a quantidade de varreduras também é reduzida nessa forma que escolhi.