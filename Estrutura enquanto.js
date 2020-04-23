/*
nome: caractere
idade, limite, contador, sexo: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 

escreval("Digite a quantidade de vezes que será verificada a idade: ")
leia(limite)
contador:=0
enquanto contador < limite faca
escreval("Digite o nome da pessoa")
leia(nome)
escreval ("Qual o seu sexo? Digite 1 para masculino e 2 para feminino")
         leia(sexo)
         se (sexo <=1) entao
         escreval("Digite a idade do ", nome, ": " )
         senao
         escreval("Digite a idade da ", nome, ": " )
                          fimse
         leia(idade)
         se idade >=18 entao
            escreval(nome," você é maior de idade")
            senao
                 escreval(nome, " você é menor de idade")
         fimse

         contador:= contador+1
         fimenquanto

Fimalgoritmo

*/

function acaoBotao(){

var nome, idade, contador, limite

limite = prompt("Quantas vezes voce quer verificar a maioridade?")
contador = 0
while (contador<limite){
    nome = prompt("Digite o nome da pessoa: ")
    idade = prompt ("Digite a idade de " + nome + ": " )
            if (idade >18) 
            document.getElementById("paragrafo").innerText = nome + " voce e maior de idade"
            else 
            document.getElementById("paragrafo").innerText = nome + " voce e menor de idade"

         contador++}

}
