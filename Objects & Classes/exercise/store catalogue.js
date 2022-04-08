function solve(input) {
    input = input.sort();
    let catalogue = {};

    for (let i = 0; i < input.length; i++) {
        let [product, price] = input[i].split(' : ');

        if (!catalogue.hasOwnProperty(product[0])) {
            catalogue[product[0]] = [product, price];
        } else {
            catalogue[product[0]].push(product);
            catalogue[product[0]].push(price);
        }
    }

    let result = Object.entries(catalogue);

    for (let i = 0; i < result.length; i++) {
        console.log(result[i][0]);

        for (let j = 0; j < result[i][1].length; j += 2) {
            console.log(`  ${result[i][1][j]}: ${result[i][1][j + 1]}`);

        }
    }
}

solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'])