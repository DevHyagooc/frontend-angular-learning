Desafio — módulo de clientes com async/await

Estrutura:
clientes.js
app.js

Você pode reaproveitar a ideia da etapa de Promises.
clientes.js
Exporte:
buscarClientePorId

Ela continua retornando uma Promise.

Regras:
id <= 0
→ reject Error

não encontrou
→ reject Error

encontrou
→ resolve cliente

Use atraso artificial de aproximadamente 500ms.

app.js
Agora não quero:
buscarClientePorId(...)
  .then(...)
  .catch(...)

Quero uma função:
executar

utilizando:
async
await
try
catch
finally

Antes de implementar responda:
Quem cria a Promise? 

Quem usa await?

Quem lança/rejeita o erro?

Quem trata o erro?

O que await entrega quando a Promise resolve?

Teste:
id 2
id 10
id 0