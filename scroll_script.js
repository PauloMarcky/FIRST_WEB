const pages = document.querySelectorAll(".page");
const next = document.getElementById("nextBTN");
const previous = document.getElementById("previousBTN");
const links = document.querySelectorAll(".link");
const home = document.getElementById("home_link");
const about = document.getElementById("about_link");
const contact = document.getElementById("contact_link");
const logIn = document.getElementById("logIn_btn");



let currentPage = 0;

home.addEventListener("click",
  function () {
    currentPage = 0;
    updatePrevBTN();
    updateNextBTN();

    links.forEach(link => link.classList.remove("active"));
    links[0].classList.add("active");
    pages[0].scrollIntoView({ behavior: "smooth", inline: "start" });
  });

about.addEventListener("click",
  function () {
    currentPage = 1;
    updateBTN();
    updateNextBTN();

    links.forEach(link => link.classList.remove("active"));
    links[1].classList.add("active");
    pages[1].scrollIntoView({ behavior: "smooth", inline: "start" });
  });

contact.addEventListener("click",
  function () {
    currentPage = 2;
    updatePrevBTN();
    updateNextBTN();

    links.forEach(link => link.classList.remove("active"));
    links[2].classList.add("active");
    pages[2].scrollIntoView({ behavior: "smooth", inline: "start" });
  });

function nextPage() {
  if (currentPage < pages.length - 1) {
    currentPage += 1;
    updatePrevBTN();
    updateNextBTN();

    links.forEach(link => link.classList.remove("active"));
    links[currentPage].classList.add("active");

    pages[currentPage].scrollIntoView({ behavior: "smooth", inline: "start" });
  }
}

function previousPage() {
  if (currentPage > 0) {
    currentPage -= 1;
    updatePrevBTN();
    updateNextBTN();

    links.forEach(link => link.classList.remove("active"));
    links[currentPage].classList.add("active");

    pages[currentPage].scrollIntoView({ behavior: "smooth", inline: "start" });
  }
}

function updatePrevBTN() {
  if (currentPage === 0) {
    previous.style.opacity = 0;
  } else {
    previous.style.opacity = 1;
  }
}
function updateNextBTN() {
  if (currentPage === pages.length - 1) {
    next.style.opacity = 0;
  } else {
    next.style.opacity = 1;
  }
}
function goLogIn() {
  alert("LETS LOG IN BRO!")
}

next.addEventListener("click", nextPage);
previous.addEventListener("click", previousPage);
logIn.addEventListener("click", goLogIn)

