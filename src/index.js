import "./styles.css";
import { createTags, expandHtml } from "./modules/functions";

const header = createTags("header");

expandHtml(document.body.firstChild, header);

const imgUrl = /*process.env.PUBLIC_URL +*/ "/dist/img/Pic1.jpg";
const imgElement = document.createElement("img");
imgElement.src = imgUrl;
