//função - cálculo e definição de imc
function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura)
    if (imc < 18.5) {
        return imc.toFixed(1)
    } else if (imc < 25) {
        return imc.toFixed(1)
    } else if (imc < 30) {
        return imc.toFixed(1)
    } else if (imc < 35) {
        return imc.toFixed(1)
    } else if (imc < 40) {
        return imc.toFixed(1)
    } else {
        return imc.toFixed(1)
    }
}

//função - exibir dados
function exibir(nome, imc) {
    var aluno = { nome: nome, imc: imc }
    console.log(aluno)
}


//objetos - alunos
var aluno0 = {
    nome: "Larissa",
    idade: 15,
    peso: 120,
    altura: 1.65,
    imc: 0

}

var aluno1 = {
    nome: "João",
    idade: 22,
    peso: 95,
    altura: 1.80,
    imc: 0
}

var aluno2 = {
    nome: "Lucas",
    idade: 45,
    peso: 66,
    altura: 1.90,
    imc: 0,
}

var aluno3 = {
    nome: "Juliana",
    idade: 32,
    peso: 100,
    altura: 1.75,
    imc: 0
}

var aluno4 = {
    nome: "Kevin",
    idade: 18,
    peso: 100,
    altura: 1.63,
    imc: 0
}

var aluno5 = {
    nome: "Luan",
    idade: 15,
    peso: 76,
    altura: 1.73,
    imc: 0
}

var aluno6 = {
    nome: "Nicole",
    idade: 18,
    peso: 69,
    altura: 1.55,
    imc: 0
}

var aluno7 = {
    nome: "Carlos",
    idade: 17,
    peso: 70,
    altura: 1.71,
    imc: 0
}

var aluno8 = {
    nome: "Nicolly",
    idade: 17,
    peso: 52,
    altura: 1.64,
    imc: 0
}

var aluno9 = {
    nome: "Daniel",
    idade: 35,
    peso: 70,
    altura: 1.82,
    imc: 0
}

var aluno10 = {
    nome: "Felipe",
    idade: 28,
    peso: 155,
    altura: 1.85,
    imc: 0
}

var aluno11 = {
    nome: "Gustavo",
    idade: 17,
    peso: 95,
    altura: 1.85,
    imc: 0
}

var aluno12 = {
    nome: "Eduardo",
    idade: 17,
    peso: 58,
    altura: 1.78,
    imc: 0
}

var aluno13 = {
    nome: "Yolanda",
    idade: 17,
    peso: 55,
    altura: 1.75,
    imc: 0
}

var aluno14 = {
    nome: "Vinicius",
    idade: 17,
    peso: 125,
    altura: 1.76,
    imc: 0
}

var aluno15 = {
    nome: "Arthur",
    idade: 20,
    peso: 70,
    altura: 1.67,
    imc: 0
}

var aluno16 = {
    nome: "Izabelly",
    idade: 17,
    peso: 60,
    altura: 1.68,
    imc: 0
}

var aluno17 = {
    nome: "Graziela",
    idade: 18,
    peso: 100,
    altura: 1.70,
    imc: 0
}

var aluno18 = {
    nome: "Marcos",
    idade: 19,
    peso: 77,
    altura: 1.45,
    imc: 0
}

var aluno19 = {
    nome: "Erick",
    idade: 17,
    peso: 60,
    altura: 1.90,
    imc: 0
}


var listagem = [aluno0, aluno1, aluno2, aluno3, aluno4, aluno5, aluno6, aluno7, aluno8, aluno9,
    aluno10, aluno11, aluno12, aluno13, aluno14, aluno15, aluno16, aluno17, aluno18, aluno19
]

var baixoPeso = [],
    pesoNormal = [],
    excessoPeso = [],
    obesidade1 = [],
    obesidade2 = [],
    obesidade3 = []

function exibirItems(item) {

    item.imc = calcularIMC(item.peso, item.altura)
    if (item.imc < 18.5) {
        baixoPeso.push(item)
        item.categoria = "Abaixo do peso"
    } else if (item.imc < 25) {
        pesoNormal.push(item)
        item.categoria = "Peso normal"
    } else if (item.imc < 30) {
        excessoPeso.push(item)
        item.categoria = "Excesso de peso"
    } else if (item.imc < 35) {
        obesidade1.push(item)
        item.categoria = "Obesidade I"
    } else if (item.imc < 40) {
        obesidade2.push(item)
        item.categoria = "Obesidade II"
    } else {
        obesidade3.push(item)
        item.categoria = "Obesidade III"
    }

}



listagem.forEach(exibirItems);
console.log("===== Alunos abaixo do peso ideal =====")
console.log(baixoPeso)
console.log("===== Alunos no peso ideal =====")
console.log(pesoNormal)
console.log("===== Alunos com excesso de peso =====")
console.log(excessoPeso)
console.log("===== Alunos em obesidade grau I =====")
console.log(obesidade1)
console.log("===== Alunos em obesidade grau II =====")
console.log(obesidade2)
console.log("===== Alunos em obesidade grau III =====")
console.log(obesidade3)