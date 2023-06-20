function theatrePromotion(day, age) {

    let totalPrice = 0;

    switch (day) {
        case 'Weekday':
            if (age >= 0 && age <= 18) {
                totalPrice += 12;
            } else if (age > 18 && age <= 64) {
                totalPrice += 18;
            } else if (age > 64 && age <= 122) {
                totalPrice += 12;
            }
            break;
        case 'Weekend':
            if (age >= 0 && age <= 18) {
                totalPrice += 15;
            } else if (age > 18 && age <= 64) {
                totalPrice += 20;
            } else if (age > 64 && age <= 122) {
                totalPrice += 15;
            }
            break;
        case 'Holiday':
            if (age >= 0 && age <= 18) {
                totalPrice += 5;
            } else if (age > 18 && age <= 64) {
                totalPrice += 12;
            } else if (age > 64 && age <= 122) {
                totalPrice += 10;
                break;
            }
            console.log(totalPrice + '$');
    }

}

theatrePromotion('Holiday', -12);