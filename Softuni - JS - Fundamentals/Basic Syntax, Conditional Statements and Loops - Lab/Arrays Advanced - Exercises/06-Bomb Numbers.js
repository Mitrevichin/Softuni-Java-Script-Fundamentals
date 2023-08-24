function bombSpecialNumber(array, bomb) {
    let bombNumber = bomb[0];
    let bombRadius = bomb[1];

    let indexOfBomb = array.indexOf(bombNumber);

    while (indexOfBomb !== -1) {
        let startExplosionIndex = Math.max(0, indexOfBomb - bombRadius);
        let explosionLenght = bombRadius * 2 + 1;

        array.splice(startExplosionIndex, explosionLenght);
        indexOfBomb = array.indexOf(bombNumber);
    }
    // let sum = array.reduce((a, b) => a + b, 0);
    // Or just with loop
    let sum = 0;

    for (const number of array) {
        sum += number;
    }
    console.log(sum);
}

bombSpecialNumber(
    [1, 2, 2, 4, 2, 2,
        2, 9],
    [4, 2]
);