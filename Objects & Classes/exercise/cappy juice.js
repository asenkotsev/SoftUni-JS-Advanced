function solve(input) {
    let totalJuice = new Map;
    let totalBottles = new Map;

    for (let i = 0; i < input.length; i++) {
        let [juice, quantity] = input[i].split(' => ');
        quantity = Number(quantity);

        if (!totalJuice.has(juice)) {
            totalJuice.set(juice, 0);
        }

        let currentQuantity = totalJuice.get(juice);
        currentQuantity += quantity;

        if (currentQuantity >= 1000) {
            let juiceLeft = currentQuantity % 1000;
            let bottlesToStore = (currentQuantity - juiceLeft) / 1000;

            if (!totalBottles.has(juice)) {
                totalBottles.set(juice, 0);
            }
            totalBottles.set(juice, totalBottles.get(juice) + bottlesToStore);
            quantity = juiceLeft;
        }
        totalJuice.set(juice, totalJuice.get(juice) + quantity);
    }

    for (let [juice, bottles] of totalBottles) {
        console.log(`${juice} => ${bottles}`);

    }
}


solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'])