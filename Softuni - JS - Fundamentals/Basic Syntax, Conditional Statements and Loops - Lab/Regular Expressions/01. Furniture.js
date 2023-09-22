function solve(input) {
    let totalSum = 0;

    console.log("Bought furniture:");

    for (let line of input) {
        if (line === 'Purchase') break;

        let regex = />>(?<name>[A-Za-z\s]+)<<(?<prise>\d+(.\d+)?)!(?<quantity>\d+)/;
        let result = regex.exec(line);

        if (result !== null) {
            totalSum += Number(result.groups.prise) * Number(result.groups.quantity);
            console.log(result.groups.name);
        }

    }
    console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}

solve(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']);