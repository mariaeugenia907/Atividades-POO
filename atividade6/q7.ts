class Produto {
    chave: number;
    descricao: String;
    valor: number;
    quantidade: number = 0;
    quantidademinima: number;

constructor(chave: number, descricao: string, valor: number, quantidademinima: number) {
    this.chave = chave;
    this.descricao = descricao;
    this.valor = valor;
    this.quantidademinima = quantidademinima;
    }
    repor(add: number): boolean {
        if (this.quantidade+add < this.quantidademinima) {
            console.log("Quantidade abaixo do mínimo, não é possivel adicionar.")
            return false;
        } else {
            this.quantidade+=add;
        }
    }
    darbaixar(remover: number): boolean {
        if (this.quantidade-remover < this.quantidademinima) {
            console.log("Quantidade abaixo do mínimo, não é possivel adicionar.")
            return false;
        } else {
            this.quantidade-=remover ;
        }
    }
    reajuste(tx: number) {
        this.valor = this.valor * (tx/100) ;
    }

    toString(): String {
        return "Código: " + this.chave + "Descrição: " + this.descricao + "Valor da unidade: " + this.valor
        + "Quantidade: " + this.quantidade + "Quantidade mínima: " + this.quantidademinima;
    }
    
    equals(produto: Produto): boolean {
        if (produto.chave == this.chave) {
            return true;
        } else { return false }
    }
}
let lapis: Produto = new Produto(1, "lapis", 15, 8);
let caneta: Produto = new Produto(2, "caneta", 20, 10);
lapis.repor(15);
lapis.darbaixar(8);
lapis.reajuste(50);
console.log("lapis e caneta possuem codigos iguais?: ", lapis.equals(caneta));
console.log(lapis.toString());
