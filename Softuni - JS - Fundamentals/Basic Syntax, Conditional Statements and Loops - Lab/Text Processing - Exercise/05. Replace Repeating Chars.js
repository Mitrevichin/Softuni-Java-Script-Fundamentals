function replace(text) {
    let unique = '';

    for (let i = 0; i < text.length; i++) {
        let currChar = text[i];
        let nextChar = text[i + 1];

        if (currChar !== nextChar) {
            unique += currChar;
        }
    }
    console.log(unique);
}

replace('aaaaabbbbbcdddeeeedssaa');