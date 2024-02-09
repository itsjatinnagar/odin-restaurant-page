export default function Home() {
  const contentElement = document.querySelector("#content");

  const image = document.createElement("img");
  image.src = "https://images.unsplash.com/photo-1414235077428-338989a2e8c0";
  image.style.height = "400px";
  image.style.width = "auto";

  const heading = document.createElement("h1");
  heading.textContent = "Restaurant Page";

  const paragraph = document.createElement("p");
  paragraph.textContent =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem assumenda necessitatibus aperiam ab fugiat tempora. A natus necessitatibus dolorum aspernatur dicta quam provident, velit qui corrupti voluptate quibusdam repellat, maiores placeat culpa at molestiae aliquam quia fugit distinctio hic ipsa? Quod explicabo aperiam sed dicta eligendi doloremque nisi facilis perferendis, eum in deleniti quae optio reprehenderit delectus veniam, ipsa expedita dolorem accusantium voluptatibus a maxime minus. Neque perspiciatis quas incidunt eius autem, hic ea, sed pariatur dignissimos voluptatibus velit culpa.";

  contentElement.appendChild(image);
  contentElement.appendChild(heading);
  contentElement.appendChild(paragraph);
}
