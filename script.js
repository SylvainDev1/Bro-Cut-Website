const burger = document.querySelector("nav svg");
const nav = document.querySelector(".links");

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
