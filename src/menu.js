const menuItems = [
  "Samosa",
  "Vada Pav",
  "Pav Bhaji",
  "Sev Puri",
  "Bhel Puri",
  "Aloo Paratha",
  "Paneer Paratha",
  "Chai",
  "Lassi",
  "Chas",
  "Gulab Jamun",
  "Halwa",
  "Barfi",
];

export default function Menu() {
  const contentElement = document.querySelector("#content");

  const heading = document.createElement("h1");
  heading.textContent = "Restaurant Menu";

  const list = document.createElement("ul");
  menuItems.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    list.appendChild(listItem);
  });

  contentElement.appendChild(heading);
  contentElement.appendChild(list);
}
