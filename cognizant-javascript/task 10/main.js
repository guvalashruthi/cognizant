// const and let
const eventName = "Music Fest";
let availableSeats = 50;

// Default parameter
function registerUser(userName = "Guest") {
    return `${userName} registered for ${eventName}`;
}

// Event object
const event = {
    name: "Music Fest",
    date: "2026-06-15",
    location: "Hyderabad",
    category: "Music"
};

// Destructuring
const {
    name,
    date,
    location: eventLocation,
    category
} = event;

// Event list
const events = [
    { name: "Music Fest", category: "Music" },
    { name: "Coding Workshop", category: "Education" },
    { name: "Dance Show", category: "Music" }
];

// Spread operator
const clonedEvents = [...events];

// Filter music events
const musicEvents = clonedEvents.filter(
    event => event.category === "Music"
);

// Display on webpage
document.getElementById("output").innerHTML = `
    <h2>Event Details</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Date:</strong> ${date}</p>
    <p><strong>Location:</strong> ${eventLocation}</p>
    <p><strong>Category:</strong> ${category}</p>

    <h2>Registration</h2>
    <p>${registerUser("Shruthi")}</p>
    <p>${registerUser()}</p>

    <h2>Music Events</h2>
    <ul>
        ${musicEvents.map(event => `<li>${event.name}</li>`).join("")}
    </ul>
`;