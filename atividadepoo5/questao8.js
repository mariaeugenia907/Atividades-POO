var Circulo = /** @class */ (function () {
    function Circulo() {
        this.n = 0;
    }
    Circulo.prototype.Area = function () {
        return Math.pow(this.n, 2) * 3.14;
    };
    Circulo.prototype.Perimetro = function () {
        return 2 * this.n * 3.14;
    };
    return Circulo;
}());
var c;
c = new Circulo();
c.n = 7;
console.log("Area do círculo: " + c.Area());
console.log("Perímetro do círculo: " + c.Perimetro());
