let vetor: number[] = [50, 35, 10, 22, 61, 94, 40, 77, 12, 80]

console.log("Ordem crescente dos numeros eh: ", bubbleSort_crescente(vetor))

console.log("Ordem decrescente dos numeros eh: ", bubbleSort_decrescente(vetor))

function bubbleSort_crescente(array: number[]): number[] {

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
        if (array[j] > array[j + 1]) {
            let swap = array[j]; 
            array[j] = array[j + 1];
            array[j + 1] = swap;
            }
        }
    }
    return array;
}

function bubbleSort_decrescente(array: number[]): number[] {

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
           if (array[j] < array[j + 1]) {
              let swap = array[j]; 
              array[j] = array[j + 1];
              array[j + 1] = swap;
            }
        }
    }
    return array;
}
