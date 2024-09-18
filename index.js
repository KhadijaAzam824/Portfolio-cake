const menuIcon = document.querySelector('menu-icon');
const navlinks = document.querySelector('nav.links');

menuIcon.onclick = () => {
    menuIcon.classList.toggle(bx-x);
    navlinks.classList.toggle('active');

}

