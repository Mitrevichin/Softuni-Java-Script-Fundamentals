function formatGrade(grade) {
    let formatted = grade.toFixed(2);
    let desc;

    if (grade < 3) {
        formatted = '2';
        desc = 'Fail';
    } else if (grade < 3.5) {
        desc = 'Poor';
    } else if (grade < 4.5) {
        desc = 'Good';
    } else if (grade < 5.5) {
        desc = 'Very good';
    } else {
        desc = "Excellent"
    }

    console.log(`${desc} (${formatted})`);
}

formatGrade(3.33);
formatGrade(4.5);
formatGrade(2.99);