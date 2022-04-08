function solve(arr) {
    let calories = {};
    for (let i = 0; i < arr.length; i += 2) {
        let food = arr[i];
        let caloriesAmount = Number(arr[i + 1]);
        calories[food] = caloriesAmount;
    }
    console.log(calories);
    
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])