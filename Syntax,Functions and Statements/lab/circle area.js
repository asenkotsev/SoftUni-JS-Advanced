function solve(radius) {
    let result;
    let inputType = typeof(radius);
    if(inputType === 'number') {
        result = Math.PI * Math.pow(radius, 2);
        console.log(result.toFixed(2));
        
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
        
    }

}

solve(5)