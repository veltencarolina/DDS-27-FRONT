// desvivos condicionais
// if = se
var estarVivo = true

// primeira comparação
if(estarVivo){
    console.log("parabens")
} 

//segunda comparação
else if (estarVivo == undefined) {
    console.log("sinistro")
}
else{
    console.log("morreu")
}

// switch/case
var camisa = "Marrom"

switch(camisa){
    case "preta":
        console.log("ganha bobom")
    break

    case "branca":
        console.log("outro bobom")
    break

    case "vermelha":
        console.log("ferrari")
    break

    default:
        console.log("nao ganhou nada")
    break

}
 // promt - interage com o usuario
 var preferido = prompt("qual é seu pet favorito do mundo dos filmes")

 console.log("seu pet preferido é:", preferido)








































 var caixa1 =  Numer(prompt("numero de caixa"))
 var caixa2=  Numer(prompt("numero de caixa"))
 var caixa3=  Numer(prompt("numero de caixa"))
 
 if ((caixa1 < caixa2 <  caixa3)|| (caixa1+caixa2 <caixa3)){
    console.log("1 viagem")
    
 }
 else if((caixa1 < caixa2 && caixa2 == caixa3)||(caixa1== caixa2 && caixa2 < caixa3)){
console.log("2 viagem")

 }
  else{
console.log("3 viagem")
  }