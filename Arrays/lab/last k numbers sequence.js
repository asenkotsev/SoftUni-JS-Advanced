function solve(n, k) {
    let result = [1];
    let iterator = 0;
    let checker = 0;
    while (result.length < n) {
        let number = result.slice(iterator, (iterator + k)).reduce((a, b) => a + b);
        result.push(number);
        checker++;
        if (checker >= k) {
            iterator++;
        }
    }
    console.log(result.join(' '));

}

solve(6, 3)