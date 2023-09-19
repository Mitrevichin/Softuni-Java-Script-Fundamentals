function substring(searchedWord, sentence) {
    let words = sentence.split(' ');
    
    for (let word of words) {
        if (searchedWord.toLowerCase() === word.toLowerCase()) {
            console.log(searchedWord);
            return;
        }
    }
    console.log(`${searchedWord} not found!`);
}

substring('javascript',
    'JavaScript is the best programming language');