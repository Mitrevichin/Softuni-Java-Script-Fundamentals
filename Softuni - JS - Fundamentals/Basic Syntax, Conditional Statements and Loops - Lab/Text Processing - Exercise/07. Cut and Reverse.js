function cutAndReverse(text) {
    // let fistNewText = [];
    // let secondNewText = [];

    // for (let i = 0; i < text.length / 2; i++) {
    //     let currChar = text[i];
    //     fistNewText.push(currChar);
    // }

    // for (let j = text.length / 2; j < text.length; j++) {
    //     secondNewText.push(text[j]);
    // }

    // console.log(fistNewText.reverse().join(''));
    // console.log(secondNewText.reverse().join(''));

    let firstHalf = text
    .split('')
    .slice(0, text.length / 2)
    .reverse()
    .join('');

    console.log(firstHalf);

    let secondHalf = text
    .split('')
    .slice(text.length / 2, text.length)
    .reverse()
    .join('');

    console.log(secondHalf);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');