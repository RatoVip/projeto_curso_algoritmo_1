var nome, nota01, nota02, passou;
passou = false
nome = prompt("Digite seu nome")
nota01 = prompt("Digite nota01")
nota02 = prompt("Digite nota02")

media = (parseInt(nota01) + parseInt(nota02)) / 2;

if(media >=50)
passou = true;

if(passou && (media >= 70 && media <= 100)){
alert (`${nome} voce foi aprovado!`)
alert("sua média foi: " + media)}
else{
alert(nome + " voce reprovou, try again")
alert("sua média foi: " + media)}