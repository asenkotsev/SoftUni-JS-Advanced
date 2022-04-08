function solve(steps, footprintMeter, speedKMh) {
    let footprintKm = footprintMeter / 1000;
    let distance = steps * footprintKm;
    let time = distance / speedKMh;
    let hours = 0;
    let minutes = Math.floor(time * 60 % 60);
    let seconds = Math.round(time * 3600 % 60);
    minutes += Math.trunc(distance / 0.5)

    while (minutes > 60) {
        minutes -= 60;
        hours++;
    }

    if (hours < 10) {
        if (minutes < 10) {
            console.log(`0${hours}:0${minutes}:${seconds}`);
        } else {
            console.log(`0${hours}:${minutes}:${seconds}`);
        }

    } else {
        if (minutes < 10) {
            console.log(`${hours}:0${minutes}:${seconds}`);
        } else {
            console.log(`${hours}:${minutes}:${seconds}`);
        }


    }
}

solve(4000, 0.60, 5)
solve(2564, 0.70, 5.5)