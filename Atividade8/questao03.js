var Conta = /** @class */ (function () {
    function Conta(numero, saldoInicial) {
        this.numero = numero;
        this.saldo = saldoInicial;
    }
    Conta.prototype.sacar = function (valor) {
        if (valor <= this.saldo)
            this.saldo = this.saldo - valor;
        else {
            console.log("Erro por saldo insuficiente.");
        }
    };
    Conta.prototype.depositar = function (valor) {
        this.saldo = this.saldo + valor;
    };
    Conta.prototype.consultarSaldo = function () {
        return this.saldo;
    };
    Conta.prototype.transferir = function (contaDestino, valor) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    };
    return Conta;
}());
var Banco = /** @class */ (function () {
    function Banco() {
        this.contas = [];
    }
    Banco.prototype.inserir = function (conta) {
        if (this.consultaIndice(conta.numero) == -1)
            this.contas.push(conta);
    };
    Banco.prototype.consultar = function (numero) {
        var contaConsultada;
        for (var _i = 0, _a = this.contas; _i < _a.length; _i++) {
            var conta = _a[_i];
            if (conta.numero == numero) {
                contaConsultada = conta;
            }
            return contaConsultada;
        }
    };
    Banco.prototype.consultaIndice = function (numero) {
        var indice = -1;
        for (var i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                indice = i;
                break;
            }
        }
        return indice;
    };
    Banco.prototype.alterar = function (conta) {
        var indice = this.consultaIndice(conta.numero);
        if (indice != -1) {
            this.contas[indice] = conta;
        }
    };
    Banco.prototype.excluir = function (numero) {
        var indice = this.consultaIndice(numero);
        for (var i = indice; i < this.contas.length; i++) {
            this.contas[i] = this.contas[i + 1];
        }
        this.contas.pop();
    };
    Banco.prototype.depositar = function (numero, valor) {
        if (this.consultar(numero) != null)
            this.consultar(numero).depositar(valor);
    };
    Banco.prototype.sacar = function (numero, valor) {
        if (this.consultar(numero) != null)
            this.consultar(numero).sacar(valor);
    };
    Banco.prototype.transferir = function (numDeb, numCred, valor) {
        if (this.consultaIndice(numDeb) != -1 && this.consultaIndice(numCred) != -1) {
            var cDeb = this.contas[this.consultaIndice(numDeb)];
            var cCred = this.contas[this.consultaIndice(numCred)];
            cDeb.transferir(cCred, valor);
        }
    };
    Banco.prototype.quantContas = function () {
        return this.contas.length;
    };
    Banco.prototype.valorTodas = function () {
        var soma = 0;
        for (var _i = 0, _a = this.contas; _i < _a.length; _i++) {
            var conta = _a[_i];
            soma += conta.saldo;
        }
        return soma;
    };
    Banco.prototype.mediaTodas = function () {
        return this.valorTodas() / this.quantContas();
    };
    Banco.prototype.exibirContas = function () {
        console.log(this.contas);
    };
    return Banco;
}());
var banco = new Banco;
var c1 = new Conta("11", 2500);
banco.inserir(c1);
var c2 = new Conta("22", 5100);
banco.inserir(c2);
console.log(banco.mediaTodas());
