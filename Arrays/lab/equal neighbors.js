function solve(matrix) {
    result = 0;

    for (let row = 0; row < matrix.length - 1; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] == matrix[row + 1][col]) {
                result++;
            }
            if (matrix[row][col] == matrix[row][col + 1]) {
                result++;
            }
            if (row == matrix.length - 2 && matrix[row + 1][col] == matrix[row + 1][col + 1]) {
                result++;
            }
        }
    }
    console.log(result);

}

solve([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']])