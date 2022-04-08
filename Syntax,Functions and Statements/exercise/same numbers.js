function solve(num) {
    let isTrue = true;
    let result = 0;
    num = num.toString();
    for (let i = 0; i < num.length; i++) {
        result += Number(num[i]);
        let num1 = num[i];
        let num2 = num[i + 1]
        if (num1 !== num2 && num2 !== undefined) {
            isTrue = false;
        }
    }
    
    console.log(isTrue);
    console.log(result);


}

solve(2222222)