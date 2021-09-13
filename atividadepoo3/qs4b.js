"use strict";
exports.__esModule = true;
exports.DiasSemana = void 0;
var DiasSemana;
(function (DiasSemana) {
    DiasSemana["Segunda"] = "Segunda-feira";
    DiasSemana["Terca"] = "Ter\u00E7a-feira";
    DiasSemana["Quarta"] = "Quarta-feira";
    DiasSemana["Quinta"] = "Quinta-feira";
    DiasSemana["Sexta"] = "Sexta-feira";
    DiasSemana["Sabado"] = "S\u00E1bado";
    DiasSemana["Domingo"] = "Domingo";
})(DiasSemana = exports.DiasSemana || (exports.DiasSemana = {}));
var DiasSema;
(function (DiasSema_1) {
    function isDiaUtil(DiasSema) {
        if (DiasSema == "Sábado" || DiasSema == "Domingo") {
            return false;
        }
        else {
            return true;
        }
    }
    DiasSema_1.isDiaUtil = isDiaUtil;
    console.log(isDiaUtil("Domingo"));
    console.log(isDiaUtil("Segunda-feira"));
    console.log(isDiaUtil("Sábado"));
    console.log(isDiaUtil("Sexta-feira"));
})(DiasSema || (DiasSema = {}));
