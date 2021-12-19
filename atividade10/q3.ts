import { Calculad } from "./q2"

class CalculadoraCientifica extends Calculad{

    exponencial() {
        
     return Math.pow(this.get_op1(),this.get_op2()); 

    }

}
function test()
{
    const calculadoracientifica = new CalculadoraCientifica(5, 2)
    console.log(calculadoracientifica.exponencial())
}
test()


// Foi necessario voltar a classe Calculad aplicar a funçao get, usar o import e export. 