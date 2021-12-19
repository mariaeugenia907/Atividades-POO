var Calculadora = /** @class */ (function () {
    function Calculadora(n1, n2) {
        this.op1 = n1;
        this.op2 = n2;
    }
    Calculadora.prototype.soma = function () {
        this.soma = op1 + op2;
    };
    Calculadora.prototype.multiplica = function () {
        this.multiplica = op1 * op2;
    };
    return Calculadora;
}());
console.log(soma());
console.log(mulpiplica());
