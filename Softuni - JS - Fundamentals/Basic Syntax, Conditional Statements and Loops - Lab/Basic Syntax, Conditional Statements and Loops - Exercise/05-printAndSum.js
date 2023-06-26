function solve(startNum, endNum) {
    let sum = 0;
    let printLine = '';

    for (let i = startNum; i <= endNum; i++) {
        sum += i;
        printLine += i + ' ';
    }
    
    console.log(printLine);
    console.log(`Sum: ${sum}`);
}

solve(5, 10);