import img from "../assets/images/About.jpg";
const content = document.querySelector("#content");

export const about = () => {
  const aboutPage = document.createElement("div");
  const heading = document.createElement("h1");
  heading.textContent = "About MeLed Restaurant";

  const paragraph = document.createElement("p");
  paragraph.textContent = `At MeLed Restaurant, we are passionate about delivering an exceptional dining experience that combines exquisite flavors, impeccable service, and a warm ambiance. Our culinary team is dedicated to crafting innovative dishes using the freshest ingredients sourced from local farms and artisans. Whether you're joining us for a special occasion or a casual meal, we strive to create memorable moments for every guest. Come and discover the art of fine dining at MeLed Restaurant, where every detail is thoughtfully curated to delight your senses.`;

  const image = document.createElement("img");
  image.src = img;
  image.alt = "interior view of MeLed Restaurant";

  aboutPage.append(image, heading, paragraph);
  content.appendChild(aboutPage);
};
