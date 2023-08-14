function processOddNumbers(arr) {
    // let filtered = arr.filter((x, i) => i % 2 === 1);
    // let doubbled = filtered.map(x => x * 2);
    // let result = doubbled.reverse();

    // console.log(result.join(' '));

    // oor just like this it could be done

    console.log(
        arr
            .filter((x, i) => i % 2 === 1)
            .map(x => x * 2)
            .reverse()
            .join(' ')
    );

}

processOddNumbers([10, 15, 20, 25]);