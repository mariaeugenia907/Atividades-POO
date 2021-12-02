class Triangulo {
    a: number; b: number; c: number;


constructor(ladoa: number, ladob: number, ladoc: number) {
    this.a = ladoa;
    this.b = ladob;
    this.c = ladoc;


    }


retangulo(): boolean {
        if (Math.abs(this.b - this.c) < this.a && this.a < this.b + this.c) {
            return true;
        } else {
            return false;
        }

    }


Isoceles(): boolean {
        if (this.retangulo() == false)
            return false;
        if ( (this.a == this.b || this.a == this.c || this.c == this.b) 
            && !(this.a == this.b && this.a == this.c))
            return true;
        else { return false }
    }


Equilatero():boolean{
        if (this.retangulo() == false)
            return false;
        if (this.a == this.b && this.a == this.c)
        return true;
        else { return false}


    }


Escaleno(): boolean{
        if (this.retangulo() == false)
        return false;
        if (this.a != this.b && this.a != this.c && this.b != this.c)
        return true;
        else { return false}
    }
}

let trg: Triangulo = new Triangulo(5, 4, 3);
console.log(trg.Escaleno());
