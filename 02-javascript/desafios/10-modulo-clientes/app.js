import { buscarClientePorId, filtrarClientesAtivos, calcularSaldoTotal } from "./clientes.js";
const clientes = [
  { id: 1, nome: 'Ana', ativo: true, saldo: 100 },
  { id: 2, nome: 'Carlos', ativo: false, saldo: 200 },
  { id: 3, nome: 'Mariana', ativo: true, saldo: 300 }
];

const clienteBusca = buscarClientePorId(1, clientes)
const clientesAtivos = filtrarClientesAtivos(clientes)
const saldoTotal = calcularSaldoTotal(clientes)

console.log(clienteBusca)
console.log(clientesAtivos)
console.log(saldoTotal)