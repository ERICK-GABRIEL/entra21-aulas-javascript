function definirArray() {
    console.log("Para criar um array, basta let nome = []");
    console.log("Para criar um Array com itens basta um let nome = {5,13,2}");
    let listaVazia = [];
    console.log(listaVazia);
    let nomes = ["Erick", "Arthur", "Rafael", "Thabata"];
    console.log(nomes);
}

definirArray();

function alertar(mensagem) {
    alert(mensagem)
}
var lista = [];

function inserirArray(novoNome) {
    lista.push(novoNome)
    console.log(lista);
}

function listar() {
    for (let contador = 0; contador < lista.length; contador++) {
        console.log("Repetindo com o FOR o indice " + contador + " = " + lista[contador]);


    }
    console.log("-------");

    for (const item of lista) {
        console.log("Repetindo com for inteligente, sem contar o indice:  " + item);

    }
    console.log("-------------");
    lista.forEach(item => {
        console.log("Repetindo com ForEach sem contar indice: " + item);
    })
}

