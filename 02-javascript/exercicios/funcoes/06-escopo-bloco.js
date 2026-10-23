// Médio — escopo de bloco

// Analise antes:
const ativo = true;

if (ativo) {
  const status = 'Cliente ativo';

  console.log(status);
}

console.log(status);

// Responda:
// 1. O primeiro console.log funciona? R: Sim
// 2. O segundo funciona? R: Não
// 3. Por quê? R: Porque status só existe dentro do bloco do if por conta do escopo
// 4. Trocar const status por let status resolveria? R: Não
// Não pesquise antes.