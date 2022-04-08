function solve(input) {
    let rotations = Number(input.pop());
    for(let i = 0; i < rotations % input.length; i++) {
       let temp = input.pop();
       input.unshift(temp);
    }
    console.log(input.join(' '));
    
}

solve(['1',
    '2',
    '3',
    '4',
    '2'])