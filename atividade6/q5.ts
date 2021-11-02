class Jogador {
    forca: number;
    nivel: number;
    pontosatuais: number;

    constructor(forca: number, nivel: number, pontosatuais: number) {
    this.forca = forca;
    this.nivel = nivel;
    this.pontosatuais = pontosatuais;
    }


    nivelAtaque() {
    let ataque = this.forca * this.nivel;
    return ataque;
    }


    atacar(atacado: Jogador) {
    atacado.pontosatuais -= this.nivelAtaque();
    }


    status() {
    console.log("Forca: ", this.forca, "Nivel: ", this.nivel, "Pontos: ", this.pontosatuais);
    }
}


let j1: Jogador = new Jogador(80, 20, 800);
let j2: Jogador = new Jogador(55, 15, 600);


j1.atacar(j2);
j2.atacar(j1);


console.log("Jogador1:  ")
j1.status();
console.log("Jogador2:  ")
j2.status();
