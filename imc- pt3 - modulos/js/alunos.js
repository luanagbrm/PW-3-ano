class Aluno {
    constructor(nome, idade, peso, altura) {
        this.nome = nome
        this.idade = idade
        this.peso = peso
        this.altura = altura
        this.imc = 0
    }
}


var aluno0 = new Aluno("Larissa", 15, 120, 1.65)
var aluno1 = new Aluno("João", 22, 95, 1.80)
var aluno2 = new Aluno("Lucas", 45, 66, 1.90)
var aluno3 = new Aluno("Juliana", 32, 100, 1.75)
var aluno4 = new Aluno("Kevin", 18, 100, 1.63)
var aluno5 = new Aluno("Luan", 15, 76, 1.73)
var aluno6 = new Aluno("Nicole", 18, 69, 1.55)
var aluno7 = new Aluno("Carlos", 17, 70, 1.71)
var aluno8 = new Aluno("Nicolly", 17, 52, 1.64)
var aluno9 = new Aluno("Daniel", 35, 70, 1.82)
var aluno10 = new Aluno("Felipe", 28, 155, 1.85)
var aluno11 = new Aluno("Gustavo", 17, 95, 1.85)
var aluno12 = new Aluno("Eduardo", 17, 58, 1.78)
var aluno13 = new Aluno("Yolanda", 17, 55, 1.75)
var aluno14 = new Aluno("Vinicius", 17, 125, 1.76)
var aluno15 = new Aluno("Arthur", 20, 70, 1.67)
var aluno16 = new Aluno("Izabelly", 17, 60, 1.68)
var aluno17 = new Aluno("Graziella", 18, 100, 1.70)
var aluno18 = new Aluno("Marcos", 19, 77, 1.45)
var aluno19 = new Aluno("Erick", 17, 60, 1.90)


var listagem = [aluno0, aluno1, aluno2, aluno3, aluno4, aluno5, aluno6, aluno7, aluno8, aluno9,
    aluno10, aluno11, aluno12, aluno13, aluno14, aluno15, aluno16, aluno17, aluno18, aluno19
]

export default function listaAlunos() {
    return (listagem)
}