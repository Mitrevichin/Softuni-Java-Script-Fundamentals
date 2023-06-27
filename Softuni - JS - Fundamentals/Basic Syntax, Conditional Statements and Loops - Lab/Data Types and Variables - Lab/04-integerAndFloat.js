function integerAndFloat(num1, num2, num3) {
    let sum = num1 + num2 + num3;
    let sumAsString = String(sum);
    let isInteger = true;

    for (let i = 0; i < sumAsString.length; i++) {

        if (sumAsString[i] === '.') {
            isInteger = false;
        } 
    }

    if (isInteger) {
        console.log(`${sum} - Integer`);
    } else {
        console.log(`${sum} - Float`);
    }
}

integerAndFloat(9, 100, 1.1);