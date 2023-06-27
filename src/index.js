import "./styles.css";
console.log("test");

const imgUrl = process.env.PUBLIC_URL + "/img/test.jpg";
const imgElement = document.createElement("img");
imgElement.src = imgUrl;
