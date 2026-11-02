// Antes de implementar responda:
// Quem cria a Promise? função buscarClientePorId no clientes.js

// Quem usa await? função executar no app.js

// Quem lança/rejeita o erro? buscarClientePorId

// Quem trata o erro? função executar no app.js

// O que await entrega quando a Promise resolve? Entrega o retorno da promise, um objeto cliente

import { buscarClientePorId } from "./clientes.js"

const clientes = [
  { id: 1, nome: 'Ana', ativo: true },
  { id: 2, nome: 'Sasori', ativo: true },
  { id: 3, nome: 'Carlos', ativo: false }
];

const executar = async (id) => {
   try {
      const cliente = await buscarClientePorId(id, clientes)

      console.log(cliente)
   } catch (erro) {
      console.log(erro.message)
   } finally {
      console.log('Operação finalizada!')
   }
}

executar(2)
executar(10)
executar(0)