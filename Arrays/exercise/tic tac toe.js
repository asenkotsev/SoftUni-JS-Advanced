function solve(input) {
    let dashboard = [[false, false, false], [false, false, false], [false, false, false]];
    let isWon = false;
    let counter = 0;
    let player = '';

    for (let i = 0; i < input.length; i++) {
        let [row, col] = input[i].split(' ');
        if (counter % 2 == 0) {
            player = 'X';
        } else {
            player = 'O';
        }
        if (!isWon) {
            movements(row, col)
        }
    }

    function movements(row, col) {
        if (dashboard[row][col] == false) {
            dashboard[row][col] = player;
            counter++;
        } else if (dashboard[row][col] == 'X' || dashboard[row][col] == '0') {
            console.log("This place is already taken. Please choose another!");

        }
    }

    //check horizontal and vertical
    for (let i = 0; i < 3; i++) {
        if (dashboard[i][0] === player &&
            dashboard[i][1] === player &&
            dashboard[i][2] === player) {
            console.log(`Player ${player} wins!`)
            isWon = true;
            printDashboard();
            break;
        }

        else if (dashboard[0][i] === player &&
            dashboard[1][i] === player &&
            dashboard[2][i] === player) {
            console.log(`Player ${player} wins!`)
            isWon = true;
            printDashboard();
            break;
        }


        //check left to right
        if (dashboard[0][0] === player &&
            dashboard[1][1] === player &&
            dashboard[2][2] === player) {
            console.log(`Player ${player} wins!`)
            isWon = true;
            printDashboard();
            break;
        }

        //check right to left
        else if (dashboard[0][2] === player &&
            dashboard[1][1] === player &&
            dashboard[2][0] === player) {
            console.log(`Player ${player} wins!`)
            isWon = true;
            printDashboard();
            break;
        }
    }
    if (!isWon) {
        console.log("The game ended! Nobody wins :(");
        printDashboard();

    }

    function printDashboard() {
        for (let row = 0; row < dashboard.length; row++) {
            console.log(dashboard[row].join("\t"));
        }
    }
}




solve([
    "0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"])

//solve(["0 0",
//    "0 0",
//    "1 1",
//    "0 1",
//    "1 2",
//    "0 2",
//    "2 2",
//    "1 2",
//    "2 2",
//    "2 1"])