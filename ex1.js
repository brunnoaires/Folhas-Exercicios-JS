console.log("Questao 2");
//2) Crie variáveis para guardar o seu nome e o seu ano de nascimento. Solte no console a seguinte mensagem: "Olá, eu me chamo _____________, tenho _____ anos e estou estudando Javascript".

var nome = "Brunno" ; 
var idade = 20;

console.log("Olá, eu me chamo " + nome + ", tenho" + idade + " anos e estou estudando Javascript"); 


console.log("Questao 3");

// 3) Crie variáveis para guardar o nome e o número de matrícula de um aluno. Crie também duas variáveis para guardar notas da prova 1 e da prova 2. Calcule a média e solte no console: "O aluno ____________, matrícula _____________, obteve a média final ____".
var nome = "brunno";
var matricula = "2020616"
var prova1 = 8;
var prova2 = 6; 

var media = (prova1 + prova2) / 2;

console.log("O aluno" ,nome+ " matrícula:" ,matricula+ ", obteve a média final " +media);


console.log("Questao 4");
//4) Crie uma variável para guardar um número de telefone celular e teste para saber se o número tem 9 dígitos. Se tiver, solte no console: "Resultado do teste: true". Caso contrário, solte: "Resultado do teste: false".

var nmr_tel = "1234567892";

if (nmr_tel.length ==  9) {
  console.log('resultado do teste1: true');
}else if (nmr_tel.length > 9 || nmr_tel.length < 9 ) {
  console.log('resultado do teste2: false' );
}

console.log("Questao 5");
//5) Solte no console o resultado da operação 326.

var potencia = Math.pow(32,6);

console.log(potencia);


console.log("Questao 6");

//6 ) Considere os seguintes nomes de variáveis e diga quais deles são ilegais e porquê.

var NOME;

var $num1;

var typeof; //existe uma funcao chamada typeof entao nao é recomendavel

var nome-aluno; //nao pode ter - nas variaveis 

var tentativa_2;

var 2a_tentativa; //nao e permitido numeros no inicio da variavel

var nome completo; //deve-se utilizar _ para separar o nome das variaveis e nao espaco

console.log("Questao 7");

//7) Considere o bloco de código abaixo e responda os valores que aparecerão no console.

var quantidade = "25";
var numero = 6;
var pressao;
var temperatura = 40;
temperatura = null;

console.log(quantidade += quantidade); // 2525
console.log( (7+5) / numero + 2 );// 2
console.log(pressao); //undf
console.log(temperatura); //null
console.log(typeof pressao); //undf
console.log(typeof temperatura); //object

console.log("Questao 8");

//8) Indique o que será retornado no console nas comparações abaixo.

    var idade = 65;

    console.log(idade != 65); //false
    console.log(idade >= 65);  //true
    console.log("65" == idade); //true
    console.log(65 !== idade); //false
    console.log(typeof (idade > 60)); // boolean
    console.log(typeof (idade > 70)); //boolean
 








