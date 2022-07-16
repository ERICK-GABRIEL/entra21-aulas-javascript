
procedimento(); //Essa função está sendo chamada e não precisa de argumentos
procedimento(); //Essa função está sendo chamada e não precisa de argumentos
bemVindo("Erick");
bemVindo(false);
bemVindo(30);
bemVindo(bemVindo);
login("Erick", 1234);
maiorDeIdade(15);
let resultado = maiorDeIdade(16);
console.log(resultado);

console.log(maiorDeIdade(18));

let concatenado = maiorDeIdade(10) + maiorDeIdade(20);


function procedimento() {

    console.log("Esse tipo de funcção sempre executa da mesma forma, porque não tem parâmetros para deixar dinâmico");

    console.warn("Essa função também não retorna nada")
}

procedimento(); //Chamada

function bemVindo(nome) {
    console.log(typeof (nome));
    console.warn("Bem Vindo " + nome);

}
function login(username, password) {

    console.error("O usuário " + username + " cuja senha é " + password + " está inadinplente, não pode entrar");
}

function maiorDeIdade(idade) {

    if (idade < 18) {
        return "Menor de idade"

    } else {
        return "Maior de idade"
    }

}

console.log(caucularMedia(8, 9, 10));

console.log(verifiarSituacao(8));

console.log(
    verifiarSituacao(
        caucularMedia(8, 9, 10)));

function caucularMedia(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3
}

function verifiarSituacao(media) {
    return media >= 7 ? "Aprovado" : "Reprovado"
}

let number1 = 10;
let number2 = 5;


console.log(number1+" + "+number2+" = "+somar(number1,number2));
console.log(number1+" - "+number2+" = "+subtrair(number1,number2));
console.log(number1+" ÷ "+number2+" = "+dividir(number1,number2));
console.log(number1+" x "+number2+" = "+multiplicar(number1,number2));


function somar(){
    
    let resultado = (Number(number1) + Number(number2));
    return resultado

}
function subtrair(){
    
    let resultado = (Number(number1) - Number(number2));
    return resultado

}
function dividir(){
    
    let resultado = (Number(number1) / Number(number2));
    return resultado

}
function multiplicar(){
    
    let resultado = (Number(number1) * Number(number2));
    return resultado

}
