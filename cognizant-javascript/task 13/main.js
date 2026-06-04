const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(event) {

    // Stop page refresh
    event.preventDefault();

    console.log("Step 1: Form Submitted");

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    console.log("Step 2: Values Captured");
    console.log("Name:", name);
    console.log("Email:", email);

    const payload = {
        name: name,
        email: email
    };

    console.log("Step 3: Payload Created");
    console.log(payload);

    // Breakpoint
    debugger;

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })

    .then(response => {
        console.log("Step 4: Response Received");
        return response.json();
    })

    .then(data => {
        console.log("Step 5: Success");
        console.log(data);

        document.getElementById("message").textContent =
            "Registration Successful!";
    })

    .catch(error => {
        console.log("Step 6: Error Occurred");
        console.error(error);

        document.getElementById("message").textContent =
            "Registration Failed!";
    });

});