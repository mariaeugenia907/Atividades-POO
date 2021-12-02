var Triangulo = /** @class */ (function () {
    function Triangulo(ladoa, ladob, ladoc) {
        this.a = ladoa;
        this.b = ladob;
        this.c = ladoc;
    }
    Triangulo.prototype.retangulo = function () {
        if (Math.abs(this.b - this.c) < this.a && this.a < this.b + this.c) {
            return true;
        }
        else {
            return false;
        }
    };
    Triangulo.prototype.Isoceles = function () {
        if (this.retangulo() == false)
            return false;
        if ((this.a == this.b || this.a == this.c || this.c == this.b)
            && !(this.a == this.b && this.a == this.c))
            return true;
        else {
            return false;
        }
    };
    Triangulo.prototype.Equilatero = function () {
        if (this.retangulo() == false)
            return false;
        if (this.a == this.b && this.a == this.c)
            return true;
        else {
            return false;
        }
    };
    Triangulo.prototype.Escaleno = function () {
        if (this.retangulo() == false)
            return false;
        if (this.a != this.b && this.a != this.c && this.b != this.c)
            return true;
        else {
            return false;
        }
    };
    return Triangulo;
}());
var trg = new Triangulo(5, 4, 3);
console.log(trg.Escaleno());
