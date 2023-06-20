function foreignLanguages(country) {

    // if (country === 'England' || country === 'USA') {
    //     console.log('English');
    // } else if (country === 'Spain' || country === 'Mexico' || country === 'Argentina') {
    //     console.log('Spanish');
    // } else {
    //     console.log('unknown');
    // }

    switch (country) {
        case 'England':
        case 'USA':
            console.log('English');
            break;
        case 'Spain':
        case 'Mexico':
        case 'Argentina':
            console.log('Spanish');
            break;
        default:
            console.log('unknown');
            break;
    }

}


foreignLanguages('USA');