// Responsabilidade de clientes.js: realizar as buscas e filtragens
// Responsabilidade de app.js: chamar as funções necessárias e mostrar o resultado
import { buscarClientePorId, filtrarClientesAtivos } from "./clientes.js";

const clientes = [
  { id: 1, nome: 'Ana', ativo: true },
  { id: 2, nome: 'Carlos', ativo: false },
  { id: 3, nome: 'Mariana', ativo: true }
];

const clienteBusca = buscarClientePorId(2, clientes)
const clientesAtivos = filtrarClientesAtivos(clientes)

console.log(clienteBusca)
console.log(clientesAtivos)