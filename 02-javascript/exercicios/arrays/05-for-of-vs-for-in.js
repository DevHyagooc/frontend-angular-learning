// Exercício específico — for...of vs for...in

// Considere:
const tecnologias = ['JavaScript', 'TypeScript', 'Angular'];

// Antes de executar, preveja:
for (const item of tecnologias) {
  console.log(item);
}

// e:
for (const item in tecnologias) {
  console.log(item);
}

// Responda:
// 1. O primeiro imprime o quê? R: Imprime todos as tecnologias da lista
// 2. O segundo imprime o quê? R: Imprime os índices de cada tecnologia
// 3. Por que existe essa diferença? R: Porque o in utiliza as propriedades já o of utiliza os valores
// 4. Qual você escolheria para imprimir diretamente os nomes das tecnologias? for of
// Depois execute.