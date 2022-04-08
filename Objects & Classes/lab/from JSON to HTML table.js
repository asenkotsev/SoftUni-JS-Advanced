function solve(input) {
    let result = ['<Table>'];
    let titles = Object.keys(input[0]);
    result.push(`<tr><th>${titles.join('</th><th>')}</th></tr>`);
    for(let i = 0; i < input.length; i++) {
        let values = Object.values(input[i]);
        let valueResult = "";
        for(let j = 0; j < values.length; j++) {
            valueResult += `<td>${values[j]}<tr>`
        }
        console.log(valueResult);
        
        
    }
    
    console.log(result);
    
}

solve([{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}])