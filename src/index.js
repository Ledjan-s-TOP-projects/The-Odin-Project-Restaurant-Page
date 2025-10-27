import { about } from "./about";
import { home } from "./home";
import { menu } from "./menu";
//initial population of the webpage
home();
//query selection
const nav = document.querySelector(".nav");
//event delegation for the navbar
nav.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const pages = {
      Home: home,
      Menu: menu,
      About: about,
    };
    const selected = event.target.textContent;

    if (pages[selected]) {
      content.textContent = "";
      pages[selected]();
    }
  }
});
