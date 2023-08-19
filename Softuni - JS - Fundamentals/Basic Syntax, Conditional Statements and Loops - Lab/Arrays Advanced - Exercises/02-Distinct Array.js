function distinctArr(array) {
    // The first decision

    /*for (let index = 0; index < array.length; index++) {
        let currElement = array[index];
        
        for (let j = index + 1; j < array.length; j++) {
            let nextElement = array[j];

            if (currElement === nextElement) {
                array.splice(j, 1);
                j = j - 1;
            }
        }
    }
    console.log(array.join(' '));
} */

    // The second decision

    let newArray = [];

    // for (const number of array) {
    //     if (!newArray.includes(number)) {
    //         newArray.push(number);
    //     }
    // }

    // Or it can be done wit map()
    array.map((currNum) => {
        if (!newArray.includes(currNum)) {
            newArray.push(currNum);
        }
    });
    console.log(newArray.join(' '));
}

distinctArr([1, 2, 3, 4]);
distinctArr([7, 8, 9, 7, 2, 3, 4, 1, 2]);