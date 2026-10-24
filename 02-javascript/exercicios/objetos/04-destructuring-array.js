// Médio — destructuring em array

// Use:
// const tecnologias = ['JavaScript', 'TypeScript', 'Angular'];

// Extraia apenas:
// primeiraTecnologia
// segundaTecnologia

// Depois responda:
// No destructuring de arrays, o que determina qual valor cada variável recebe? R: a ordem que definimos/colocamos

const tecnologias = ['JavaScript', 'TypeScript', 'Angular'];

const [primeiraTecnologia, segundaTecnologia] = tecnologias

console.log(primeiraTecnologia, segundaTecnologia)