console.log(sessionStorage.getItem('fname'));

let q1 = document.querySelector('#q1')
var pontos = 0

let q2 = document.querySelector('#q2')
let botao = document.querySelector('#enviar')
botao.addEventListener('click', enviar)

function enviar(){
    if (q1.value == "opção 1") {
        pontos++
    }
    if (q2.value == "opção 2") {
       pontos++
    }    
    if (q3.value == "opção 3") {
        pontos++
    }
    if (q4.value == "opção 2") {
        pontos++
    }
    if (q5.value == "opção 2") {
        pontos++
    }
    if (q6.value == "opção 2") {
        pontos++
    }
    if (q7.value == "opção 1") {
        pontos++
    }
    if (q8.value == "opção 2") {
        pontos++
    }
    if (q9.value == "opção 3") {
        pontos++
    }
    if (q10.value == "opção 2") {
        pontos++
    }
    console.log(pontos);
    pontos=0
}
