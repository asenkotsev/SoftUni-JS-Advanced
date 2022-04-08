class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer) {
        if (this.allCustomers.find(c => c.personalId == customer.personalId) !== undefined) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
        } else {
            this.allCustomers.push(customer);
            return customer;
        }
    }

    depositMoney(personalId, amount) {
        const customer = this.allCustomers.find(c => c.personalId == personalId);

        if (customer !== undefined) {
            if (!customer.hasOwnProperty('totalMoney')) {
                customer.totalMoney = 0;
            }
            if (!customer.hasOwnProperty('transactions')) {
                customer.transactions = [];
            }
            customer.transactions.push(amount);
            customer.totalMoney += amount;
            return `${customer.totalMoney}$`
        } else {
            throw new Error('We have no customer with this ID!');
        }
    }

    withdrawMoney(personalId, amount) {
        const customer = this.allCustomers.find(c => c.personalId == personalId);
        if (customer !== undefined) {
            if (customer.totalMoney < amount) {
                throw new Error(`${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`)
            } else {
                if (!customer.hasOwnProperty('transactions')) {
                    customer.transactions = [];
                }
                customer.transactions.push(-amount);
                customer.totalMoney -= amount;
                return `${customer.totalMoney}$`
            }
        } else {
            throw new Error('We have no customer with this ID!');
        }
    }

    customerInfo(personalId) {
        const customer = this.allCustomers.find(c => c.personalId == personalId);
        if (customer !== undefined) {
            const result = [`Bank name: ${this._bankName}`, `Customer name: ${customer.firstName} ${customer.lastName}`, `Customer ID: ${customer.personalId}`, `Total Money: ${customer.totalMoney}$`, 'Transactions:'];
            for (let i = customer.transactions.length - 1; i >= 0; i--) {
                if (customer.transactions[i] < 0) {
                    result.push(`${i + 1}. ${customer.firstName} ${customer.lastName} withdrew ${Math.abs(customer.transactions[i])}$!`);
                } else {
                    result.push(`${i + 1}. ${customer.firstName} ${customer.lastName} made deposit of ${customer.transactions[i]}$!`);
                }
            }
            return result.join('\n');
        } else {
            throw new Error('We have no customer with this ID!');
        }
    }
}

let bank = new Bank("SoftUni Bank");

console.log(bank.newCustomer({ firstName: "Svetlin", lastName: "Nakov", personalId: 6233267 }));
console.log(bank.newCustomer({ firstName: "Mihaela", lastName: "Mileva", personalId: 4151596 }));
bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);
console.log(bank.withdrawMoney(6233267, 125));
console.log(bank.customerInfo(6233267));

