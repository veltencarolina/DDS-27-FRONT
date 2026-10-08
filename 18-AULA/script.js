
/*
// laços de repetição

//for = para
for(var i = 0; i < 10; i++){
    console.log("sla")

}


// while = enquanto
var contagem =1
while(contagem < 51){
    console.log("oi")
    contagem = contagem + 5
}

console.log("a")

//array
var listinha = ["caneta", 6, true, "outro" 2.2, "alaa"]
console.log(lista)

//mostra elemento especifico
console.log(lista[3])

//retorna o numero de itens no array
console.log(lista.length)

//outra lista
var times = ["Sao paulo", "vasco", "santos","real madrid","desportiva"]

// valor fixo
for(var i = 0; i < 5; i++){
    console.log("o time atual é:",times[i])

}

// valor retornado
for(var i = 0; i< times.length; i++){
    console.log("o time é:", times[i])

}
 */

//interagir com com um array
var frutas = ["melancia","maça", "morango"]


//array original
console.log(frutas)

//para adição
//push adiciona no fim do array

frutas.push("laranja")
console.log(frutas)

//unshift- add no inicio
frutas.unshift("maracujá")
console.log(frutas)

//remoção de elemento
//pop- remove o ultimo elemento
var frutaMorta = frutas.pop()
console.log(" a morta é: ", frutaMorta)

frutas.unshift("banana")

//shift tirar primeira fruya
var exFruta = frutas.shift()
console.log("ex primeira fruta era: ", exFruta)

//includes//descobrir valor especifico nesse array
console.log("tem pitu?", frutas.includes(frutas))

//ordenar o array
frutas.sort()
console.log(frutas)

//reverse -inverter array
frutas.reverse(frutas)

//convertrndo o array
console.log(frutas.toString())

// junta o array e troca o separador
console.log(frutas.join("-"))

//slice - copia
var copia = frutas.slice(2,3)
console.log("copia",copia)


// splice
// remover
var remover = frutas.splice(1,2)
console.log("removidos", remover)

// add
//nao substitui
frutas.splice( 2, 0 , "pomelo","toranja")
console.log(frutas)

//add substituição
frutas.splice(1, 3, "blush","rimel")
console.log(frutas)

var roupas =[]
console.log("fala ai uma peça de roupa")
roupas.push()