//funcao externa
function opcoes(){
    console.log("as opções são:", this.tamanho.toString())
}


var produto1 ={
    nome:"coca-cola",
    categoria: "bebida",
    quantidade:30,
    tamanho:["200ml", "lata", "600ml", "3l","ks"],

    //cria um metodo interno
    descricao:function (){
        //this - referencia
        console.log(`A ${this.nome} é uma categoria de ${this.categoria}`)

    }
// usa uma função
verTamanhos: opcoes

}
produto1.verTamanhos()
produto1.descricao()

var produto2 = {
nome:"coxinha",
    categoria: "salgados",
    quantidade:3,
    tamanho:["P", "M", "G"],
    descricao:function (){
        console.log(`A ${this.nome} é uma categoria de ${this.categoria}`)
}

}

//this -referencia o proprio


var aluno ={
    nome:"cristiano",
    anoEscolar: "7°",
    turma:"c",
    notas:[6, 7, 8],
    media:(n1,n2,n3) =>{
        return((n1+n2+n3)/3)
    }

}


console.log()
aluno.media()