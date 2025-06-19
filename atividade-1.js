// IF/ELSE

// definir um fluxo para somar ou multiplicar dois números usando if/else

const num1 = 2;
const num2 = 4;
const operacao = 'divisão';

if (operacao === 'soma') {
    console.log(num1 + num2);
} else if (operacao === 'multiplicação') {
    console.log(num1 * num2);
} else {
    console.log('Operação não identificada');
}