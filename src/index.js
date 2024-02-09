import Home from "./home";
import Menu from "./menu";
import Contact from "./contact";

const contentElement = document.querySelector("#content");
const navItems = document.querySelectorAll("button");

navItems.forEach((item) =>
  item.addEventListener("click", () => {
    if (item === navItems[0]) {
      contentElement.innerHTML = "";
      Home();
    }
    if (item === navItems[1]) {
      contentElement.innerHTML = "";
      Menu();
    }
    if (item === navItems[2]) {
      contentElement.innerHTML = "";
      Contact();
    }
  })
);

window.addEventListener("load", Home);
