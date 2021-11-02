class Circulo {
    n: number = 0;
    Area(): number{
    return  Math.pow(this.n, 2) * 3.14;
    }
    Perimetro(): number{
    return  2 * this.n * 3.14;
    }
    }
    let c: Circulo;
    c = new Circulo();
    c.n = 7;



console.log("Area do círculo: " + c.Area());
console.log("Perímetro do círculo: " + c.Perimetro());
    