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
var Banc = /** @class */ (function () {
    function Banc() {
    }
    Banc.prototype.renderJuros = function (conta) {
        if (conta instanceof Poupanca) {
            return conta.renderJuros();
        }
        return 0;
    };
    return Banc;
}());
var ContaCorrente = /** @class */ (function () {
    function ContaCorrente() {
    }
    return ContaCorrente;
}());
var Poupanca = /** @class */ (function (_super) {
    __extends(Poupanca, _super);
    function Poupanca() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Poupanca.prototype.renderJuros = function () {
        return 10;
    };
    return Poupanca;
}(ContaCorrente));
function test() {
    var banc = new Banc();
    var cc = new ContaCorrente();
    var pp = new Poupanca();
    console.log(banc.renderJuros(cc));
    console.log(banc.renderJuros(pp));
}
test();
