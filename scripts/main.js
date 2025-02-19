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
            contactMessage.textContent = "Your message has been sent! ✅"
            setTimeout(() => { contactMessage.textContent = "" }, 5000)

            contactForm.reset() // Clear Form
        }, () => {
            contactMessage.textContent = "❌ Message failed to send!"
        })

}
contactForm.addEventListener("submit", sendEmail)


/* ===================== Display Scroll to top button ===========================*/
const scrollUpBtn = () => {
    const scrollUpBtn = document.getElementById("scroll-up")
    this.scrollY >= 400 ? scrollUpBtn.classList.add("display-scroll")
        : scrollUpBtn.classList.remove("display-scroll")
}
window.addEventListener("scroll", scrollUpBtn)


/* ==================== Active link: Scroll Sections ========================*/
const sections = document.querySelectorAll("section[id]")

// Highlights the active nav link based on scroll position
const scrollActive = () => {
    const scrollDown = window.scrollY  // Current vertical scroll position

    // Loop through each sec to determine if it is in the viewport
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute("id"),
            // Select the corresponding nav link
            sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']')

            // if sec is within viewport, add active class to higlight navlink
        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add("active-link")
        } else {
            sectionsClass.classList.remove("active-link")
        }
    })
}
// Add event to trigger scrollActive on page scroll
window.addEventListener("scroll", scrollActive)
