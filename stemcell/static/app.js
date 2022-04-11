const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector('.navbar__menu');
const nav = document.querySelector('.navbar');

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    nav.style.top = "0";
  } else {
    nav.style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}


window.onscroll = function () {
  let scrollTop = +window.scrollY;

  if (scrollTop > 650) {
    animation.show();
  } else {
    animation.init();
  }
}