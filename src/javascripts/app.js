require('./modules')

console.log(`app.js has loaded!`)

const siteBody      = document.querySelector('body');
const menuToggle    = document.querySelector('.ui-menu-toggle');
const menuClose     = document.querySelector('.ui-menu-close');
const menuDrawer    = document.querySelector('.ui-nav-mobile');
var isActive        = false;

// Use escape key to close drawer
document.onkeyup = function(e) {
    e = e || window.event;
    var charCode = (typeof e.which == "number")?e.which:e.keyCode;
    if (charCode == 27 && isActive) { 
        menuClose.click();
    }
}

// add the classes
function addClasses(first, second) {
    first.classList.add('is-active');
    second.classList.add('is-active');
}
// remove the classes
function removeClasses(first, second) {
    first.classList.remove('is-active');
    second.classList.remove('is-active');
}

// toggle menu
menuToggle.onclick = function toggleNav (event) {
  if (isActive === true) {
    removeClasses(menuToggle,menuDrawer);
    menuToggle.focus();
    isActive = false;

  } else {
    addClasses(menuToggle,menuDrawer);
    menuClose.focus();
    isActive = true;
  }
}

// close menu
menuClose.onclick = function closeNav (event) {
    if (isActive === true) {
        removeClasses(menuToggle,menuDrawer);
        menuToggle.focus();
        isActive = false;
    } else {
        addClasses(menuToggle,menuDrawer);
        isActive = true;
    }
}