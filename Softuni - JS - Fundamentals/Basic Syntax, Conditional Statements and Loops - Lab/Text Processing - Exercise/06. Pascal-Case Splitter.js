function splitter(str) {
    let words = [];
    let currWord = str[0];

    for (let index = 1; index < str.length; index++) {
        if (str[index].toUpperCase() !== str[index]) {
            currWord += str[index];
        } else {
            words.push(currWord);
            currWord = str[index];
        }
    }
    words.push(currWord);
    console.log(words.join(', '));
}

splitter('SplitMeIfYouCanHaHaYouCantOrYouCan');