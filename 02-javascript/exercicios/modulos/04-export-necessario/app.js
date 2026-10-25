// Responda antes de implementar qualquer coisa:
// 1. validarValor obrigatoriamente precisa ser exportada? R: Não
// 2. Se somente calcularDesconto usa validarValor, onde você deixaria essa função? R: Deixaria internamente em desconto.js
// 3. Qual vantagem existe em não exportar tudo indiscriminadamente? R: Acessos indevidos, código menos limpo, risco de utilização indevida

import { calcularDesconto } from "./desconto.js";

console.log(calcularDesconto(500))