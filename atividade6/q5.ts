class Jogador {
    forca: string;
    nivel: number;
    pontos: number;

    constructor(forca: string, nivel: number, pontos: number) {
    this.forca = forca;
    this.nivel = nivel;
    this.pontos = pontos;
    }

    Ataque() {
    let ataque = this.forca * this.nivel;
    return ataque;
    }

    atacar(atacado: Jogador) {
    atacado.pontos = this.Ataque();
    }

    Personagem() {
    console.log("Forca: ", this.forca, "Nivel: ", this.nivel, "Pontos: ", this.pontos);
    }
}

let j1: Jogador = new Jogador(80, 20, 800);
let j2: Jogador = new Jogador(55, 15, 600);

j1.atacar(j2);
j2.atacar(j1);

console.log("Jogador1:  ")
j1.Personagem();
console.log("Jogador2:  ")
j2.Personagem();
