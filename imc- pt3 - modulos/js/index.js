import listaAlunos from "./alunos.js";
import { exibirItems } from "./imc.js";
import { mostrarCategorias } from "./imc.js";

var lista = listaAlunos();
lista.forEach(exibirItems);
mostrarCategorias();
