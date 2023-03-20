import calculaDivida from "./calculo.js";
import Pessoa from "./tratamento.js"
import {formataValor} from "./tratamento.js";

let rendimento = parseFloat(Pessoa.rendimento);
document.querySelector("#rendimento").innerHTML = (formataValor(rendimento));

let resultado = calculaDivida(rendimento);
console.log(resultado[0])
check(resultado[0]);

let aliquota = resultado[1];
document.querySelector('#porcentagem').innerHTML = (aliquota)

let nomeCompleto = Pessoa.nome;
document.querySelector('#nome').innerHTML = (nomeCompleto);

let cpf = Pessoa.cpf;
document.querySelector('#cpf').innerHTML = (cpf);

function check(divida){
    if(divida == 'Isento'){
        document.querySelector('#p').innerHTML = "Você está &nbsp";
        document.querySelector('#aliquota').innerHTML = divida;
        document.querySelector('#p2').innerHTML = "&nbsp da cobrança do Imposto de Renda";
        document.querySelector('#pali').innerHTML = "";
        document.querySelector('#pali2').innerHTML = ""
        document.querySelector('#porcentagem').innerHTML = ""
    } else {
        document.querySelector('#p').innerHTML = "Você deve &nbsp";
        document.querySelector('#aliquota').innerHTML = formataValor(divida);
        document.querySelector('#p2').innerHTML = "&nbspde Imposto de Renda";
    }
}