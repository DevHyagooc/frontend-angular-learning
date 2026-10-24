// Fácil — map

// Use:
// const precos = [10, 20, 30];

// Crie um novo array contendo o dobro de cada preço.

// Esperado:
// [20, 40, 60]

// Responda:
// Por que map faz sentido aqui? R: porque eu estou transformando os valores do array

const precos = [10, 20, 30];

const precosDobro = precos.map((preco) => {
   return preco * 2
})

console.log(precosDobro)