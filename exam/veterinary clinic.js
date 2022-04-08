class VeterinaryClinic {
    constructor(clinicName, capacity) {
        this.clinicName = clinicName;
        this.capacity = capacity;
        this.clients = [];
        this.currentWorkload = 0;
        this.totalProfit = 0;
    }

    newCustomer(ownerName, petName, kind, procedures) {
        if (this.currentWorkload >= this.capacity) {
            throw new Error('Sorry, we are not able to accept more patients!');
        } else if (this.clients.find(c => c.ownerName == ownerName && c.petName == petName) !== undefined && this.clients.find(c=> c.petName == petName).procedures.length > 0) {
            throw new Error(`This pet is already registered under ${ownerName} name! ${petName} is on our lists, waiting for ${procedures.join(', ')}.`)
        } else {
            this.currentWorkload++;
            this.clients.push({
                ownerName,
                petName,
                kind,
                procedures
            });

            return 'Welcome ' + petName + '!';
        }
    }

    onLeaving(ownerName, petName) {
        const client = this.clients.find(c => c.ownerName == ownerName && c.petName == petName);
        if (client !== undefined) {
            var proceduresAmount = client.procedures.length;
        }
        if (client == undefined) {
            throw new Error('Sorry, there is no such client!');
        } else if (proceduresAmount <= 0 || client.procedures == '') {
            throw new Error(`Sorry, there are no procedures for ${petName}!`)
        } else {
            this.totalProfit += (500 * proceduresAmount);
            this.currentWorkload--;
            client.procedures = [];
            return `Goodbye ${petName}. Stay safe!`
        }
    }

    toString() {
        const result = [];
        result.push(`${this.clinicName} is ${Math.trunc((this.currentWorkload * 100 / this.capacity) / 10) * 10}% busy today!`);
        result.push(`Total profit: ${this.totalProfit.toFixed(2)}$`);

        this.clients.sort(function (a, b) {
            return a.ownerName.localeCompare(b.ownerName) || a.petName.localeCompare(b.petName);
        });

        for (let i = 0; i < this.clients.length; i++) {
            this.clients[i].clientName;
            if (!result.includes(`${this.clients[i].ownerName} with:`)) {
                result.push(`${this.clients[i].ownerName} with:`);
                result.push(`---${this.clients[i].petName} - a ${this.clients[i].kind.toLowerCase()} that needs: ${this.clients[i].procedures.join(', ')}`);
            } else {
                result.push(`---${this.clients[i].petName} - a ${this.clients[i].kind.toLowerCase()} that needs: ${this.clients[i].procedures.join(', ')}`)
            }
        }
        return result.join('\n');
    }
}

let clinic = new VeterinaryClinic('SoftCare', 10);
console.log(clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB']));
console.log(clinic.newCustomer('Anna Morgan', 'Max', 'Dog', ['SK456', 'DFG45', 'KS456']));
console.log(clinic.newCustomer('Jim Jones', 'Tiny', 'Cat', ['A154B'])); 
console.log(clinic.onLeaving('Jim Jones', 'Tiny'));
console.log(clinic.toString());
clinic.newCustomer('Jim Jones', 'Sara', 'Dog', ['A154B']); 
clinic.newCustomer('Jack Jones', 'Sara', 'Dog', ['A154B']); 
console.log(clinic.toString());
