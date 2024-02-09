export default function Contact() {
  const contentElement = document.querySelector("#content");

  const heading = document.createElement("h1");
  heading.textContent = "Contact Us";

  const paragraph = document.createElement("p");
  paragraph.textContent =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam sed nulla soluta repellendus in neque mollitia inventore doloribus! Est a nesciunt odio facilis cum dolores illum autem. Minus fugit nisi eaque voluptates molestias deserunt sapiente numquam hic ea incidunt consectetur aperiam quia eveniet sunt, aliquid harum. Qui voluptatum quasi molestias ratione ullam laborum consectetur quam, dolorem exercitationem reiciendis voluptate illum harum facere quas sunt officiis nemo, minima doloribus? Expedita nesciunt enim ad quia, tenetur at perspiciatis? Hic iure a quam.";

  contentElement.appendChild(heading);
  contentElement.appendChild(paragraph);
}
