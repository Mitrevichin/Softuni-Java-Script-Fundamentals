function palindromeIntegers(inputArr) {
    let arrOfNums = inputArr; // This is not mandatory.

    function isPalindrome(number) {
        let startNum = number;
        let reversedNum = Number(number.toString().split('').reverse().join(''));

        if (startNum === reversedNum) {
            return true;
        } else {
            return false;
        }
    }

    for (let i = 0; i < arrOfNums.length; i++) {
        let currNum = arrOfNums[i];
        console.log(isPalindrome(currNum));
    }
}

palindromeIntegers([123, 323, 421, 121]);