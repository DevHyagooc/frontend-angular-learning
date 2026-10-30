Desafio — módulo assíncrono de clientes

Estrutura:
clientes.js
app.js

Em clientes.js, crie:
buscarClientePorId

A função deve:
receber id + clientes
↓
retornar Promise
↓
simular 1 segundo
↓
validar id
↓
buscar cliente
↓
resolve ou reject

As regras continuam:
id <= 0
→ reject com Error

cliente inexistente
→ reject com Error

cliente existente
→ resolve com cliente

No app.js:
importar função
↓
chamar
↓
then
catch
finally

Antes de implementar:
O que a função retorna imediatamente?

O que será entregue futuramente no sucesso?

O que será entregue futuramente na falha?

Quem cria a Promise?

Quem consome a Promise?

Não use async/await.

Isso será a próxima etapa.