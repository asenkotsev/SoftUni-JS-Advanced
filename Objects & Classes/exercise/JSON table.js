function solve(input) {
    console.log('<table>');
    // input = input.map(x => JSON.parse(x)); // For Judge 
    for (let i = 0; i < input.length; i++) {
        console.log('\t' + '<tr>');

        for (let j = 0; j < Object.values(input[i]).length; j++) {
            console.log('\t' + '\t' + '<td>' + Object.values(input[i])[j] + '</td>');

        }
        console.log('\t' + '</tr>');

    }
    console.log('</table>');

}

solve([{ "name": "Pesho", "position": "Promenliva", "salary": 100000 },
{ "name": "Teo", "position": "Lecturer", "salary": 1000 },
{ "name": "Georgi", "position": "Lecturer", "salary": 1000 }])