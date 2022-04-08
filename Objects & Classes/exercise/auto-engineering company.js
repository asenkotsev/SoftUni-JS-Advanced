function solve(input) {
    let carList = {};

    for (let i = 0; i < input.length; i++) {
        let [brand, model, producedCars] = input[i].split(' | ');
        producedCars = Number(producedCars);

        if (!carList.hasOwnProperty(brand)) {
            carList[brand] = [model, producedCars];
        } else if (carList[brand].includes(model)) {
            carList[brand][1] += producedCars;
        } else {
            carList[brand].push(model)
            carList[brand].push([producedCars]);
        }


    }
    let result = Object.entries(carList);

    for (let i = 0; i < result.length; i++) {
        console.log(result[i][0]);
        for (let j = 0; j < result[i][1].length; j += 2) {
            console.log(`###${result[i][1][j]} -> ${result[i][1][j + 1]}`);
        }
    }
}

solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'])