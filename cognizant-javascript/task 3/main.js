const events = [
    { name: "Music Fest", seats: 10, isPast: false },
    { name: "Old Seminar", seats: 20, isPast: true },
    { name: "Workshop", seats: 0, isPast: false }
];

events.forEach(event => {
    if (!event.isPast && event.seats > 0) {
        console.log(event.name);
    }
});

function register(event) {
    try {
        if (event.seats <= 0) {
            throw new Error("No seats available");
        }

        event.seats--;
        console.log("Registration Successful");
    }
    catch(error) {
        console.log(error.message);
    }
}