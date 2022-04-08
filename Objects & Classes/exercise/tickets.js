function solve(arr, sortBy) {
    class Ticket {
        constructor(args) {
            const [destination, price, status] = args.split('|');
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    function sortFunction(a, b) {
        try {
            return a[sortBy].localeCompare(b[sortBy]);
        } catch (e) {
            return a[sortBy] - b[sortBy];
        }
    }

    return arr.map(t => new Ticket(t)).sort(sortFunction);
}

solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination')