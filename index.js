




var copyButtons = document.querySelectorAll(".copyBtn");
copyButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
        var copiedLabel = btn.nextElementSibling;
        copiedLabel.classList.remove("d-none");
        setTimeout(function () {
            copiedLabel.classList.add("d-none");
        }, 2000);
    });
});

let navLinks = document.querySelectorAll(".nav-link, .navbar-brand");

navLinks.forEach(link => {
  link.addEventListener("click", function (e) {

   
    navLinks.forEach(l => l.classList.remove("active"));

    
    this.classList.add("active");


    e.stopPropagation();
  });
});


document.addEventListener("click", function () {
  navLinks.forEach(l => l.classList.remove("active"));
});