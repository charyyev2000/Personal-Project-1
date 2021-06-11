const nav = document.querySelector("nav");
const open = document.querySelector(".open");
const close = document.querySelector(".close");

open.onclick = () => {
  nav.classList.add("active");
};
