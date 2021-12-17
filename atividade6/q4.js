var Conta = /** @class */ (function () {
    function Conta(numero, saldo) {
        this.c2 = new Conta("22", 100);
        this.c2 = c2;
        this.numero = numero;
        this.saldo = saldo;
    }
    Conta.prototype.sacar = function (valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            return valor;
        }
        return 0;
    };
    Conta.prototype.depositar = function (valor) {
        if (valor <= 0) {
            return;
        }
        this. += valor;
    };
    Conta.prototype.transferir = function (Destino, valor) {
        var taxa = 1;
        var valorSacado = this.sacar(valor, taxa);
        conta.depositar(valorSacado);
    };
    return Conta;
}());
