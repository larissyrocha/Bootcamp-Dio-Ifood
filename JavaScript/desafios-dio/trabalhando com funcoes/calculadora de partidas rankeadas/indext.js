let saldoDeVitorias = 100
let nível = ""
let saldoDeDerrotas = 1



function calcularvitoriasederrotas(vitorias, derrotas) {
    return vitorias - derrotas
} 
if (calcularvitoriasederrotas(saldoDeVitorias, saldoDeDerrotas) <= 10) {
   nível = 'ferro'
} else if (calcularvitoriasederrotas(saldoDeVitorias, saldoDeDerrotas) >= 11 && calcularvitoriasederrotas(saldoDeVitorias, saldoDeDerrotas) <= 20) {
    nível = 'Bronze';
} else if (calcularvitoriasederrotas(saldoDeVitorias, saldoDeDerrotas) >= 21 && calcularvitoriasederrotas(saldoDeVitorias, saldoDeDerrotas) <= 50) {
    nível = 'Prata';
} else if (calcularvitoriasederrotas(saldoDeVitorias, saldoDeDerrotas) >= 51 && calcularvitoriasederrotas(saldoDeVitorias, saldoDeDerrotas) <= 80) {
    nível = 'Diamante';
} else if (calcularvitoriasederrotas(saldoDeVitorias, saldoDeDerrotas) >= 81 && calcularvitoriasederrotas(saldoDeVitorias, saldoDeDerrotas) <= 90) {
    nível = 'Lendário';
} else if (calcularvitoriasederrotas(saldoDeVitorias, saldoDeDerrotas) >= 91) {
    nível = 'Imortal'
}

console.log(`O Herói de saldo ${saldoDeVitorias} está no nivel ${nível}`)