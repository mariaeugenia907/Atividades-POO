class Hora {
    private hora: number
    private minuto: number
    private segundo: number

constructor(hora, minuto, segundo) {
        this.hora = hora;
        this.minuto = minuto;
        this.segundo = segundo;
    }

    getHora(): number
    {
        return this.hora;
    }
    getmin(): number{
        return this.minuto;
    }
    getseg(): number{
        return this.segundo;
    }
    getHH(): string{
        return this.hora + ":" + this.minuto + ":" + this.segundo
    }
}

function test()
{

const horas = new Hora(12, 30, 25);

console.log(horas.getHora());
console.log(horas.getmin());
console.log(horas.getseg());
console.log(horas.getHH());
}
test()
