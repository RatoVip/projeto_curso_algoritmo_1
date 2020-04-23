/*nome: caractere
num: real


Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
escreval ("digite o nome desejado: ")
leia (nome)
escreval ("digite o numero desejado: ")
leia (num)

escreval (nome, " : ", num)
*/
var nome, num;

nome = prompt ("digite o nome desejado: ")
num = prompt("digite o numero desejado: ")

document.getElementById("paragrafo").innerText = nome + " : " + num