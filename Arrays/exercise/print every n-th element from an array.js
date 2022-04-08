function solve(input) {
    let n = Number(input.pop());
    let result = [];

    for (let i = 0; i < input.length; i += n) {
        result.push(input[i]);
    }

    console.log(result.join('\n'));

}

solve(['5',
    '20',
    '31',
    '4',
    '20',
    '2'])

solve(['dsa',
    'asd',
    'test',
    'tset',
    '2']
)