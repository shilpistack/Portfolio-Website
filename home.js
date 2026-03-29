// Button click events

document.querySelector(".primary").addEventListener("click", function() {

    // alert("Projects section coming soon!");
    document.getElementById("achievements-container").style.display="block";
    document.getElementById("achievements-container").scrollIntoView({ behavior: "smooth" });


});


document.querySelector(".secondary").addEventListener("click", function() {

    // alert("Contact section coming soon!");
    document.getElementById("contact-container").style.display="block";
    document.getElementById("contact-container").scrollIntoView({ behavior: "smooth"});

});

const cards = document.querySelectorAll(".info-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.boxShadow = "0 15px 30px rgba(0,0,0,0.15)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow = "0 5px 15px rgba(0,0,0,0.08)";

    });

});

// Fade animation on load

window.addEventListener("load", function() {

    const about = document.querySelector(".about-container");

    about.style.opacity = "0";
    about.style.transform = "translateY(30px)";

    setTimeout(() => {

        about.style.transition = "0.8s ease";
        about.style.opacity = "1";
        about.style.transform = "translateY(0)";

    }, 200);

});

// Animate skill boxes on load

const skillBoxes = document.querySelectorAll(".skill-box");

skillBoxes.forEach((box, index) => {

    box.style.opacity = "0";
    box.style.transform = "translateY(20px)";

    setTimeout(() => {

        box.style.transition = "0.5s";
        box.style.opacity = "1";
        box.style.transform = "translateY(0)";

    }, index * 100);

});

// Fade-in animation

const achievementCards = document.querySelectorAll(".achievement-card");

achievementCards.forEach((card, index) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";

    setTimeout(() => {

        card.style.transition = "0.6s ease";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";

    }, index * 200);

});

// Simple button click effect

document.querySelector(".send-btn").addEventListener("click", function() {

    alert("Message sent successfully!");

});

// Optional hover animation effect

const icons = document.querySelectorAll(".icon");

icons.forEach(icon => {

    icon.addEventListener("mouseenter", () => {

        icon.style.boxShadow = "0 0 15px rgba(255,255,255,0.5)";

    });

    icon.addEventListener("mouseleave", () => {

        icon.style.boxShadow = "none";

    });

});



document.querySelectorAll(".nav-links").addEventListener("click", function() {

    // alert("Projects section coming soon!");
    document.getElementById("about").style.display="block";
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });


});
