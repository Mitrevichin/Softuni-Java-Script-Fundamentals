function rightPlace(firstString, char, secondString) {

    let result = '';

    for (let i = 0; i < firstString.length; i++) {

        if (firstString[i] === '_') {
            result += char;
        } else {
            result += firstString[i];
        }

    }

    if (result === secondString) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}

rightPlace('Str_ng', 'i', 'String');