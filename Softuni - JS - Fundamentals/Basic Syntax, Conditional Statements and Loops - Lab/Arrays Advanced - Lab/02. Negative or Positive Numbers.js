function negativePositive(input) {
    let result = [];

    for (let element of input) {
        element = Number(element);

        if (element < 0) {
            result.unshift(element);
        } else {
            result.push(element);
        }
    }

    // for (let element of result) {
    //     console.log(element);
    // }

    // Or we can use just join() like this:

    console.log(result.join('\n'));
}

negativePositive(['7', '-2', '8', '9'] );