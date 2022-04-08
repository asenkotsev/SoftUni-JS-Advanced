function solve(arr) {
    let result = [];

    for (const x of arr) {
        if (x >= 0) {
            result.push(x);
        } else {
            result.unshift(x)
        }
        
    }
    console.log(result.join('\n'));
}

solve([7, -2, 8, 9])