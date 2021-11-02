var Retangulo = /** @class */ (function () {
    function Retangulo() {
        this.n1 = 0;
        this.n2 = 0;
    }
    Retangulo.prototype.calcularP = function () {
        return (this.n1 * 2) + (this.n2 * 2);
    };
    return Retangulo;
}());
var valor;
valor = new Retangulo();
valor.n1 = 50;
valor.n2 = 20;
console.log("Perímetro do retângulo: " + valor.calcularP());
