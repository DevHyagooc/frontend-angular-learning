// Exercício 3 — fluxo de execução

// Sem executar inicialmente:
const obterMensagem = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('B');
    }, 500);
  });
};

const executar = async () => {
  console.log('A');

  const resultado = await obterMensagem();

  console.log(resultado);

  console.log('C');
};

console.log('D');

executar();

console.log('E');

// Escreva:
// Ordem prevista: D, A, C, E, B
// Ordem correta com explicação: D, A, E, B, C -- ao chamar o await a função executar espera a etapa concluir para prosseguir com o restante, por isso ele imprime primeiro o E, e quando há o retorno ele imprime o B e prossegue pro C

// Depois execute.

// Quero que explique especificamente:
// Por que E pode aparecer antes de B? Porque ele está externo, fora da função assíncrona, logo a depender do tempo de resposta ele pode ser executado primeiro, já que não há nenhuma trava ou limite no escopo externo