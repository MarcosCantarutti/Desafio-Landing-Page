// Menu mobile/desktop
const navbarBtn = document.querySelector('.menu-toggle')
const navbarMenu = document.querySelector('.navbar-menu')

navbarBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('show-links')
})


// testimonials slides 
if (window.innerWidth > 900) {
    document.addEventListener('DOMContentLoaded', function () {
        var splide = new Splide('.splide', {
            type: 'loop',
            perPage: 3,
        });
        splide.mount();
    });
} else {
    document.addEventListener('DOMContentLoaded', function () {
        var splide = new Splide('.splide', {
            type: 'loop',
            perPage: 1,
        });
        splide.mount();
    });
}



