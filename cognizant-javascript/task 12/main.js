const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(event) {

    // Prevent page refresh
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    const userData = {
        name: name,
        email: email
    };

    document.getElementById("message").textContent =
        "Submitting registration...";

    // Simulate delayed server response
    setTimeout(() => {

        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })

        .then(response => response.json())

        .then(data => {

            document.getElementById("message").textContent =
                "Registration Successful!";

            console.log("Success:", data);
        })

        .catch(error => {

            document.getElementById("message").textContent =
                "Registration Failed!";

            console.log("Error:", error);
        });

    }, 2000); // 2 second delay

});