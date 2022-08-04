/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var navContainer = document.getElementsByClassName("header-container");
  var links = document.getElementById("links");
  var nav = document.getElementById("nav");
  var navLinks = document.getElementById("nav-links");
  var navListItem = document.getElementById("nav-list-item");
  if (links.style.display === "block") {
    links.style.display = "none";
  } else {
    links.style.display = "block";
    // Styling navigation
    nav.style.backgroundColor = "rgba(8, 8, 12, 0.95)";
    nav.style.position = "absolute";
    nav.style.top = "84px";
    // Styling links
    navLinks.style.padding = "16px 48px";
    navLinks.style.display = "block";
    navLinks.style.width = "100%";
    navLinks.style.margin = "0 auto";

    navListItem.style.float = "none";
    navListItem.style.width = "100%";

    navContainer.style.backgroundColor = "rgba(8, 8, 12, 0.95)";
  }
}

/* Fade in effect */

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);