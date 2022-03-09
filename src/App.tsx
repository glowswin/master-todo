import React from "react";
import { createGlobalStyle } from "styled-components";
import { darkTheme } from "./theme";
import { ThemeProvider } from "styled-components";
import Router from "./Router";
const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	font-weight: 800;
  font-family: 'Source Sans Pro', sans-serif;
	line-height: 1;
	font-size:20px;
  background-color: ${(props) => props.theme.bgColor};
  color:${(props) => props.theme.txtColor};
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
a{
	text-decoration: none;
	color:inherit;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
