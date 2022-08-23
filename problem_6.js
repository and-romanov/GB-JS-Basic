let n = 6;
let k = 5;

function sum(a, b) {
    return a + b;
};

function differrence(a, b) {
    return a - b;
};

function multiplication(a, b) {
    return a * b;
};

function division(a, b) {
    return a / b;
};

function mathOperation(arg1, arg2, operation) {
    return operation(arg1, arg2);
};

switch (n, k){
    case n => 0 && k > 0:
        console.log(mathOperation(n, k, sum));
    break;
    case n < 0 && k < 0:
        console.log(mathOperation(n, k, multiplication));
    break;
    case n > 0 && k < 0:
        console.log(mathOperation(n, k, division));
    break;
    case n < 0 && k > 0:
        console.log(mathOperation(n, k, differrence));
    break;
    default:
    console.log('Что-то пошло не так');
    break;
};