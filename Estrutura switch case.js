

function acaoBotao() {
 
    var num01, num02, resultado, operacao    
    
    num01 = prompt("Digite o primeiro numero")
    operacao = prompt("digite a operação: EX: + , - , * , / ")
    num02 = prompt("Digite o segundo numero")
    
    switch(operacao){
        case "+":
            resultado = parseInt(num01) + parseInt(num02)
            break;
            case "-":
                 resultado = parseInt(num01) - parseInt(num02)
            break;
                case "*":
                    resultado = parseInt(num01) * parseInt(num02)
            break;
                    case "/":
                        resultado = parseInt(num01) / parseInt(num02)
            break;}    
    
    document.getElementById("paragrafo").innerText = resultado}