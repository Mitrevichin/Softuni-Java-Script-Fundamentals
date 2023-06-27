function specialNumbers(n) {

    for (let num = 1; num <= n; num++) {
        let result = 0;
        
        let numAsString = num.toString();
        let isSpecial = false;

        for (let i = 0; i < numAsString.length; i++) {
            result += Number(numAsString[i]);
        }

        if (result === 5 || result === 7 || result === 11) {
            isSpecial = true;
        } 

        console.log(`${num} -> ${isSpecial ? 'True' : 'False'}`);
    }
}

specialNumbers(15);