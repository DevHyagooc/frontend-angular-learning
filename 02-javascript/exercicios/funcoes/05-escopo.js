// Fácil — leitura de escopo

// Antes de executar:
const nome = 'Carlos';

function exibirNome() {
  const mensagem = 'Cliente: ' + nome;

  console.log(mensagem);
}

exibirNome();

console.log(nome);
console.log(mensagem);

// Responda:
// 1. Quais console.log funcionarão? R: o primeiro console log dentro da function e o console.log(nome) que está na parte externa
// 2. Qual deles causará problema? R: o console.log(mensagem) que está fora da function
// 3. Por quê? R: Porque a variável mensagem só existe dentro do escopo da function exibirNome
// 4. Qual variável pertence ao escopo externo? R: variável nome
// 5. Qual variável pertence ao escopo da função? R: variável mensagem
// Depois execute.