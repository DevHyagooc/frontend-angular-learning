// Médio — Rest em função

// Crie:
const exibirValores = (...valores) => {
  console.log(valores);
};

// Chame:
exibirValores(10, 20, 30, 40);

// Antes de executar, responda:
// 1. Qual será o tipo de valores? R: Será um array de números
// 2. O que estará armazenado nele? R: Todos os números passados na função exibirValores
// 3. Por que esse uso de ... é chamado de rest e não spread? R: Porque não estamos passando um objeto pra que seja "copiado" mas sim falando pra função que não queremos definir um número exato de valores, mas sim pegar todos que estão sendo passados e chamando de valores