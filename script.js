document.addEventListener("DOMContentLoaded", function () {
    // Select the menu item
    var projectMenu = document.querySelector("nav ul li a[href='#project']");

    // Add click event listener to the menu item
    projectMenu.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default link behavior

        // Scroll to the project section smoothly
        document.querySelector("#project").scrollIntoView({
            behavior: "smooth"
        });
    });
});


var typed = new Typed('#element', {
    strings: ['.......', 'Data Science', 'Image Processing', 'Machine Leaning', '&amp; Deep Learning.'],
    typeSpeed: 50,
});