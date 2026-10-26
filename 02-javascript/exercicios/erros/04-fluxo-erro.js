// Exercício 4 — investigando o fluxo

// Antes de executar, preveja a ordem:
const processar = () => {
  console.log('A');

  throw new Error('Falha no processamento');

  console.log('B');
};

try {
  console.log('C');

  processar();

  console.log('D');
} catch (erro) {
  console.log('E');
}

console.log('F');

// Responda:
// Ordem prevista: C A E F
// Por que B aparece/não aparece? R: não aparece pois antes dele sempre vai cair na tratamento de erro
// Por que D aparece/não aparece? R: não aparece pois ele chama a função processar que sempre vai retornar o erro Falha no processamento, pulando o console.log('D')
// F será executado? R: sim, pois ele está externo a tudo

// Depois execute e compare.

// Esse exercício é importante.