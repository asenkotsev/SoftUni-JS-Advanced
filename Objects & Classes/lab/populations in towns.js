function solve(input) {
    let result = {};
    for (let i = 0; i < input.length; i++) {
        [town, population] = input[i].split(' <-> ');

        if (result.hasOwnProperty(town)) {
            result[town] += Number(population);
        } else {
            result[town] = Number(population);
        }
    }

    let resultArr = Object.entries(result);
    for (let i = 0; i < resultArr.length; i++) {
        console.log(resultArr[i].join(' : '));
    }
}

solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'])