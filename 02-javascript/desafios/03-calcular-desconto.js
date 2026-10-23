// Desafio — regra de desconto

// Precisamos representar esta regra:
// Cliente VIP:
// 10% de desconto

// Cliente comum:
// nenhum desconto

// Crie uma função chamada:
// calcularValorFinal

// Ela deve receber:
// preco
// ehVip

// e retornar o preço final.

// Exemplos esperados conceitualmente:
// 100 + VIP
// → 90

// 100 + não VIP
// → 100

// Antes do código, escreva em comentários:
// Entrada:
// ...

// Processamento:
// ...

// Saída:
// ...

// E depois implemente.

// Não vou fornecer a estrutura da função porque quero avaliar sua decomposição.

// RESPOSTA: -----------------------------------------------------------------------------
// Entrada:
// preco e ehVip

// Processamento:
//  if(ehVip){
//       const valorFinal = preco * 0.9
//       return valorFinal
//    }

//    const valorFinal = preco
//    return valorFinal

// Saída:
// valorFinal

function calcularValorFinal(preco, ehVip){
   if(ehVip){
      const valorFinal = preco * 0.9
      return valorFinal
   }

   const valorFinal = preco
   return valorFinal
}

const calculoVip = calcularValorFinal(100, true)
const calculoComum = calcularValorFinal(100, false)

console.log(`Valor com desconto: ${calculoVip} \nValor sem desconto: ${calculoComum}`)