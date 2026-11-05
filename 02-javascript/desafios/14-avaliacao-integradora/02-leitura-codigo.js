// Parte 2 — Leitura de código
// Não execute antes da previsão.

// Questão A -------------------------------------------------------------------------------------

// Cria uma constante passando um objeto com os dados do cliente
const cliente = {
  nome: 'Ana',
  endereco: {
    cidade: 'Fortaleza'
  }
};

// Utiliza spread pra fazer uma cópia rasa do cliente original
const copia = {
  ...cliente
};

// Altera a propriedade nome do objeto copia para Mariana
copia.nome = 'Mariana';

// Altera a propriedade cidade do objeto de referência
copia.endereco.cidade = 'Recife';

console.log(cliente.nome); // Irá logar 'Ana'
console.log(copia.nome); // Irá logar 'Mariana'
console.log(cliente.endereco.cidade); // Irá logar 'Recife'

// Escreva a saída e explique cada linha.










// Questão B -------------------------------------------------------------------------------------
// const clientes = [
//   { id: 1, nome: 'Ana', ativo: true, saldo: 100 },
//   { id: 2, nome: 'Carlos', ativo: false, saldo: 200 },
//   { id: 3, nome: 'Mariana', ativo: true, saldo: 300 }
// ];

// const resultado = clientes
//   .filter(({ ativo }) => ativo)
//   .map(({ nome }) => nome);

// console.log(resultado);

// Responda:
// - resultado final; R: Será logado uma lista com os nomes de Ana e Mariana
// - o que acontece na primeira transformação; R: A lista é filtrada com apenas os clientes ativos
// - o que acontece na segunda. R: A lista passa a conter apenas os nomes dos clientes ativos










// Questão C -------------------------------------------------------------------------------------
// const valores = [10, 20, 30];

// const resultado = valores.reduce((acumulador, valorAtual) => {
//   return acumulador + valorAtual;
// }, 5);

// console.log(resultado);

// Responda:
// - valor final; R: 65
// - primeiro valor de acumulador; R: 5
// - primeiro valor de valorAtual. R: 10









// Questão D -------------------------------------------------------------------------------------
// const executar = async () => {
//   console.log('A');

//   const resultado = await Promise.resolve('B');

//   console.log(resultado);
// };

// console.log('C');

// executar();

// console.log('D');

// Qual é a ordem exata? R: C, A, D, B

// Explique principalmente por que D aparece onde aparece. R: D aparece antes de B pois ele não é travado pois a função é assíncrona e possui um await, como ele está no escopo externo ele permanece rodando, enquanto o console.log(resultado) aguarda a promise retornar









// Questão E -------------------------------------------------------------------------------------
// const validar = (valor) => {
//   if (valor <= 0) {
//     throw new Error('Valor inválido');
//   }

//   return valor;
// };

// try {
//   console.log('A');

//   validar(0);

//   console.log('B');
// } catch (erro) {
//   console.log(erro.message);
// } finally {
//   console.log('C');
// }

// console.log('D');

// Preveja toda a saída. 
// R: A - Valor inválido - C - D