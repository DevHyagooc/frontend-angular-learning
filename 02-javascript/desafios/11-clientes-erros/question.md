Desafio — módulo de clientes com tratamento de erros

Estrutura:
clientes.js
app.js

Em clientes.js, crie uma função exportada:
buscarClientePorId

Use:
const clientes = [
  { id: 1, nome: 'Ana', ativo: true },
  { id: 2, nome: 'Carlos', ativo: false }
];

A lista pode continuar em app.js e ser passada como argumento, seguindo o padrão que você já praticou.

Regras da função:
id inválido
→ lançar erro

cliente não encontrado
→ lançar erro

cliente encontrado
→ retornar cliente

Para este exercício, considere inválido:
id <= 0

No app.js, trate os possíveis erros e mostre:
Cliente encontrado: ...

ou uma mensagem derivada do erro.

Antes de programar, escreva:
Responsabilidade de clientes.js:
Responsabilidade de app.js:

Quais são os caminhos de sucesso?
Quais são os caminhos de erro?
Onde o erro será lançado?
Onde o erro será tratado?

Quero que você diferencie claramente lançar de tratar.