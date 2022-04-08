function solve(input) {
    let result = {};
    let city;
    let income;

    for (let i = 0; i < input.length; i++) {
        if (i % 2 == 0) {
            city = input[i];
            continue;
        } else {
            income = Number(input[i]);
        }
        if (result.hasOwnProperty(city)) {
            result[city] += income;
        } else {
            result[city] = income;
        }
    }
    console.log(JSON.stringify(result));

}

solve(['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4'])