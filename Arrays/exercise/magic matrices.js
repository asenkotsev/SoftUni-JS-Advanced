function solve(matrix) {
    let isMagic = true;
    let sum = matrix[0].reduce((a, b) => a + b, 0);
    for (let i = 0; i < matrix.length; i++) {
        let rowSum = matrix[i].reduce((a, b) => a + b);
        let colSum = matrix.map(x => x[i]).reduce((a, b) => a + b);
        if (rowSum !== sum || colSum !== sum) {
            isMagic = false;
        }
    }
    return isMagic;
}




//solve([[4, 5, 6],
//       [6, 5, 4],
//       [5, 5, 5]])
//
