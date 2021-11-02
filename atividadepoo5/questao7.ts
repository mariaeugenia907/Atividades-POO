class Retangulo {
n1: number = 0;
n2: number = 0;

calcularP(): number {
return (this.n1*2) + (this.n2*2);

}
}
let valor: Retangulo;
valor = new Retangulo();
valor.n1 = 50;
valor.n2 = 20;

console.log("Perímetro do retângulo: " + valor.calcularP());
