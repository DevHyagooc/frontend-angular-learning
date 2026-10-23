// Médio — regra de negócio 

// Crie uma função:
// verificarMaioridade

// Regra:
// idade >= 18
// → retornar true

// idade < 18
// → retornar false

// Quero que você pense antes:
// É realmente necessário escrever if/else?

// Você pode usar if/else se achar mais claro.

// Não pesquise uma forma “mais elegante”. Quero ver sua decisão.

function verificarMaioridade(idade) {
   if(idade >= 18){
      return true
   }

   return false
}

const temMaioridade = verificarMaioridade(17)
console.log(temMaioridade)
// Não consegui uma forma de fazer sem utilizar o if, porém consegui contornar o uso do else utilizando return.

// Forma simplificada de se fazer, após explicação:

function analisarMaioridade(idade) {
   return idade >= 18
}

const ehMaioridade = analisarMaioridade(17)
console.log(ehMaioridade)