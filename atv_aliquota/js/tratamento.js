import Pessoa from "./pessoa.js";
var dados = JSON.stringify(localStorage.getItem('dados'));

let nomeCompleto;
let rendimento;
let cpf;

formataDados(dados);

function formataDados(dados){
    let n_dados = dados.replace(/"/g, '');
    const perm_dados = n_dados.split(',') 

    nomeCompleto = perm_dados[0] + ' ' + perm_dados[1];
    cpf = perm_dados[2];
    rendimento = perm_dados[3];
}

export function formataValor(valor){
    let format = valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    return format;
}

export default new Pessoa(nomeCompleto, cpf, rendimento)

