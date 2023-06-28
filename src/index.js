import "./styles.css";
console.log("test");

const imgUrl = /*process.env.PUBLIC_URL +*/ "/dist/img/Pic1.jpg";
const imgElement = document.createElement("img");
imgElement.src = imgUrl;
