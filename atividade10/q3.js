"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var q2_1 = require("./q2");
var CalculadoraCientifica = /** @class */ (function (_super) {
    __extends(CalculadoraCientifica, _super);
    function CalculadoraCientifica() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalculadoraCientifica.prototype.exponencial = function () {
        return Math.pow(this.get_op1(), this.get_op2());
    };
    return CalculadoraCientifica;
}(q2_1.Calculad));
function test() {
    var calculadoracientifica = new CalculadoraCientifica(5, 2);
    console.log(calculadoracientifica.exponencial());
}
test();
// Foi necessario voltar a classe Calculad aplicar a funçao get, usar o import e export. 
