function solve(x,y) {
while(y) {
    let t = y;
    y = x % y;
    x = t;
}
console.log(x);

}

solve(5,15)
solve(2154, 458)