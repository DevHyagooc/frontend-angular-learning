// Exercício 1 — throw

// Crie:
// const validarIdade = (idade) => {
//   // sua implementação
// };

// Regras:
// idade < 0
// → lançar Error com mensagem "Idade inválida"

// caso contrário
// → retornar true

// Teste inicialmente com:
// validarIdade(20);

// Depois teste:
// validarIdade(-5);

// Antes de executar o segundo caso, responda no arquivo:
// O que espero que aconteça? R: a idade 20 irá retornar true e a idade -5 irá lançar a mensagem de erro
// O return será alcançado? R: apenas na validação da idade 20

// Não use try/catch ainda.

const validarIdade = (idade) => {
   if(idade < 0){
      throw new Error('Idade inválida!')
   }
   return true
};

console.log(validarIdade(20))
console.log(validarIdade(-5))