function solve(input) {
    let result = [];
    let hero = {};
    for (let i = 0; i < input.length; i++) {
        let [heroName, level, items] = input[i].split(' / ');
        hero = {
            name: heroName,
            level: Number(level),
            items: items ? items.split(', ') : []
        }
        result.push(hero)
    }
    console.log(JSON.stringify(result));
}

solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'])
