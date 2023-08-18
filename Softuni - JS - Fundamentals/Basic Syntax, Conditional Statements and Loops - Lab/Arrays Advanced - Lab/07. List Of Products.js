function listOfProducts(inputList) {

    let sorted = inputList.sort();

    for (let i = 0; i < inputList.length; i++) {
        console.log(`${i + 1}.${sorted[i]}`);
    }

}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions',
    'Apples']);