

function acaoBotao() {
 
var num01, num02, resultado, operacao    

num01 = prompt("Digite o primeiro numero")
operacao = prompt("digite a operação: EX: +, -, *, /")
num02 = prompt("Digite o segundo numero")


if(operacao == "+"){
    resultado = parseInt(num01) + parseInt(num02)
}else if(operacao =="-"){
    resultado = parseInt(num01) - parseInt(num02)
}else if(operacao =="*"){
    resultado = parseInt(num01) * parseInt(num02)
}else if(operacao =="/"){
    resultado = parseInt(num01) / parseInt(num02)
}
document.getElementById("paragrafo").innerText = resultado}