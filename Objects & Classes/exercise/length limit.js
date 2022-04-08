class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;
    }
    decrease(step) {
        if (this.innerLength - step < 0) {
            this.innerLength = 0;
        } else {
            this.innerLength -= step;
        }
    }

    increase(step) {
        this.innerLength += step;
    }

    toString() {
        if (this.innerString.length <= this.innerLength) {
            return this.innerString;
        } else {
            return this.innerString.slice(0, this.innerLength).concat('...');
        }
    }
}


let test = new Stringer("Test", 5)
console.log(test.toString());

test.decrease(3);
console.log(test.toString());

test.decrease(5);
console.log(test.toString());

test.increase(4);
console.log(test.toString());
