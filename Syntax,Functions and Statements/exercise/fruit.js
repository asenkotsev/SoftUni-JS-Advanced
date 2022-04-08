function solve(fruit, weightGr, pricePerKg) {
    let weightKg = (weightGr/1000);
    let price = (weightKg * pricePerKg);
    console.log(`I need $${price.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruit}.`);
    
}

solve('orange', 2500, 1.8)