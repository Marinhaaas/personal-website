const logo = document.querySelector('.logo');
const heroIcon = document.querySelector('.hero-icon');
const header = document.querySelector('.header');
const headerMenu = document.querySelector('.header-menu');
const headerWrapper = document.querySelector('.header-wrapper');
const headerHamburger = document.querySelector('.header-hamburger');


document.addEventListener('DOMContentLoaded', function() {
    document.documentElement.scrollTop = 0;
});

heroIcon.addEventListener('click', function() {
    document.querySelector('.section-first').scrollIntoView();
})

window.addEventListener('scroll', function() {
    if (this.scrollY > 200) {
        header.style.backgroundColor = "white";
        header.style.padding = "2.5rem 0";
        logo.style.color = "black";
        header.style.textAlign = "inherit";
        if (this.innerWidth <= 767) {
            headerMenu.classList.remove('visible');
            headerHamburger.classList.add('visible');
        } else {
            headerMenu.classList.add('visible');
            headerHamburger.classList.remove('visible');
        }
    } else {
        header.style.backgroundColor = "";
        header.style.padding = "3.5rem 0";
        logo.style.color = "white";
        header.style.textAlign = "center";
        headerMenu.classList.remove('visible');
        headerHamburger.classList.remove('visible');
    }
});

window.addEventListener('resize', function() {
    if (this.scrollY > 200) {
        if (this.innerWidth <= 767) {
            headerMenu.classList.remove('visible');
            headerHamburger.classList.add('visible');
        } else {
            headerMenu.classList.add('visible');
            headerHamburger.classList.remove('visible');
        }
    }
});

