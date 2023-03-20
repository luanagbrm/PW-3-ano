const submit = document.querySelector("#btnsub")

let nome, sobrenome, cpf, rendimento;
let pessoa;

function getInfo(){
    nome = document.querySelector("#nome").value;
    sobrenome = document.querySelector("#sobrenome").value;
    cpf = document.querySelector("#cpf").value;
    rendimento = document.querySelector("#rendimento").value;

    pessoa = [nome, sobrenome, cpf, rendimento]
    localStorage.setItem("dados", pessoa);
}

submit.addEventListener('click', getInfo)