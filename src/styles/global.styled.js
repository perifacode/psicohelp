import { createGlobalStyle } from "styled-components";
import top from "../assets/ellipse_top.svg";
import bottom from "../assets/ellipse_bottom.svg";

export const GlobalStyle = createGlobalStyle`

  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-weight: inherit;
  font-style: inherit;
  font-family: inherit;
  font-size: 100%;
  vertical-align: baseline;
}

body {
  font-family:  Rubik,Arial,sans-serif;
  font-weight: 400;
  line-height:400px;
  text-rendering: optimizeLegibility;
  line-height: 1.15;
  background-color:#e5e5e5;
  background-image:  url(${top}),url(${bottom});
  background-repeat: no-repeat, no-repeat;
  background-position: top left, bottom right;
  background-size:300px 300px;
}

@media (max-width: 1268px) {
  body {
    background: none;
    background-color:#e5e5e5;
  }
}


input,
button,
textarea {
  border:none;
  background: #e5e5e5;
}

a,
body,
ul,
li,
a,
p {
  margin: 0px;
  padding: 0px;
  list-style: none;
  text-align:center;
  text-decoration:none;
}

img {
  max-width:100%;
}

`;
