function city(obj) {
    let props = Object.keys(obj);

    for (let prop of props) {
        console.log(`${prop} -> ${obj[prop]}`);
    }

}

city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});