// Desafio — clientes ativos

// Considere:
// const clientes = [
//   { nome: 'Ana', ativo: true },
//   { nome: 'Carlos', ativo: false },
//   { nome: 'Mariana', ativo: true },
//   { nome: 'João', ativo: false }
// ];

// Sua tarefa é percorrer a lista e exibir somente os nomes dos clientes ativos.

// Resultado esperado:
// Ana
// Mariana

// Ainda não use filter.

// Quero que você resolva utilizando um loop.

// Antes de implementar:
// Entrada: Array de clientes
// Processamento: Validar se o cliente está ativo e imprimir na tela
// Condição: Se cliente estiver ativo imprima seu nome
// Saída: Clientes ativos

// Depois responda:
// Qual loop você escolheu e por que ele fez sentido para esse problema?

const clientes = [
  { nome: 'Ana', ativo: true },
  { nome: 'Carlos', ativo: false },
  { nome: 'Mariana', ativo: true },
  { nome: 'João', ativo: false }
];

for(const cliente of clientes) {
  if(cliente.ativo){
    console.log(cliente.nome)
  }
}

// Eu escolgi o loop for of pois estou validando e imprimindo valores, não propriedades, além de que não preciso implementar índices