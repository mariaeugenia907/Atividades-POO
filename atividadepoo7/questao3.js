var vetor = [5, 3, 10, 2, 6, 9, 4, 7, 1, 8];
console.log("Ordem crescente dos numeros eh: ", bubbleSort_crescente(vetor));
console.log("Ordem decrescente dos numeros eh: ", bubbleSort_decrescente(vetor));
function bubbleSort_crescente(array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                var swap = array[j];
                array[j] = array[j + 1];
                array[j + 1] = swap;
            }
        }
    }
    return array;
}
function bubbleSort_decrescente(array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length - 1; j++) {
            if (array[j] < array[j + 1]) {
                var swap = array[j];
                array[j] = array[j + 1];
                array[j + 1] = swap;
            }
        }
    }
    return array;
}
