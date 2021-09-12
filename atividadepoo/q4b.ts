export enum DiasSemana {
    Segunda = "Segunda-feira",
    Terca = "Terça-feira",
    Quarta = "Quarta-feira",
    Quinta = "Quinta-feira",
    Sexta = "Sexta-feira",
    Sabado = "Sábado",
    Domingo = "Domingo",
}

namespace DiasSema {
export function isDiaUtil(DiasSema: string) {
if (DiasSema == "Sábado" || DiasSema == "Domingo") {
return false;
} else {
  return true;
}
}

console.log (isDiaUtil("Domingo"));
console.log (isDiaUtil("Segunda-feira"));
console.log (isDiaUtil("Sábado"));
console.log (isDiaUtil("Sexta-feira"));
}