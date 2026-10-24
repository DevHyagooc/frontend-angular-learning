// Médio — combinando métodos

// Use:
// const clientes = [
//   { nome: 'Ana', ativo: true },
//   { nome: 'Carlos', ativo: false },
//   { nome: 'Mariana', ativo: true },
//   { nome: 'João', ativo: false }
// ];

// Sua tarefa:
// gerar um array contendo somente os nomes dos clientes ativos.

// Resultado esperado:
// ['Ana', 'Mariana']

// Antes de implementar, responda:
// Primeiro preciso __________. Filtrar
// Depois preciso __________. Transformar com map

// Não vou dizer quais métodos usar. Quero que você identifique.

const clientes = [
  { nome: 'Ana', ativo: true },
  { nome: 'Carlos', ativo: false },
  { nome: 'Mariana', ativo: true },
  { nome: 'João', ativo: false }
];

const clientesAtivos = clientes.filter((cliente) => {
   return cliente.ativo
})

const nomesClientesAtivos = clientesAtivos.map((cliente) => {
   return cliente.nome
})

console.log(nomesClientesAtivos)