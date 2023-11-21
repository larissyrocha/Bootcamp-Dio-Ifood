// Crie um programa que verifica se um número é positivo ou negativo e exibe uma mensagem apropriada.

// var number = -1
//  if (number > 0) {
//     console.log(`seu numero é ${number} ele é positivo`)
//  } else {
//     console.log(`seu numero é ${number} seu numero é negativo`)
//  }




 // Escreva um programa que verifica se um número é par ou ímpar.

// var imparpar = 
// if (imparpar % 2 === 0) {  Isso calcula o "resto da divisão" de numero por 2. O operador % retorna o valor que sobra após a divisão. 
//     console.log(`voce numero é par`) 
// } else {
//     console.log(`seu nuemro é impar`)
// }



 // Crie um programa que determina se uma pessoa pode votar com base na idade.

//  var idade = 66

//  if (idade < 16) {
//     console.log(`voce tem ${idade} não vota`)
//  } else if (idade < 18 || idade >= 65) {
//     console.log(`voce tem ${idade} voto opcional`)
//  } else {
//     console.log(`voce tem ${idade} voto obrigatorio`)
//  }




//  // Faça um programa que verifica se uma senha digitada pelo usuário é a senha correta.

// var senha = 'usa123' //  "" ou ' para ser uma senha em formato de texto. 
// if (senha === 123) {
//     console.log(`senha correta`)
// } else {
//     console.log(`senha incorreta`)
// }



 // Escreva um programa que determina se um aluno foi aprovado em um exame com base em sua nota.

//  var nota = 5

//  if (nota < 7) {
//     console.log(`sua nota é ${nota} voce está REPROVADO`)
//  } else {
//     console.log(`sua nota é ${nota} voce está APROVADO`)
//  }




// Crie um programa que verifica se um número é positivo, negativo ou zero.

// let number = 

// if (number < 0) {
//     console.log(`seu numero é ${number} é negativo`)
// } else if (number >= 1) {
//     console.log(`seu numero é ${number} positivo`)
// } else {
//     console.log(`seu numero ${number} é zero`)
// }


// Escreva um programa que determina se um aluno foi aprovado em um exame com base em sua nota, mas agora considere também a possibilidade de recuperação se a nota estiver entre 40 e 59.

// let nota = 40

// if (nota >= 40 && nota < 59) {
//     console.log(`sua nota é ${nota} RECUPERAÇÃO`)
// } else if (nota >= 60) {
//     console.log(`sua nota é ${nota} APROVADO`)
// } else {
//     console.log(`sua nota é ${nota} REPROVADO`)
// }


//Crie um programa que verifica se um número é múltiplo de 3.

// let multi = 3
// if (multi % 3) {
//     console.log("multiplico de 3")
// } else {
//     console.log("não é multiplico")
// }


//Escreva um programa que determine se um ano é bissexto. Um ano bissexto é aquele que é divisível por 4, mas não é divisível por 100, a menos que seja divisível por 400. 


let ano = 1800

if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0)  { // Esta parte verifica se o ano é divisível por 4, o que é um dos requisitos para ser bissexto. O operador % calcula o resto da divisão de ano por 4. Se o resto for igual a zero, isso significa que o ano é divisível por 4.
    console.log(`o ano é ${ano} é bissexto`)
} else {
    console.log(`o ano ${ano} não é bissexto`)
}



