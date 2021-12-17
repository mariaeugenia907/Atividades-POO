class Conta {
    numero: String
    saldo: number

    constructor(numero, saldo){
        this.numero = numero;
        this.saldo = saldo;
    }

    sacar(valor: number): void {
            if(this.saldo >= valor){
            this.saldo -= valor;
            return valor;           
        }
        return 0;
    } 

    depositar(valor: number): void{
        if(valor <= 0){
            return;         
        }
        this.saldo += valor;
    }

     transferir(newConta: Conta, valor: number): void {
        const valorSacado = this.sacar(valor);
        Conta.depositar(valorSacado);   

    } 

let c01: Conta = new Conta("1", 100);
let c02: Conta = new Conta("2", 100);
    
    c02.transferir(c01, 150);
    c01.sacar(125);
    
    console.log("conta 1: ", c01.saldo);
    console.log("conta 2: ", c02.saldo);