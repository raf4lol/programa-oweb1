/* Em JS podemos manipular a estrutura html através de eventos
1 - Click disparado quando o usuario click no evento
*/

let titulo = document.getElementById('t1')
function alterarTitulo(){
    let novoTitulo = prompt("Digite o novo titulo")
    titulo.textContent = novoTitulo
}



function mudarcor(){
    let blackDiv = document.getElementsByClassName('caixa')
    blackDiv.style.backgroundColor = "red"
    
    }

function mudarcorsaida(){
    let blackDiv = document.getElementsByClassName('caixa')
    blackDiv.style.backgroundColor = "green"
}