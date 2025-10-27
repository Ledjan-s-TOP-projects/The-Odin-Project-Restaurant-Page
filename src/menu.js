import img from "../assets/images/Menu.png";
const content = document.querySelector("#content");

export const menu = () => {
  const menuPage = document.createElement("div");
  const heading = document.createElement("h1");
  heading.textContent = "Our Menu";

  const paragraph = document.createElement("p");
  paragraph.textContent = `Explore our diverse menu featuring a variety of dishes crafted with fresh, local ingredients. From appetizers to desserts, each item is designed to delight your taste buds and provide a memorable dining experience. Whether you're in the mood for a hearty entrée or a light snack, our menu has something for everyone.`;

  const image = document.createElement("img");
  image.src = img;
  image.alt = "a selection of dishes from MeLed Restaurant";
  menuPage.append(image, heading, paragraph);
  content.appendChild(menuPage);
};
