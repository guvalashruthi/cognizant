fetch("events.json")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));

async function getEvents() {
    try {
        document.getElementById("loading").style.display = "block";

        const response = await fetch("events.json");
        const data = await response.json();

        console.log(data);
    }
    catch(error) {
        console.log(error);
    }
    finally {
        document.getElementById("loading").style.display = "none";
    }
}

getEvents();