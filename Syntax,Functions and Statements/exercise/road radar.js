function solve(arr) {
    [speed, location] = arr;

    switch (location) {
        case 'motorway':
            if (speed >= 131 && speed <= 150) {
                console.log('speeding');

            } else if (speed >= 151 && speed <= 170) {
                console.log('excessive speeding');

            } else if (speed >= 171) {
                console.log('reckless driving');

            }
            break;
        case 'interstate':
            if (speed >= 91 && speed <= 110) {
                console.log('speeding');

            } else if (speed >= 111 && speed <= 130) {
                console.log('excessive speeding');

            } else if (speed >= 141) {
                console.log('reckless driving');

            }
            break;
        case 'city':
            if (speed >= 41 && speed <= 60) {
                console.log('speeding');

            } else if (speed >= 61 && speed <= 90) {
                console.log('excessive speeding');

            } else if (speed >= 91) {
                console.log('reckless driving');

            }
            break;
        case 'residential':
            if (speed >= 21 && speed <= 40) {
                console.log('speeding');

            } else if (speed >= 41 && speed <= 60) {
                console.log('excessive speeding');

            } else if (speed >= 61) {
                console.log('reckless driving');

            }
            break;
    }
}

solve([21, 'esidential'])