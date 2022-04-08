function solve(arr) {
    let sum = 0;
    let inverseSum = 0
    let concat = "";
    arr.forEach(i => {
        sum += i
        inverseSum += 1/i;
        concat += i;
    });

    console.log(sum);
    console.log(inverseSum);
    console.log(concat);    
}

solve([1,2,3])