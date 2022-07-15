
console.log("Hello World"); // O console aceita parametros para exibir em log
console.log("Erick " + 16 + " Anos");// É possivel concatenar textos e variáveis igual ao Java
console.log("Erick", 16, " Anos");// O console aceita infinitos parametros, basta separar com virgula

let nome = "Erick Gabriel" // Let cria uma variável com escopo limitado
var sobrenome = "Carvalho da Silva" // Var cria uma variavel que continua existindo mesmo ate depois do escopo 
console.log(nome);
console.log('Meu nome é ' + nome);
console.log("Meu nome é", nome);
console.log("Meu nome é " + nome + ", mas também me chamam de \"Pia do Dinho\"");
console.log(`Meu nome é ${nome}`);
console.log("No momento nome é do tipo " + typeof (nome));
nome = 10
console.log("No momento nome é do tipo " + typeof (nome));
nome = false
console.log("No momento nome é do tipo " + typeof (nome));
nome = ""
console.log("No momento nome é do tipo " + typeof (nome));
let idade = 16;
let altura = 1.84;
console.log(`A variavel idade é do tipo ${typeof (idade)} e a variavel altura é do tipo ${typeof (altura)}`);
// let mensagem = prompt("O que voce esta pensando?")
// let interromper = prompt("Estou interrompendo?");
// console.log("Voce está pensando em "+mensagem);
// console.log("A informação capturada é do tipo "+typeof(mensagem));

console.log("Os operadores aritmeticos são os mesmos do JAVA +,-,*,/,%");
console.log("Somando " + (1 + 2));
console.log("Subtraindo " + (3 - 1));
console.log("Multiplicando " + (2 * 3));
console.log("Dividindo " + (10 / 5));

if (idade < 18) {

    console.log("É menor de idade");

} else {
    console.log("É maior de idade");
}

if (altura < 1.5) {
    console.log("Baixinho");

} else if (altura < 1.7) {
    console.log("Mais ou Menos");


} else if (altura < 1.8) {
    console.log("Grande hein Bichoo");

} else {
    console.log("Giganteee");
}

let resposta = (altura < 2 ? "Normal" : "Grande");

switch (idade) {
    case 1:
        console.log("1 aninho");
        break;

    case 2:
        console.log("2 aninhos");
        break;

    default:
        console.log("Chegaaaaa");
        break;
}