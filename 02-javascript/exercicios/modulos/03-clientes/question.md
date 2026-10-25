Médio — clientes

Crie:
clientes.js
app.js

Use esta lista no app.js:
const clientes = [
  { id: 1, nome: 'Ana', ativo: true },
  { id: 2, nome: 'Carlos', ativo: false },
  { id: 3, nome: 'Mariana', ativo: true }
];

Em clientes.js, crie e exporte duas funções:
buscarClientePorId
filtrarClientesAtivos

As funções devem receber os dados necessários como parâmetros.

No app.js:
- importe as duas;
- busque o cliente de id === 2;
- gere a lista de ativos;
- imprima os resultados.
Antes de implementar, escreva:
Responsabilidade de clientes.js:
Responsabilidade de app.js:

Não coloque a lista dentro de clientes.js sem pensar. Quero que as funções trabalhem com dados recebidos.