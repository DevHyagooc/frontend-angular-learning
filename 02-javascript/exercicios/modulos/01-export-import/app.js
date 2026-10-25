// Qual arquivo possui a responsabilidade de realizar a soma? R: calculadora.js
// Qual arquivo está apenas utilizando essa funcionalidade? R: app.js
import { somar } from "./calculadora.js";

const total = somar(10, 20)

console.log(total)