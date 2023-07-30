function addAndSubtract(a, b, c) {

    let sum = function(firstNum, secondNum) {
        return firstNum + secondNum;
    }
    let firstResult = sum(a, b)

    let subtract = (addResult, c) => addResult - c;
    let finalResult = subtract(firstResult, c);

    console.log(finalResult);
}

addAndSubtract(23,6,10);
addAndSubtract(1,
    17,
    30
    );
