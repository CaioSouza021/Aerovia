// animação da Header
let navBar = document.querySelector("#header");

document.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;

  if (scrollTop > 0) {
    navBar.classList.add("rolar");
  } else {
    navBar.classList.remove("rolar");
  }
});

// Animação do botao menu mobile
let btnMenuMob = document.querySelector("#btn-menu-mob");
let line1 = document.querySelector(".line-menumob-1");
let line2 = document.querySelector(".line-menumob-2");
let menuMobile = document.querySelector("#menu-mobile");
let body = document.querySelector("body");

btnMenuMob.addEventListener("click", () => {
  line1.classList.toggle("ativo1");
  line2.classList.toggle("ativo2");
  menuMobile.classList.toggle("abrir");
  body.classList.toggle("block");
});

document.addEventListener("scroll", function () {
  const section = document.querySelector(".hoteis");
  const bg = section?.querySelector("::before"); // isso não funciona, precisamos fazer de outro jeito

  const scrollY = window.scrollY;
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;

  if (
    scrollY + window.innerHeight >= sectionTop &&
    scrollY <= sectionTop + sectionHeight
  ) {
    const scrolled = (scrollY - sectionTop) * 0.3; // velocidade do efeito
    section.style.setProperty("--parallax", `${scrolled}px`);
  }
});
