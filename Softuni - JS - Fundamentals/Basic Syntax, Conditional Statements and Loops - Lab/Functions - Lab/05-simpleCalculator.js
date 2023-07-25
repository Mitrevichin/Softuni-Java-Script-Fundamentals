function calculator(a, b, operator) {
    let result = 0;

    switch (operator) {
        case 'multiply':
            result = (a, b) => a * b;
            break;
        case 'divide':
            result = (a, b) => a / b;
            break;
        case 'add':
            result = (a, b) => a + b;
            break;
        case 'subtract':
            result = (a, b) => a - b;
            break;
    }

    console.log(result(a, b));
}

calculator(
    5,
    5,
    'multiply');
calculator(
    40,
    8,
    'divide');
calculator(
    12,
    19,
    'add');