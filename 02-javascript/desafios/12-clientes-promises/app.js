// O que a função retorna imediatamente? R: Uma promise

// O que será entregue futuramente no sucesso? R: Um cliente

// O que será entregue futuramente na falha? R: Uma mensagem de erro

// Quem cria a Promise? R: o clientes.js

// Quem consome a Promise? R: app.js

import { buscarClientePorId } from "./clientes.js";

const clientes = [
  { id: 1, nome: 'Ana', ativo: true },
  { id: 2, nome: 'Sasori', ativo: true },
  { id: 3, nome: 'Carlos', ativo: false }
];

buscarClientePorId(2, clientes)
.then((resultado) => {
   console.log(resultado)
})
.catch((erro) => {
   console.log(erro.message)
})
.finally(() => {
   console.log('Busca finalizada!')
})