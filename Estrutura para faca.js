/*
num01: inteiro
fatorial, contador: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
Escreval("Digite o número para calcular o fatorial")
leia (num01)
fatorial:= 1
para contador de 1 ate num01 faca
     fatorial:= fatorial * contador
fimpara
escreval (" O fatorial de ", num01, " é: ", fatorial)
*/

function acaoBotao(){
var num01, fatorial

num01 = prompt("Digite o numero para calcular o fatorial.")
fatorial = 1

for (var contador =1; contador<= num01; contador++){
    fatorial = fatorial*contador

}
document.getElementById("paragrafo").innerText = " O fatorial de " + num01 + " e: " + fatorial
}