class Event {
    constructor(name, seats) {
        this.name = name;
        this.seats = seats;
    }
}

Event.prototype.checkAvailability = function () {
    return this.seats > 0;
};

const event1 = new Event("Workshop", 20);

console.log(event1.checkAvailability());

Object.entries(event1).forEach(([key, value]) => {
    console.log(key, value);
});