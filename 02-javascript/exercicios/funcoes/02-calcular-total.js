// Médio — dois parâmetros 

// Crie:
// calcularTotal

// A função deverá receber:
// preço
// quantidade

// e retornar:
// preço × quantidade

// Teste pelo menos três cenários diferentes.

// Além do código, explique em comentários:
// - quais são os parâmetros; R: As variáveis preco e quantidade
// - quais são os argumentos em uma das chamadas; R: Na primeira chamada por exemplo os argumentos são '20' e '5'
// - por que você usou return. R: Porque eu precisava retornar esses valores e armazenar em uma variável pra utilizar posteriormente

function calcularTotal(preco, quantidade) {
   const total = preco * quantidade
   return total
}

const calculoA = calcularTotal(20, 5) 
const calculoB = calcularTotal(200, 2)
const calculoC = calcularTotal(110, 4)

console.log(`${calculoA}, ${calculoB}, ${calculoC}`)