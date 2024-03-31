document.addEventListener("DOMContentLoaded", function () {
  let navbar = document.querySelector(".navbar");
  let navbarCollapse = navbar.querySelector(".navbar-collapse");
  let toggleBtn = navbar.querySelector(".navbar-toggler");

  toggleBtn.addEventListener("click", function () {
    navbarCollapse.classList.toggle("show");
  });
});
