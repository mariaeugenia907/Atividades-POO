class MeuNumero {
    readonly numero: number;
    constructor(numero: number) {
        this.numero = numero;
    }

getInteiro(): number {
    return Math.floor(this.numero);
    }

getDecimal(): number{
    return Number((this.numero - Math.floor(this.numero)). toFixed(3));
    }

}



const numUm = new MeuNumero(6.122);
console.log(numUm.getInteiro());
console.log(numUm.getDecimal());