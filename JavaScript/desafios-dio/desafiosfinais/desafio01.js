//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Para converter os valores inseridos na entrada, utilizamos a função JavaScript parseInt() que converte a parte inicial da string em um número inteiro.
// const posicaoInicial = parseInt(2,15,6);
// const totalPassos = parseInt(3,3,6);

// //TODO: Calcule a posição final do herói:

// const posicaoFinal = posicaoInicial + totalPassos;

// // Imprime a posição final
// console.log("Posicao final do heroi:", posicaoFinal);









// function calcularPosicaoFinal(posicaoInicial, totalPassos) {
//     return parseInt(posicaoInicial, 10) + parseInt(totalPassos, 10);
//   }
  
//   const posicoesIniciais = [2, 15, 10];
//   const totalPassos = [3, 3, 6];
  
//   for (let i = 0; i < posicoesIniciais.length; i++) {
//     const posicaoFinal = calcularPosicaoFinal(posicoesIniciais[i], totalPassos[i]);
//     console.log(`Posicao final do heroi: ${posicaoFinal}`);
//   }
  





  const posicaoInicial = parseInt(gets(2,15,10));
const totalPassos = parseInt(gets(3,3,6));

//TODO: Calcule a posição final do herói:
const posicaoFinal = [] ;

for (let i = 0; i < posicaoInicial.length; i++) {
  posicaoFinal[i] = posicaoInicial[i] + totalPassos[i];
}

// Imprime as posições finais dos heróis
for (let i = 0; i < posicaoFinal.length; i++) {
  print("Posicao final do heroi:", posicaoFinal[i]);
}
