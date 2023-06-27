function solve(bandName, albumName, songName) {

    let duration = (bandName.length * albumName.length) * songName.length / 2;
    let rotation = duration / 2.5;

    console.log(`The plate was rotated ${Math.ceil(rotation)} times.`);

}

solve('Black Sabbath', 'Paranoid','War Pigs');