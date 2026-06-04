function register() {
    alert("Registered!");
}

document.getElementById("category").onchange = function () {
    console.log(this.value);
};

document.getElementById("search").addEventListener(
    "keydown",
    function(event) {
        console.log(event.key);
    }
);