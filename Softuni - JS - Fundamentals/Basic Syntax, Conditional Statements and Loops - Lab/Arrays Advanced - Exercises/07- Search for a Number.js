function searchForANumber(arr1, arr2) {
    let numberOfTakenElements = arr2[0];
    let numbersForDeletion = arr2[1];
    let searchedNumber = arr2[2];

    let newArr = arr1.splice(0, numberOfTakenElements);
    
    newArr.splice(0, numbersForDeletion);

    let count = 0;
    for ( let i = 0; i < newArr.length; i++) {
        if (newArr[i] === searchedNumber) {
            count++;
        }
    }
    console.log(`Number ${searchedNumber} occurs ${count} times.`);
}

searchForANumber(
    [5, 2, 3, 4, 1, 6],
    [5, 2, 3]
);