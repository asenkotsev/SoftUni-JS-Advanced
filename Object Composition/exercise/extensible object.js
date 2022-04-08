function solve() {
    let obj = {
        extend: consumeProperties
    }
    function consumeProperties(template) {
        for(let prop in template) {
            if(template.hasOwnProperty(prop)) {
                if(typeof template[prop] == 'function') {
                    Object.getPrototypeOf(this)[prop] = template[prop];
                } else {
                    this[prop] = template[prop];
                }
            }
        }
    }
    return obj;
}