/* //console - terminal navegador

console.log(console)

// window - janela do navegador
window.alert()
window.prompt()

console.log(window)*/

// document - dom - seu cod html inteiro

console.log(document)
console.log(document.head)
console.log(document.body)

//seção 1
//seleciona elementos pela tag 
var titulos = document.getElementsByTagName("h1")
console.log(titulos)

//seleciona elementos pela class
var paragrafos = document.getElementsByClassName("para")
console.log(paragrafos)

//seleciona elemento por id
var especifico = document.getElementById("p3")
console.log(especifico)

//alteração de estilos
//pego pelo id
especifico.style.backgroundColor = "red"
especifico.style.color = "white"

//pela class
paragrafos[0].style.backgroundColor = "pink"

//pela tag
titulos[2].style.backgroundColor = "orange"

//seção 2
//função ativada , mas criada pelo javascript, 
 function  cliquei() {
console.log("SAAAAAAAAAAAAAAAAAAAII")
 }

 //função ativada , mas criada pelo javascript, via eventlistener
 document.getElementById("btnCliqueDuplo").addEventListener("dblclick",() =>{
    qtdCliques++
    console.log(`Cliques:${qtdCliques}`)
 })

 //botão clicavel,que altera varios
 document.getElementById("shazam").addEventListener("click", () =>{
    for(var i= 0; i <titulos.length; i++)
        titulos[i].style.backgroundColor ="red"
        titulos[i].style.color = "yellow"
        titulos[i].style.fontSize = "100px"
 })

 //use o this
 //funçaõ ativada, parametro veio com o this 
 function quemFoi(elementoQueChamou){
console.log(elementoQueChamou)
 }

 //seção 3 
 document.getElementById("cria texto").addEventListener("click",()=>{

    //innertext - textcontent
    document.getElementById("textoCriado").innerText = "mudou"
 })

 //altera o html
 document.getElementById("criahtml").addEventListener("click",() =>{
  // innerhtml - altera o elemento  
 document.getElementById("vazia").innerHTML= "<h2>HAHHAHHAHHHAH</h2>"
 })

 for(var)