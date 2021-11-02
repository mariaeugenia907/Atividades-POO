var Conta = /** @class */ (function () {
    function Conta(n, saldoI) {
        this.numero = n;
        this.saldo = saldoI;
    }
    Conta.prototype.sacar = function (valor) {
        this.saldo = this.saldo - valor;
    };
    Conta.prototype.depositar = function (valor) {
        this.saldo = this.saldo + valor;
    };
    Conta.prototype.Saldo = function () {
        return this.saldo;
    };
    Conta.prototype.transferir = function (contaDestino, valor) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    };
    return Conta;
}());
var c1 = new Conta("1", 100);
var c2 = new Conta("2", 100);
c1 = c2;
c1.sacar(10);
c1.transferir(c2, 50);
console.log(c1.saldo);
console.log(c2.saldo);
