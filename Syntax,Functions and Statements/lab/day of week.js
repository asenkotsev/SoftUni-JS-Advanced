function solve(day) {
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (day >= 1 && day <= 7) {
        console.log(days[day - 1]);
    } else if (days.includes(day)) {
        console.log(days.indexOf(day) + 1);

    } else {
        console.log('error');
    }
}

solve('Monday')