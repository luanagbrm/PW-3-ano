export default function calcularIMC(peso, altura) {
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

var baixoPeso = [],
    pesoNormal = [],
    excessoPeso = [],
    obesidade1 = [],
    obesidade2 = [],
    obesidade3 = []

export function exibirItems(item) {

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

export function mostrarCategorias(){
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
}