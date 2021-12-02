class Conta {
    numero: string;
    saldo: number;
    constructor(numero: string, saldoInicial: number) {
        this.numero = numero;
        this.saldo = saldoInicial;
    }
    sacar(valor: number): void {
        if (valor <= this.saldo)
            this.saldo = this.saldo - valor;
        else { console.log("Erro por saldo insuficiente.") }
    }
    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }
    consultarSaldo(): number {
        return this.saldo;
    }
    transferir(contaDestino: Conta, valor: number): void {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
}

class Banco {
contas: Conta[] = [];

inserir(conta: Conta): void {
    if (this.consultaIndice(conta.numero) == -1)
    this.contas.push(conta);
    }

consultar(numero: String): Conta {
    let contaConsultada: Conta;
    for (let conta of this.contas) {
        if (conta.numero == numero) {
            contaConsultada = conta
            }
    return contaConsultada;
        }
    }

    consultaIndice(numero: string): number {
        let indice: number = -1;
        for (let i: number = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                indice = i;
                break;
            }
        }
        return indice;
    }

alterar(conta: Conta): void {
       let indice: number = this.consultaIndice(conta.numero);
        if (indice != -1) {
            this.contas[indice] = conta;
        }

    }

excluir(numero: string): void {
        let indice: number = this.consultaIndice(numero);

        for (let i: number = indice; i < this.contas.length; i++) {
            this.contas[i] = this.contas[i + 1];
        }
        this.contas.pop();
    }

depositar(numero: string, valor: number): void {
        if (this.consultar(numero) != null)
            this.consultar(numero).depositar(valor);
    }

sacar(numero: string, valor: number): void {
        if (this.consultar(numero) != null)
            this.consultar(numero).sacar(valor);
    }

transferir(numDeb: string, numCred: string, valor: number): void { 
        if (this.consultaIndice(numDeb) != -1 && this.consultaIndice(numCred) != -1) {
            var cDeb = this.contas[this.consultaIndice(numDeb)];
            var cCred = this.contas[this.consultaIndice(numCred)];
            cDeb.transferir(cCred, valor);
        }
    }

quantContas(): number {
    return this.contas.length;
    }

valorTodas(): number {
    var soma = 0;
        for (let conta of this.contas) {
            soma += conta.saldo;
        }
        return soma;
    }

mediaTodas(): number {
    return this.valorTodas() / this.quantContas();
    }

exibirContas(): void {
    console.log(this.contas)
    }
}
let banco: Banco = new Banco;
let c1: Conta = new Conta("11", 2500);
banco.inserir(c1);
let c2: Conta = new Conta("22", 5100)
banco.inserir(c2);

console.log(banco.mediaTodas());
