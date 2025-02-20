document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const navList = document.querySelector('.nav-links');

    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('active');
        navList.classList.toggle('active');
    });

    // Close menu when clicking a link (mobile only)
    if (window.innerWidth < 769) {
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuIcon.classList.remove('active');
                navList.classList.remove('active');
            });
        });
    }
});

// Changes the header appearance when theres a vertical scroll above 49px
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    window.scrollY > 150 ? header.classList.add("scroll-header")
        : header.classList.remove("scroll-header")
});
