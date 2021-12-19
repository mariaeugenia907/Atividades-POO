class Calculadora {
private op1;
private op2;

constructor(op1, op2) 
{
        this.op1 = op1;
        this.op2 = op2;
    }
    soma()
    {
    return this.op1+this.op2
    }
    multiplica()
    {
    return  this.op1*this.op2
    }
}


function test()
{

const calculadora = new Calculadora (2,1);

console.log(calculadora.soma());
console.log(calculadora.multiplica());
}
test()


