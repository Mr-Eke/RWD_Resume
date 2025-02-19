// Display Mobile Menu
const navBarMenu = document.getElementById("nav-menu"),
    navBarClose = document.getElementById("nav-close"),
    navBarToggle = document.getElementById("nav-toggle")

// Check if mobile nav icon is active & display menu
if (navBarToggle) {
    navBarToggle.addEventListener("click", () => {
        navBarMenu.classList.add("display-menu")
    })
}

// Check if nav close icon is active & Hide Menu
if (navBarClose) {
    navBarClose.addEventListener("click", () => {
        navBarMenu.classList.remove("display-menu")
    })
}

// Hide Mobile Menu
const navBarLinks = document.querySelectorAll('.navbar-link')

const navLinkAction = () => {
    const navBarMenu = document.getElementById("nav-menu")
    // Hide menu when a nav link is clicked
    navBarMenu.classList.remove("display-menu")
}
navBarLinks.forEach(link => link.addEventListener("click", navLinkAction))

// Changes the header appearance when theres a vertical scroll above 49px
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    window.scrollY > 0 ? header.classList.add("scroll-header")
        : header.classList.remove("scroll-header")
});

/* =============== EmailJs API  ============*/
const contactForm = document.getElementById("contact-form"),
    contactMessage = document.getElementById("contact-message")

const sendEmail = (event) => {
    event.preventDefault()

    // SeviceID - TemplateID - #Form - PublicKey
    emailjs.sendForm("service_f0n72lt", "template_4cs1frb", "#contact-form", "eVzV4a0lXyF737Dw4")
        // Show message progress & take it off after 5sec
        .then(() => {
            contactMessage.textContent = "✅ Your message has been sent!"
            setTimeout(() => {
                contactMessage.textContent = ""
            }, 5000)
        })
}
contactForm.addEventListener("submit", sendEmail)
