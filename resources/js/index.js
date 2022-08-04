/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var links = document.getElementById("links");
  var nav = document.getElementById("nav");
  var navLinks = document.getElementById("nav-links");
  var navListItem = document.getElementById("nav-list-item");
  if (links.style.display === "block") {
    links.style.display = "none";
  } else {
    links.style.display = "block";
    // Styling navigation
    nav.style.backgroundColor = "#333";
    nav.style.position = "absolute";
    nav.style.top = "84px";
    // Styling links
    navLinks.style.padding = "14px 16px";
    navLinks.style.display = "block";

    navListItem.style.float = "none";
    navListItem.style.width = "100%";
  }
}