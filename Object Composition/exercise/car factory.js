function solve(obj) {
    let result = {};
    result.model = obj.model;
    if(obj.power <= 90) {
        result.engine = {power: 90, volume: 1800};
    } else if (obj.power <= 120) {
        result.engine = {power: 120, volume: 2400};
    } else {
        result.engine = {power: 200, volume: 3500};
    }
    result.carriage = {type: obj.carriage, color: obj.color};
    if(obj.wheelsize % 2 == 0) {
        obj.wheelsize--;
    }
    result.wheels = [obj.wheelsize, obj.wheelsize, obj.wheelsize, obj.wheelsize];
    return result;
}

console.log(solve({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }))