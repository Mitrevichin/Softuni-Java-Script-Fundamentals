function jsonToObj(objAsStr) {
    let obj = JSON.parse(objAsStr);

    for (const key of Object.keys(obj)) {
        console.log(`${key}: ${obj[key]}`);
    }

}

jsonToObj('{"name": "George", "age": 40, "town": "Sofia"}');