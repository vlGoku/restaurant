import "./styles.css";
import { createTags, expandHtml } from "./modules/functions";

const content = document.querySelector("#content");
console.log(document.body.childNodes[1]);
const erste = createTags(["div"]);
const zweite = createTags(["h1"]);

expandHtml(content, erste);
expandHtml(content.firstChild, zweite);

erste.id = "hallo";

/* "/dist/img/Pic1.jpg"; */

/*const imgUrl = /*process.env.PUBLIC_URL +*/
/* const imgElement = document.createElement("img");
imgElement.src = imgUrl; */
