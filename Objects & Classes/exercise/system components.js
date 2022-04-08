function solve(input) {
    let components = {};

    for (let i = 0; i < input.length; i++) {
        let [system, component, subcomponent] = input[i].split(' | ');

        if (!components.hasOwnProperty(system)) {
            components[system] = [];
        }
        if (!components[system].hasOwnProperty(component)) {
            components[system][component] = [];
        }
        components[system][component].push(subcomponent);
    }

    Object.entries(components).sort((a, b) => {
        return Object.keys(b[1]).length - Object.keys(a[1]).length || a[0].localeCompare(b[0]);
    }).forEach(([system, component]) => {
        console.log(system);
        Object.entries(component).sort((a, b) => {
           return Object.keys(b[1]).length - Object.keys(a[1]).length || a[0].localeCompare(b[0]);
        }).forEach(([name, subcomponent]) => {
            console.log(`|||${name}`);
            console.log(subcomponent.map(el => `||||||${el}`).join('\n'));
        })  
    });
}

solve(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'])