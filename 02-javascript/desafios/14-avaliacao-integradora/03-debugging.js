// Parte 3 — Debugging
// Aqui não quero só a correção. Para cada bug escreva:
// Problema:
// Causa:
// Correção:
// Como eu descobri:

// Bug 1 -------------------------------------------------------------------------------------
// const clientes = [
//   { nome: 'Ana', ativo: true },
//   { nome: 'Carlos', ativo: false }
// ];

// for (cliente of clientes) {
//   console.log(cliente.nome);
// }

// Problema: Não houve problema ou erro informado durante a execução
// Causa: A variável cliente não está sendo definida no for
// Correção: Definir cliente como const
// Como eu descobri: Verificando documentação



// Bug 2 -------------------------------------------------------------------------------------
// O requisito é:
// retornar todos os clientes ativos.

// const buscarClientesAtivos = (clientes) => {
//   return clientes.find((cliente) => cliente.ativo);
// };

// O código executa sem necessariamente gerar erro. Mesmo assim existe um bug. Explique.

// Problema: Apenas o primeiro cliente ativo será retornado
// Causa: utilização do find
// Correção: utilizar filter
// Como eu descobri: lendo o código e entendendo a lógica/requisito



// Bug 3 -------------------------------------------------------------------------------------
// Queremos alterar o status sem modificar o original:
// const cliente = {
//   id: 1,
//   nome: 'Ana',
//   ativo: true
// };

// const clienteAtualizado = {
//   ativo: false,
//   ...cliente
// };

// O resultado não fica como esperado. Descubra por quê e corrija.

// Problema: O status ativo fica sempre como o do cliente original
// Causa: Spread sendo definido antes da propriedade ativo
// Correção: Definir primeiro o spread e só depois definir o ativo, a ordem importa
// Como eu descobri: lendo o código e entendendo a lógica/requisito



// Bug 4 -------------------------------------------------------------------------------------
const buscarCliente = () => {
  return Promise.resolve({
    id: 1,
    nome: 'Ana'
  });
};

const executar = () => {
  const cliente = buscarCliente();

  console.log(cliente.nome);
};

executar();

// O desenvolvedor esperava: Ana
// Explique o problema e corrija da forma que considerar adequada com os conhecimentos do módulo.

// Problema: Retorno undefined
// Causa: função executar não é assíncrona e o buscar cliente retorna uma Promise
// Correção: Alterar função executar para async e chamar o buscarCliente com o await
// Como eu descobri: lendo o código e entendendo a lógica/requisito, além de realizar as alterações para testar