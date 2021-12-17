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
conta: Conta[] = [];

inserir(conta: Conta): void {
    if (this.consultaIndice(conta.numero) == -1)
    this.conta.push(conta);
    }

consultar(numero: String): Conta {
    let Consultada: Conta;
    for (let conta of this.conta) {
        if (conta.numero == numero) {
            Consultada = conta
            }
    return Consultada;
        }
    }

    consultaIndice(numero: string): number {
        let indice: number = -1;
        for (let i: number = 0; i < this.conta.length; i++) {
            if (this.conta[i].numero == numero) {
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

        for ( ) {
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
        if ( ) {
            var cDeb = this.conta[this.consultaIndice(numDeb)];
            var cCred = this.conta[this.consultaIndice(numCred)];
            cDeb.transferir(cCred, valor);
        }
    }

quantContas(): number {
    return this.conta.length;
    }

valorTodas(): number {
    var soma = 0;
        for ( ) {
            soma += conta.saldo;
        }
        return soma;
    }

mediaTodas(): number {
    return 
    }

exibirContas(): void {
    console.log(this.conta)
    }
}
Conta = new Conta;
let c1: Conta = new Conta("11", 2500);
banco.inserir(c1);
let c2: Conta = new Conta("22", 5100)
banco.inserir(c2);

