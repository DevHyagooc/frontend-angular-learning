// Responsabilidade de clientes.js: Disponibilizar a função de busca e fazer as validações de erro
// Responsabilidade de app.js: Chamar a função passando o id e a lista, imprimir e formatar as mensagens de erro

// Quais são os caminhos de sucesso? buscar cliente com id válido e existente
// Quais são os caminhos de erro? buscar cliente com id inválido e inexistente
// Onde o erro será lançado? clientes.js
// Onde o erro será tratado? app.js
import { buscarClientePorId } from "./clientes.js";

const clientes = [
  { id: 1, nome: 'Ana', ativo: true },
  { id: 2, nome: 'Carlos', ativo: false }
];

try{
   const cliente = buscarClientePorId(0, clientes)

   console.log(cliente)
} catch(erro){
   console.log(erro.message)
}

try{
   const cliente = buscarClientePorId(10, clientes)

   console.log(cliente)
} catch(erro){
   console.log(erro.message)
}

try{
   const cliente = buscarClientePorId(2, clientes)

   console.log(cliente)
} catch(erro){
   console.log(erro.message)
}