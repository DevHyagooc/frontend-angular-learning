import { somar, multiplicar } from "./operacoes.js"

const somaTotal = somar(5, 10, 2)
const multiplicacaoTotal = multiplicar(2, 6, 2)

console.log(somaTotal)
console.log(multiplicacaoTotal)

// Se subtrair foi exportada, somos obrigados a importá-la? R: Não, só importo o que preciso/quero utilizar