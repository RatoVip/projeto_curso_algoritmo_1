/*
sairLoop: caractere
val01,val02: real


Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 

repita
      escreval("Digite o primeiro valor: ")
      leia(val01)
      escreval("Digite o segundo valor: ")
      leia(val02)
      escreval("Resultado: ", val01 + val02)
      escreval("Deseja sair? SIM ou NAO")
      leia(sairLoop)
ate sairLoop <> "NAO"
*/

function acaoBotao(){

var sairLoop, val01, val02

do{
      val01 = prompt("Digite o primeiro valor: ")
      val02 = prompt("Digite o segundo valor: ")
      document.getElementById("paragrafo").innerText = "Resultado = " + (parseInt(val01) + parseInt(val02))
      sairLoop = prompt("deseja sair? S/N")}              
              while(sairLoop == "N")
}