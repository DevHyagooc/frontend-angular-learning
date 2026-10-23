// Desafio — função e escopo

// Temos a regra:
// Venda >= 1000
// → comissão de 10%

// Venda < 1000
// → comissão de 5%

// Crie uma arrow function chamada:
// calcularComissao

// Ela deve receber:
// valorVenda

// e retornar:
// valor da comissão

// Antes de implementar, escreva:
// Entrada: 
// Processamento:
// Saída:

// Além disso, quero que você decida:
// A porcentagem da comissão deve ser criada fora ou dentro da função?

// Não existe uma única resposta obrigatória aqui.

// Quero que você escolha e explique por quê, pensando em escopo e responsabilidade.


// RESPOSTA
// Entrada: valorVenda
// Processamento: Venda >= 1000 → comissão de 10% ou Venda < 1000 → comissão de 5%
// Saída: valor da comissão

const comissaoMaior = 0.1
const comissaoMenor = 0.05

const calcularComissao = (valorVenda) => {

   if(valorVenda >= 1000){
      return valorVenda * comissaoMaior
   }

   return valorVenda* comissaoMenor
}

console.log(calcularComissao(1000))
console.log(calcularComissao(500))

// Escolhi implementar a comissão fora do escopo da função calcularComissão, pois apesar de eu não estar utilizando nesse momento esse valor de forma externa, comissão pode ser algo que precise ser alterado, e caso eu desenvolva uma nova função para alterar comissão conforme alguma regra eu preciso ter essa variavel disponibilizada para alteração, ou até mesmo para mostrar as regras de comissão

// OBS: Não está errado, porém é bom manter o acesso o mais retrito possível então seria um pouco mais ideal que a comissão ficasse dentro da function calcularComissao