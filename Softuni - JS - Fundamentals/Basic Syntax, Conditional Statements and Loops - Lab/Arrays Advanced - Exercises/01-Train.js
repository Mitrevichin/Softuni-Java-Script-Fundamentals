function train(train) {
    let newTrainWithPassedngers = train.shift().split(' ').map(Number);
    let maxCapacity = Number(train.shift());
    
    for (let command of train) {
        let currCommand = command.split(' ');

        if (currCommand[0] === 'Add') {
            newTrainWithPassedngers.push(Number(currCommand[1]));
        } else {
            for (let i = 0; i < newTrainWithPassedngers.length; i++) {
                if (newTrainWithPassedngers[i] + Number(currCommand[0]) <= maxCapacity) {
                    newTrainWithPassedngers[i] += Number(currCommand[0]);
                    break;
                }
            }
        }
    }
    console.log(newTrainWithPassedngers.join(' '));
}

train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
);