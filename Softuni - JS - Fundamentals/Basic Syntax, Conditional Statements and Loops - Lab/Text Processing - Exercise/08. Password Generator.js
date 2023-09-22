function passwordGenerator(input) {
    /*
    let firstString = input[0];
    let secondString = input[1];
    let thirdString = input[2];
    */
    // Or we can use desruction

    let [firstString, secondString, thirdString] = input;
    let combinedString = firstString + secondString;
    
    let vowels = ['a', 'o', 'u', 'e','i'];
    let reversedPassword = '';
    thirdString = thirdString.toLowerCase();


}

passwordGenerator([
    'ilovepizza',
    'ihatevegetables',
    'orange']);