const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu-list");

if (burger && menu) {
  burger.addEventListener("click", () => {
    menu.classList.toggle("open");
    burger.classList.toggle("active");

    const isOpen = menu.classList.contains("open");
    burger.setAttribute("aria-expanded", isOpen);
  });
  const menuLinks = menu.querySelectorAll("a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      burger.classList.remove("active");
      burger.setAttribute("aria-expanded", "false");
    });
  });
}
