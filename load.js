function redirectToHomePage() {
    window.location.replace("file:///C:/Users/shrey/Desktop/Portfolio/index.html"); // Replace with the URL of your home page
}

var h2Element = document.querySelector("h2");

h2Element.addEventListener("animationiteration", function(event) {
    if (event.animationName === "animate") {
        h2Element.style.animation = "none"; // Stop the animation
        redirectToHomePage(); // Redirect to the home page
    }
});
