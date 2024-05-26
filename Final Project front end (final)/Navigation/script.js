const searchIcon = document.querySelector(".search");
const searchBar = document.querySelector(".input");
const closeSearch = document.querySelector(".cross");
const Searchtext = document.querySelector(".se");

searchIcon.addEventListener("click", function () {
  searchBar.classList.add("active");
  searchIcon.classList.add("active-s");
  Searchtext.style.display = "flex";
  closeSearch.style.display = "flex";
});

// Close search bar when close button is clicked
closeSearch.addEventListener("click", function () {
  searchBar.classList.remove("active");
  searchIcon.classList.remove("active-s");
  Searchtext.style.display = "none";
  closeSearch.style.display = "none";
});

document.querySelector(".terms").addEventListener("click", function () {
  window.location.href = "../Navigation/Terms.html";
});

document.querySelector(".rules").addEventListener("click", function () {
  window.location.href = "../Navigation/rules.html";
});

document.querySelector(".uniform").addEventListener("click", function () {
  window.location.href = "../Navigation/uniform.html";
});

document.querySelector(".career").addEventListener("click", function () {
  window.location.href = "../Navigation/career.html";
});

document.querySelector(".contact").addEventListener("click", function () {
  window.location.href = "mailto:example@gmail.com";
});

document.querySelector(".hf1").addEventListener("click", function() {
  window.location.href = "../Home-page/Home.html";
});