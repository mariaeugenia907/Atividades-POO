var MeuNumero = /** @class */ (function () {
    function MeuNumero(numero) {
        this.numero = numero;
    }
    MeuNumero.prototype.getInteiro = function () {
        return Math.floor(this.numero);
    };
    MeuNumero.prototype.getDecimal = function () {
        return Number((this.numero - Math.floor(this.numero)).toFixed(3));
    };
    return MeuNumero;
}());
var numUm = new MeuNumero(6.122);
console.log(numUm.getInteiro());
console.log(numUm.getDecimal());
