function solve(num1, num2, operator) {
    let output = 0;
    switch(operator) {
        case '+': output += num1 + num2; break;
        case '-': output += num1 - num2; break;
        case '*': output += num1 * num2; break;
        case '/': output += num1 / num2; break;
        case '%': output += num1 % num2; break;
        case '**': output += num1 ** num2; break;
    }
    console.log(output);
    
}

solve(5,6, '-')