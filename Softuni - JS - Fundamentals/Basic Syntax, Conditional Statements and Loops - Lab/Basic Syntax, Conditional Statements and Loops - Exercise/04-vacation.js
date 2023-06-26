function vacation(peopleCount, groupType, day) {
    let price = 0;

    switch (day) {
        case 'Friday':
            if (groupType === 'Students' && peopleCount >= 30) {
                price = (peopleCount * 8.45) * 0.85;
            } else {
                price = peopleCount * 8.45
            }
            break;
        case 'Saturday':
            if (groupType === 'Students' && peopleCount >= 30) {
                price = (peopleCount * 9.80) * 0.85;
            } else {
                price = peopleCount * 9.80
            }
            break;
        case 'Sunday':
            if (groupType === 'Students' && peopleCount >= 30) {
                price = (peopleCount * 10.46) * 0.85;
            } else {
                price = peopleCount * 10.46
            }
            break;
    }
    switch (day) {
        case 'Friday':
            if (groupType === 'Business' && peopleCount >= 30) {
                peopleCount -= 10
                price = peopleCount * 10.90;
            }
            break;
        case 'Saturday':
            if (groupType === 'Business' && peopleCount >= 30) {
                peopleCount -= 10
                price = peopleCount * 15.60;
            }
            break;
        case 'Sunday':
            if (groupType === 'Business' && peopleCount >= 100) {
                peopleCount -= 10;
                price = peopleCount * 16;
            }
            break;
    }
    switch (day) {
        case 'Friday':
            if (groupType === 'Regular' && (peopleCount >= 10 && peopleCount <= 20)) {
                price = (peopleCount * 15) * 0.95;
            } else {
                peopleCount * 15;
            }
            break;
        case 'Saturday':
            if (groupType === 'Regular' && (peopleCount >= 10 && peopleCount <= 20)) {
                price = (peopleCount * 20) * 0.95;
            } else {
                peopleCount * 20;
            }
            break;
        case 'Sunday':
            if (groupType === 'Regular' && (peopleCount >= 10 && peopleCount <= 20)) {
                price = (peopleCount * 22.50) * 0.95;
            } else {
                peopleCount * 22.50;
            }
            break;
    }
    console.log(`Total price: ${price.toFixed(2)}`);
}

vacation(40,
    "Regular",
    "Saturday"
    );