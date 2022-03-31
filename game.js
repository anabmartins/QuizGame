let select = document.querySelector('#q1')
var paragrafo = document.querySelector('p')

let q2 = document.querySelector('#q2')
let botao = document.querySelector('#verificar')
botao.addEventListener('click', verificar)

function verificar(){
    if (q1.value == "opcao 1") {
        paragrafo.textContent = 'Você selecionou a opção: ' + q1
    } else {
        //faz o cálculo
    }

    if (q2.value == "opcao 1") {
        //faz o cálculo
    } else {
        //faz o cálculo
    }
}