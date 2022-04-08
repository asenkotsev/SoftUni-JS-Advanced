class Hex {
    constructor(value) {
        this.value = value;
    }

    toString() {
        return '0x' + this.value.toString(16).toUpperCase();
    }

    valueOf() {
        return this.value;
    }

    plus(hex) {
        const newHex = new Hex(this.value + hex);
        return newHex;
    }

    minus(hex) {
        const newHex = new Hex(this.value - hex);
        return newHex;
    }

    static parse(hexValue) {

    }
}