/*
escreval("Digite o nome do aluno: ")
   leia(nome)
   escreval("Digite a nota01 do aluno: ")
   leia(nota01)
   escreval("Digite a nota02 do aluno: ")
   leia(nota02)
   media := (nota01 + nota02) / 2


      se media>= 50 entao
      escreval(nome , " Voce foi Aprovado!!!")
      senao
      escreval(nome , " Voce foi Reprovado: Burrão!!")
      fimse
      */
     var nome, nota01, nota02;
     nome = prompt("Digite o nome do aluno")
     nota01 = prompt("Digite nota01 do aluno")
     nota02 = prompt("Digite nota02 do aluno")
     nota03 = prompt("Digite nota03 do aluno")
     media = (parseInt(nota01) + parseInt(nota02)+parseInt(nota03)) / 3 ;
     if(media >= 50 )
        alert(nome + " Você foi aprovado!!! Congrats!!!")
     else
        alert(nome + " Você foi reprovado: Burrão")
     /* se eu fosse realizar mais uma instrução após o if(media...) eu 
     deveria usar o {}, 1 logo após o final do if(media...) e o 2 no final, 
     após a segunda intrução, ex, um 2° alert.
     */

