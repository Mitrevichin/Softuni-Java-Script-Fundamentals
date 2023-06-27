function amazingNumbers(num) {

    let numAsString = num.toString();
    let result = 0;
    let isAmazing = false;

    for (let i = 0; i < numAsString.length; i++) {
        let curDigit = Number(numAsString[i]);

        result += curDigit;
    }

    let resultAsString = result.toString();

    for (let j = 0; j < resultAsString; j++) {
        if (resultAsString[j] === '9') {
            isAmazing = true;
        }
    }
    console.log(`${num} Amazing? ${isAmazing ? 'True' : 'False'}`);
    // if (isAmazing) {
    //     console.log(`${num} Amazing? True`);
    // } else {
    //     console.log(`${num} Amazing? False`);
    // }

}

amazingNumbers(999);