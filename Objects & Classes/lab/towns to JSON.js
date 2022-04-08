function solve(input) {
    let result = [];
    for (let town of input.slice(1)) {
        [blank, town, lat, long] = (town.split(/\s*\|\s*/));
        lat = Number(lat).toFixed(2);
        long = Number(long).toFixed(2);
        let townObj = {
            Town: town,
            Latitude: Number(lat),
            Longitude: Number(long)
        }
        result.push(townObj);
    }
    console.log(JSON.stringify(result));
    

}

solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'])