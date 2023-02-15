//função - cálculo e definição de imc
function calcularIMC(peso, altura){ 
    let imc = peso/(altura*altura)
    if (imc < 18.5){
        return imc.toFixed(1) + ' - Abaixo do peso'
    } else if (imc < 25) {
        return imc.toFixed(1) + ' - Peso normal'
    } else if (imc < 30) {
        return imc.toFixed(1) + ' - Excesso de peso'
    } else if (imc < 35) {
        return imc.toFixed(1) + ' - Obesidade I'
    } else if (imc < 40) {
        return imc.toFixed(1) + ' - Obesidade II'
    } else {
        return imc.toFixed(1) + ' - Obesidade III'
    }
}

//função - exibir dados
function exibir(nome, imc){
    var aluno = {nome:nome, imc:imc}
    console.log(aluno)
}


//objetos - alunos
var aluno0 = {
    nome:"Larissa",
    idade:15,
    peso:62,
    altura:1.65,
}

var aluno1 = {
    nome:"João",
    idade:22,
    peso: 95,
    altura:1.80,
}

var aluno2 = {
    nome:"Lucas",
    idade:45,
    peso:66,
    altura:1.90,
}

var aluno3 = {
    nome:"Juliana",
    idade:32,
    peso:100,
    altura:1.75,
}

var aluno4 = {
    nome:"Kevin",
    idade:18,
    peso:100,
    altura:1.63,
}


//output
exibir(aluno0.nome, calcularIMC(aluno0.peso,aluno0.altura))
exibir(aluno1.nome, calcularIMC(aluno1.peso,aluno1.altura))
exibir(aluno2.nome, calcularIMC(aluno2.peso,aluno2.altura))
exibir(aluno3.nome, calcularIMC(aluno3.peso,aluno3.altura))
exibir(aluno4.nome, calcularIMC(aluno4.peso,aluno4.altura))