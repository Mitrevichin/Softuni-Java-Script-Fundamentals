function getTheSmallestNumber(num1, num2, num3) {

    // let smallestNum = function(num1, num2, num3) {
    //     let smallestNumber = 0;

    //     if (num1 <= num2 && num1 < num3) {
    //         smallestNumber = num1;
    //     } else if (num2 <= num1 && num2 <= num3) {
    //         smallestNumber = num2;
    //     } else {
    //         smallestNumber = num3;
    //     }
    //     return smallestNumber;
    // }
    let smallestNum = (num1, num2, num3) => Math.min(num1, num2, num3);


    
    console.log(smallestNum(num1, num2, num3));
}

getTheSmallestNumber(2, 5, 3);