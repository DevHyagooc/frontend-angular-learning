import { 
   getPropostasAprovadas,
   getValorTotalAprovado,
   atualizarStatusProposta,
   buscarPropostaPorId
} from "./propostas.js";

const propostas = [
  {
    id: 1,
    cliente: 'Ana',
    status: 'aprovada',
    valor: 1000
  },
  {
    id: 2,
    cliente: 'Carlos',
    status: 'pendente',
    valor: 2500
  },
  {
    id: 3,
    cliente: 'Mariana',
    status: 'aprovada',
    valor: 3000
  }
];

const exibirPropostaPorId = async (id) => {
   try{
      const proposta = await buscarPropostaPorId(id, propostas)

      console.log(proposta)
   } 
   catch (erro){
      console.log(erro.message)
   } 
   finally {
      console.log('function exibirPropostaPorId finalizada!')
   }
}

exibirPropostaPorId(2)
exibirPropostaPorId(10)
exibirPropostaPorId(0)