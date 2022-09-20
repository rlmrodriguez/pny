const navMenu = document.querySelector("#navMenu");
const navItems = document.querySelectorAll(".nav__menu-item");
const navLinks = document.querySelectorAll(".nav__menu-item a");
const openBtn = document.querySelector("#openBtn");
const closeBtn = document.querySelector("#closeBtn");
const navBtn = document.querySelector("#navBtn");
const sections = document.querySelectorAll("section");
const serviceCards = document.querySelectorAll(".provide-services__card");
const chevrons = document.querySelectorAll("#chevron");
const workText = document.querySelector("#workText");
const displayedImg = document.querySelector("#displayedImg");
const displayedTitle = document.querySelector("#displayedTitle");
const displayedText = document.querySelector("#displayedText");

// Open/Close nav menu
const toggleNav = (btn) => {
  btn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    navMenu.classList.toggle("fade-in");
    openBtn.classList.toggle("hide");
    closeBtn.classList.toggle("hide");
    if (window.getComputedStyle(navBtn).display !== "none") {
      document.body.classList.toggle("no-scroll");
    }
  });
};

toggleNav(navBtn);

navItems.forEach((item) => {
  toggleNav(item);
});

// Service cards
serviceCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    serviceCards.forEach((card) => card.classList.remove("active"));
    card.classList.toggle("active");
  });
});

// Work cards
chevrons.forEach((chevron) => {
  chevron.addEventListener("click", (e) => {
    chevron.classList.toggle("fa-chevron-down");
    chevron.classList.toggle("fa-chevron-up");
    chevron.parentElement.nextElementSibling.classList.toggle("show");
  });
});

// Swiper
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
  },
  slidesPerView: 2.4,
  spaceBetween: 15,
  grabCursor: true,
  breakpoints: {
    768: { slidesPerView: 3.5 },
  },
});

const portfolioArr = [
  {
    img: "./assets/images/port1.webp",
    title: "Expedita Distinctio",
    text: "SEO - February 2021",
  },
  {
    img: "./assets/images/port2.webp",
    title: "Facilis Est",
    text: "Logo and Graphics Design - June 2021",
  },
  {
    img: "./assets/images/port3.webp",
    title: "Nam Libero",
    text: "Web Hosting - December 2021",
  },
  {
    img: "./assets/images/port4.webp",
    title: "Cam Soluta",
    text: "UI/UX Design - March 2022",
  },
  {
    img: "./assets/images/port5.webp",
    title: "Nobis Esteon",
    text: "Google Analytics Integration - June 2022",
  },
];

swiper.on("slideChange", (e) => {
  const activeIndex = e.realIndex;
  displayedImg.src = portfolioArr[activeIndex].img;
  displayedTitle.textContent = portfolioArr[activeIndex].title;
  displayedText.textContent = portfolioArr[activeIndex].text;
});
