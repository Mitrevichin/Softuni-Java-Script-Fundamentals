function solve(text, word) {
    // let tokens = text.split(' ');

    // let counter = 0;

    // for (let token of tokens) {
    //     if (token === word) {
    //         counter++
    //     }
    // }

    // console.log(counter);

    console.log(text.split(' ').filter(x => x === word).length);
}

solve('This is a word and it also is a sentence',
    'is');