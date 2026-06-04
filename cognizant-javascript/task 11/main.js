const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(event) {

    // Prevent page refresh
    event.preventDefault();

    // Clear old messages
    document.getElementById("error").textContent = "";
    document.getElementById("success").textContent = "";

    // Capture form values using form.elements
    const name = form.elements["userName"].value;
    const email = form.elements["email"].value;
    const selectedEvent = form.elements["event"].value;

    // Validation
    if (name === "") {
        document.getElementById("error").textContent =
            "Please enter your name.";
        return;
    }

    if (email === "") {
        document.getElementById("error").textContent =
            "Please enter your email.";
        return;
    }

    if (selectedEvent === "") {
        document.getElementById("error").textContent =
            "Please select an event.";
        return;
    }

    // Success message
    document.getElementById("success").textContent =
        `Registration Successful! Welcome ${name} to ${selectedEvent}.`;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Event:", selectedEvent);
});