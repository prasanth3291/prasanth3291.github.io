const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

function myFunction() {
    var element = document.getElementById("genderSelect");
    element.classList.remove("d-none");
  }
  function myFunction1() {
      var element = document.getElementById("genderSelect");
      element.classList.add("d-none");
    }