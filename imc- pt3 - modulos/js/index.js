import listaAlunos from "./alunos.js";
import { exibirItems } from "./imc.js";
import mostrarCategorias from "./apresentacao.js";
import listaCategorias from "./imc.js";

var lista = listaAlunos();
lista.forEach(exibirItems);

let categorias = listaCategorias()
mostrarCategorias(categorias);
