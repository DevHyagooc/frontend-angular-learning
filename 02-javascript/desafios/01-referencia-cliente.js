// 1. Desafio — investigando um bug

// Imagine que o desenvolvedor esperava que clienteOriginal permanecesse com status: 'ativo'. Sem pesquisar a solução pronta, explique em comentários: por que a expectativa dele está errada; onde exatamente está a causa do comportamento; e conceitualmente, o que precisaríamos fazer para que a edição não alterasse o objeto original. Não precisa implementar ainda uma técnica de cópia que não estudamos.

// Depois execute todos e compare suas previsões com o resultado real.
// Pergunta de compreensão
// Quero que responda também, com suas palavras:
// Se um objeto declarado com const pode ter suas propriedades modificadas, afinal o que exatamente o const está impedindo?

const clienteOriginal = {
  nome: 'Carlos',
  status: 'ativo'
};

const clienteParaEdicao = clienteOriginal;

clienteParaEdicao.status = 'inativo';

console.log(clienteOriginal); // Será retornado nome: 'Carlos',  status: 'inativo'

// A expectativa dele está errada pois ele está criando uma nova variável e atribuindo a variável anterior a ela, isso não cria um novo objeto, e sim mantém o compartilhamento do mesmo objeto. Para que a expectativa dele fosse coberta, essa variável clienteParaEdicao deveria ser definido sem tentar reatribuir a variável anterior nela e posteriormente realizar uma mutação no objeto que deseja alterar.

// Substituí cliente por pessoa pra que não seja necessária comentar nenhum dos 2 blocos de código
const pessoaOriginal = {
  nome: 'Carlos',
  status: 'ativo'
};

const pessoaParaEdicao = {
  nome: 'Carlos',
  status: 'ativo'
};

pessoaParaEdicao.status = 'inativo';

console.log(pessoaOriginal); // Será retornado nome: 'Carlos',  status: 'ativo'

// Resposta da pergunta de compreensão
// O const ele impede que façamos uma reatribuição das variáveis, porém ainda permite a mutação do objeto que compõe a variável