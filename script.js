const burger = document.querySelector("nav svg");
const nav = document.querySelector(".links");

// const videos = gsap.utils.toArray(".video");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});

document.querySelectorAll(".links a").forEach((link) =>
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    nav.classList.remove("active");
  })
);
