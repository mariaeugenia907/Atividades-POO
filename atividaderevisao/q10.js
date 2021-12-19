function removeString(remove) {
    return remove.replace(/[aeiouà-ú]/gi, '');
}
var resultado = removeString("ola, tudo bem?");
console.log(resultado);
