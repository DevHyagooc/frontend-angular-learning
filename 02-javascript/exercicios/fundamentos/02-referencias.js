// 2. Médio — referência

// Antes de executar, responda em comentários: quais valores aparecerão; quantos objetos diferentes você acredita que existem na memória nesse exemplo; e por que alterar produtoB pode afetar produtoA.

const produtoA = {
  nome: 'Notebook',
  preco: 3500
};

const produtoB = produtoA;

produtoB.preco = 3200;

console.log(produtoA.preco); // Aparecerá 3200
console.log(produtoB.preco); // Aparecerá 3200

// Existe apenas um objeto nesse exemplo e 2 variáveis que direcionam para esse mesmo objeto, por isso alterar um também afetará o outro.