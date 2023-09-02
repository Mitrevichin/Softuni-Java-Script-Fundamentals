// function solve(input) {
//     let listOfEmplyee = {};

//     for (const employee of input) {
//         listOfEmplyee.name = employee;
//         listOfEmplyee.personalNumber = employee.length;

//         console.log(`Name: ${listOfEmplyee.name} -- Personal Number: ${listOfEmplyee.personalNumber}`);
//     }

// }

function solve(input) {
    let listOfEmplyee = {};

    for (const employee of input) {
        listOfEmplyee.name = employee;
        listOfEmplyee.personalNumber = employee.length;

        console.log(`Name: ${listOfEmplyee.name} -- Personal Number: ${listOfEmplyee.personalNumber}`);
    }

}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);