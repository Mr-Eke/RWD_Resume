// Display Mobile Menu
const navBarMenu = document.getElementById("nav-menu"),
navBarClose = document.getElementById("nav-close"),
navBarToggle = document.getElementById("nav-toggle")

console.log('object oooo')

// Check if mobile nav icon is active
if (navBarToggle) {
    navBarToggle.addEventListener("click", () => {
        console.log("Toggle clicked")
        navBarMenu.classList.add("display-menu")
    })
}

// Check if nav close icon is active
if (navBarClose) {
    navBarClose.addEventListener("click", () => {
        navBarMenu.classList.remove("display-menu")
    })
}
