import img from "../assets/images/Home.png";
const content = document.querySelector("#content");

export const home = () => {
  const homePage = document.createElement("div");
  const heading = document.createElement("h1");
  heading.textContent = "MeLed Restaurant";

  const paragraph = document.createElement("p");
  paragraph.textContent = `Our restaurant celebrates seasonal, farm-fresh ingredients with bold,
thoughtfully composed dishes that highlight local producers. The warm,
modern dining room and attentive service create an inviting atmosphere
ideal for date nights, family gatherings, or a relaxed meal at the bar.
Pair our creative cocktails and curated wine list with any entrée for a
memorable, flavorful experience.`;

  const image = document.createElement("img");
  image.src = img;
  image.alt = "a chef plating a dish";

  homePage.append(image, heading, paragraph);
  content.appendChild(homePage);
};
