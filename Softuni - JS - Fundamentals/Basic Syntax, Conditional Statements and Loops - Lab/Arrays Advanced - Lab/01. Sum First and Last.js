function firstAndLast(input) {

    let first = Number(input.shift());
    let last = Number(input.pop());
    let sum = first + last;

    console.log(sum);

}

firstAndLast(['20', '30', '40'] );