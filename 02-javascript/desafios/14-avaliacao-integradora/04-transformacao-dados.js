// Parte 4 — Transformação de dados

// Use:
const clientes = [
  { id: 1, nome: 'Ana', ativo: true, saldo: 150 },
  { id: 2, nome: 'Carlos', ativo: false, saldo: 300 },
  { id: 3, nome: 'Mariana', ativo: true, saldo: 450 },
  { id: 4, nome: 'João', ativo: true, saldo: 100 }
];

// Não vou dizer quais métodos utilizar.

// Implemente funções para:
// A - Retornar todos os clientes ativos.
// B - Retornar somente: ['Ana', 'Mariana', 'João'], considerando apenas clientes ativos.
// C - Buscar o cliente cujo ID seja recebido por parâmetro.
// D - Calcular o saldo total de todos os clientes.
// E - Calcular somente o saldo total dos clientes ativos.

// Para cada função, coloque antes:
// Problema:
// Estratégia escolhida:
// Por que escolhi essa estratégia:

// Não tente usar todos os métodos só porque os estudamos.

// Quero a solução que você considera mais adequada.


// Problema: Conseguir uma listagem de clientes ativos
// Estratégia escolhida: filter
// Por que escolhi essa estratégia: porque ela filtra a minha lista pelo que eu quero, que é o status ativo
const getClientesAtivos = () => {
  return clientes.filter((cliente) => cliente.ativo)
}

// Problema: Conseguir os nomes dos clientes ativos
// Estratégia escolhida: map
// Por que escolhi essa estratégia: porque eu quero transformar o objeto em uma listagem com apenas os nomes
const getNomesClientesAtivos = () => {
  const clientesAtivos = getClientesAtivos()
  return clientesAtivos.map((cliente) => cliente.nome)
}

// Problema: Buscar cliente pelo id
// Estratégia escolhida: find
// Por que escolhi essa estratégia: porque ele faz uma busca e retorna o primeiro que encontrar
const getClienteById = (id) => {
  return clientes.find((cliente) => cliente.id === id)
}

// Problema: Somar saldo total dos clientes
// Estratégia escolhida: reduce
// Por que escolhi essa estratégia: porque ele soma a propriedade saldo de todos os objetos
const getSaldoTotal = () => {
  return clientes.reduce((acumulado, cliente) => {
    return acumulado + cliente.saldo
  }, 0)
}

// Problema: Somar saldo total dos clientes ativows
// Estratégia escolhida: reduce
// Por que escolhi essa estratégia: porque ele soma a propriedade saldo de todos os objetos
const getSaldoTotalAtivo = () => {
  const clientesAtivos = getClientesAtivos()
  return clientesAtivos.reduce((acumulado, cliente) => {
    return acumulado + cliente.saldo
  }, 0)
}

console.log(getClientesAtivos())
console.log(getNomesClientesAtivos())
console.log(getClienteById(2))
console.log(getSaldoTotal())
console.log(getSaldoTotalAtivo())
