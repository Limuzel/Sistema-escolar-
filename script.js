function login(){

let usuario = document.getElementById("usuario").value
let senha = document.getElementById("senha").value

if(usuario !== "" && senha !== ""){

document.getElementById("loginTela").style.display = "none"
document.getElementById("sistema").style.display = "block"

}else{

alert("Digite usuário e senha")

}

}

function cadastrarAluno(){

let ra = document.getElementById("ra").value
let nome = document.getElementById("nome").value
let idade = document.getElementById("idade").value
let turma = document.getElementById("turma").value
let responsavel = document.getElementById("responsavel").value
let escolaAnterior = document.getElementById("escolaAnterior").value

let lista = document.getElementById("listaAlunos")

let aluno = document.createElement("li")

aluno.innerHTML =
"RA: " + ra +
" | Nome: " + nome +
" | Idade: " + idade +
" | Turma: " + turma +
" | Responsável: " + responsavel +
" | Escola anterior: " + escolaAnterior +
" <button onclick='removerAluno(this)'>Remover</button>"

lista.appendChild(aluno)

}

function removerAluno(botao){

botao.parentElement.remove()

}

