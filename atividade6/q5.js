var Jogador = /** @class */ (function () {
    function Jogador(forca, nivel, pontosatuais) {
        this.forca = forca;
        this.nivel = nivel;
        this.pontosatuais = pontosatuais;
    }
    Jogador.prototype.nivelAtaque = function () {
        var ataque = this.forca * this.nivel;
        return ataque;
    };
    Jogador.prototype.atacar = function (atacado) {
        atacado.pontosatuais -= this.nivelAtaque();
    };
    Jogador.prototype.status = function () {
        console.log("Forca: ", this.forca, "Nivel: ", this.nivel, "Pontos: ", this.pontosatuais);
    };
    return Jogador;
}());
var j1 = new Jogador(80, 20, 800);
var j2 = new Jogador(55, 15, 600);
j1.atacar(j2);
j2.atacar(j1);
console.log("Jogador1:  ");
j1.status();
console.log("Jogador2:  ");
j2.status();
