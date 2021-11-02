class Conta {
    numero: String;
    saldo: number;
    constructor(n: String, saldoI: number) {
        this.numero = n;
        this.saldo = saldoI;
    }
    sacar(valor: number): void {
        this.saldo = this.saldo - valor;
    }
    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }
    Saldo(): number {
        return this.saldo;
    }
    transferir(contaDestino: Conta, valor: number): void {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
}
let c1: Conta = new Conta("1", 100);
let c2: Conta = new Conta("2", 100);
c1 = c2;
c1.sacar(10); 
c1.transferir(c2, 50); 
console.log(c1.saldo);
console.log(c2.saldo); 
