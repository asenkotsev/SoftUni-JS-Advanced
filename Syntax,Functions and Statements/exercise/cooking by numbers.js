function solve(arr) {
    let num = arr.shift();
    for (const x of arr) {
        if(x == 'chop') {
            num /= 2;
            console.log(num);
            
        } else if (x == 'dice') {
            num = Math.sqrt(num);
            console.log(num);

        } else if (x == 'spice') {
            num++;
            console.log(num);
            
        } else if (x == 'bake') {
            num *= 3;
            console.log(num);
            
        } else if (x == 'fillet') {
            num -= num * 0.2;
            console.log(num);
            
        }
    }
}

//solve(['32', 'chop', 'chop', 'chop', 'chop', 'chop'])
solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet'])