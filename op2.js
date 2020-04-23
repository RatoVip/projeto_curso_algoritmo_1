 var nome, nota01, nota02, nota03, passou;
     passou = false;
     nome = prompt("Digite o nome do aluno")
     nota01 = prompt("Digite nota01 do aluno")
     nota02 = prompt("Digite nota02 do aluno")
     nota03 = prompt("Digite nota03 do aluno")
     media = (parseInt(nota01) + parseInt(nota02) + parseInt(nota03)) / 3;
     
     if(media >= 50 )
     passou = true; 
        
        if(passou && (media >= 70 && media <=90))
        alert(nome + " Você foi aprovado!!! Congrats!!!")
     else
        alert(nome + " Você foi reprovado: Burrão")