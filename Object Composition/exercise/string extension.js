(function () {
    String.prototype.ensureStart = function (arg) {
        if (this.startsWith(arg)) {
            return this.toString();
        } else {
            return arg + this;
        }
    }

    String.prototype.ensureEnd = function (arg) {
        if (this.endsWith(arg)) {
            return this.toString();
        } else {
            return this + arg;
        }
    }

    String.prototype.truncate = function (arg) {
        if (arg <= 3) { return '.'.repeat(arg); }
        if (arg >= this.length) { return this.toString(); }
        const spaceIndex = this.substring(0, arg - 1).lastIndexOf(' ');
        if (spaceIndex >= 0) {
            return this.substring(0, spaceIndex).concat('...');
        } else {
            return this.substring(0, arg - 3).concat('...');
        }
    }

    String.prototype.isEmpty = function () {
        if (this.length == 0) {
            return true;
        } else {
            return false;
        }
    }

    String.format = function (str, ...params) {
        params.forEach((el, i) => {
            str = str.replace(`{${i}}`, el)
        });
        return str;
    }
})()


let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
str = String.format('The {0} {1} fox',
  'quick', 'brown');
str = String.format('jumps {0} {1}',
  'dog');
