function solve(arr1, arr2, arr3) {
    let sum = arr1.length + arr2.length + arr3.length;
    let average = sum/3;
    console.log(Math.trunc(sum));
    console.log(Math.trunc(average));
    
}

solve('chocolate', 'ice cream', 'cake')