function solve(input) {
    let products = new Map();
    for (let sentence of input) {
        let [city, product, productPrice] = sentence.split(' | ');
        if (!products.has(product)) { products.set(product, new Map()) };
        products.get(product).set(city, Number(productPrice));
    }
    for (let [key, value] of products) {
        let lowest = ([...value]).reduce(function (x, y) {
            if (x[1] < y[1]) {
                return x;
            } else if (y[1] < x[1]) {
                return y;
            }
            return x;
        });
        console.log(`${key} -> ${lowest[1]} (${lowest[0]})`);
        
    }
}

//solve(['Sample Town | Sample Product | 1000',
//    'Sample Town | Orange | 2',
//    'Sample Town | Peach | 1',
//    'Sofia | Orange | 3',
//    'Sofia | Peach | 2',
//    'New York | Sample Product | 1000.1',
//    'New York | Burger | 10'])

solve(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000'])