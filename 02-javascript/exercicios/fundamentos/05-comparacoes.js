// Médio — comparação

// Analise:
const codigoA = 123;
const codigoB = '123';

console.log(codigoA == codigoB);
console.log(codigoA === codigoB);

// Antes de executar, explique:
// 1. Qual será o resultado de cada comparação? R: A primeira será true e a segunda será false
// 2. Qual comparação realiza coerção? R: A primeira que utiliza "=="
// 3. Por que === é normalmente mais previsível? R: Porque ele valida o valor e a tipagem