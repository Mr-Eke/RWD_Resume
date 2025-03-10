// Mobile nav menu interactiveness: Toggle open and close
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const navList = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links a');

    // Toggle menu on icon click
    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('active');
        navList.classList.toggle('active');
    });

    // Close menu when clicking any link (mobile only)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuIcon.classList.remove('active');
            navList.classList.remove('active');
        });
    });
});


// Changes the header appearance when theres a vertical scroll above 150px
// To let the website contents scroll behind the pinned nav
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    window.scrollY > 50 ? header.classList.add("scroll-header")
        : header.classList.remove("scroll-header")
});


/* ============ EmailJs API Integration (Cntact Message Functionality) ==============*/
const contactForm = document.getElementById("contact-form"),
    contactMessage = document.getElementById("contact-message")

const sendEmail = (event) => {
    event.preventDefault()

    // SeviceID - TemplateID - #Form - PublicKey
    emailjs.sendForm("service_f0n72lt", "template_4cs1frb", "#contact-form", "eVzV4a0lXyF737Dw4")
        // Show message progress & take it off after 5sec
        .then(() => {
            contactMessage.textContent = "Your message has been sent! ✅"
            setTimeout(() => { contactMessage.textContent = "" }, 5000)
            contactForm.reset() // Clear Form
        }, () => {
            contactMessage.textContent = "❌ Message failed to send!"
        })
}
contactForm.addEventListener("submit", sendEmail)
