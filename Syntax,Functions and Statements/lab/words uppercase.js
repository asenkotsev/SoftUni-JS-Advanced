function solve(input) {
    let result = input.toUpperCase()
        .split(/[\W+]/g)
        .filter(w => w.length > 0)
        .join(', ');

    console.log(result);

}

solve('Functions in JS can be nested, i.e. hold other functions')

