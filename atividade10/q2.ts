export class Calculad
 {
   private _op1;
   private _op2;

constructor (_op1, _op2)
 {
this._op1 = _op1;
this._op2 = _op2;
 }

adicionar ()

{

return this._op1 + this._op2
    
} 
get_op1(){

    return this._op1
}

get_op2(){

    return this._op2
}



}

function test()
{

const calculadora = new Calculad (5,1);

console.log(calculadora.adicionar());
}
test()