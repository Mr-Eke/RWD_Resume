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
