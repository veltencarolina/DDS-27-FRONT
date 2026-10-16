/*
click — quando clica em um elemento.
dblclick — quando dá duplo clique.
input — quando o valor de um campo muda durante a digitação.
change — quando o valor de um campo é alterado e confirmado.
submit — quando envia um formulário.
mouseover — quando o mouse entra sobre um elemento.
mouseout — quando o mouse sai de um elemento.
mousemove — quando o mouse se movimenta sobre um elemento.
mousedown — quando pressiona um botão do mouse.
mouseup — quando solta um botão do mouse.
keydown — quando pressiona uma tecla.
keyup — quando solta uma tecla.
focus — quando um elemento recebe foco.
*/

// =====================================================

//evento change
// change dispara quando o usuario sai da caixinha

document.getElementById("campoChange").addEventListener("change", () =>{
    const textoDigitado = document.getElementById("campoChange").value

    //pega o texto de baixo e troca o valor, pelo que a pessoa digitou e guardei na variavel 
    document.getElementById("resultadoChange").innerText = "voce digitou:"+ textoDigitado

})

// evento input
//input  dispara  quando o usuario altera o valor da caixnha
document.getElementById("campoInput").addEventListener("input", function(){
    //pega o valor digitado peo digitado
    const textoDigitado = this.value
     document.getElementById("resultadoInput").innerText = textoDigitado
})

//-----------------------------------------------------------------
//guarda todo html do formulario 
const formulario = document.getElementById("formJogador")

//guarda o html da lista de jogadores(que se inicia vazia)
const lista = document.getElementById("listaJogadores")

//função para ativar quando o usuario tenta enviar dados
formulario. addEventListener("submit", function(){

    //parar  de recarregar a pagina quando tentar enviar,alem de outras
    evento.preventDefault()


    //verifica o conteudo digitado nas caixinha , e guarda em variaveis 
    const inputNome = document.getElementById("nome").value
    const inputCamisa = document.getElementById("camisa").value
    const inputPosicao = document.getElementById("posição").value
    const inputTime = document.getElementById("time").value

 
    //criar um objeto com as infomações
    const jogadores ={
        nome:inputNome,
        posição: inputPosicao,
        camisa: Number(inputCamisa),
        time: inputTime
    }
    console.log(jogadores)
})
// função para criar um card
function adicionarJogador(jogadorAtual){

    //cria o elemento card
    const card = document.createElement("div")

    //cria elementos do card
    const titulo = document.createElement("h4")
    const textoPosicao = document.createElement("p")
    const textoCamisa= document.createElement("p")

    //preencher os elementos, com valores do objeto
    titulo.textContent = jogadorAtual.nome
    textoPosicao.textContent = "posição"+jogadorAtual.posicao
    textoCamisa.textContent = "camisa"+jogadorAtual.camisa

    //construo o card
    card.appendChild(titulo)
    card.appendChild(textoPosicao)
    card.appendChild(textoCamisa)

    //adiciona o card, como o filho da lista de jogadores
    lista.appendChild(card)

    //resetar o formulario depois que envia
    formulario.reset()
}