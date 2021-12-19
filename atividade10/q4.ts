class Banc
{
    renderJuros(conta): number
    {
        if (conta instanceof Poupanca){
        return (conta as Poupanca).renderJuros()
            
        }
        return 0
    }
}

class ContaCorrente{
    numero: number
}

class Poupanca extends ContaCorrente{
    renderJuros(): number
    {
        return 10
    }
}

function test()
{
    const banc = new Banc()
    const cc = new ContaCorrente()
    const pp = new Poupanca()

    console.log(banc.renderJuros(cc))
    console.log(banc.renderJuros(pp))

}
test()


