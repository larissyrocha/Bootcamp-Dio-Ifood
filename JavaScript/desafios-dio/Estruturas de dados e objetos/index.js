
  class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque = '';
  
      if (this.tipo === 'Mago') {
        ataque = 'magia';
      } else if (this.tipo === 'Guerreiro') {
        ataque = 'espada';
      } else if (this.tipo === 'Monge') {
        ataque = 'artes marciais';
      } else if (this.tipo === 'Ninja') {
        ataque = 'shuriken';
      } else {
        ataque = '[ERRO]: classe de heroi não encontrado';
      }
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
      
    }
  }
  
  const heroi1 = new Heroi('Lar', 24, 'Mago');
  const heroi2 = new Heroi('Gun', 20, 'Guerreiro');

  heroi1.atacar();
  heroi2.atacar();
  