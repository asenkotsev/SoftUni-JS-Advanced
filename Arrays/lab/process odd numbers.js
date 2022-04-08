function solve(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            result.unshift(arr[i] * 2);
        }
    }
    console.log(result.join(' '));

}

solve([10, 15, 20, 25])