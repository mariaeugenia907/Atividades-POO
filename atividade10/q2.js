"use strict";
exports.__esModule = true;
exports.Calculad = void 0;
var Calculad = /** @class */ (function () {
    function Calculad(_op1, _op2) {
        this._op1 = _op1;
        this._op2 = _op2;
    }
    Calculad.prototype.adicionar = function () {
        return this._op1 + this._op2;
    };
    Calculad.prototype.get_op1 = function () {
        return this._op1;
    };
    Calculad.prototype.get_op2 = function () {
        return this._op2;
    };
    return Calculad;
}());
exports.Calculad = Calculad;
function test() {
    var calculadora = new Calculad(5, 1);
    console.log(calculadora.adicionar());
}
test();
