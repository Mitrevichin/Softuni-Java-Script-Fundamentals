function solve(num) {
    let sum = 0;
    let counter = 0;
   
    for (let i = 1; i <= 1000; i += 2) {
        console.log(i);
        counter++;

        sum += i;
        if (counter === num) {
            console.log(`Sum: ${sum}`);
            break;
        }
    }
    
}


solve(5);
