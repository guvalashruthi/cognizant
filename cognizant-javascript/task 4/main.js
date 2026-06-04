let eventList = [];

function addEvent(event) {
    eventList.push(event);
}

function registerUser(eventName) {
    console.log(`Registered for ${eventName}`);
}

function filterEventsByCategory(category) {
    return eventList.filter(event => event.category === category);
}

// Closure
function registrationTracker() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const musicRegistrations = registrationTracker();

console.log(musicRegistrations());
console.log(musicRegistrations());

// Callback
function searchEvents(callback) {
    return callback(eventList);
}