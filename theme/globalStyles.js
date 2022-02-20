import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

 html,
body {
  padding: 0;
  margin: 0;
}
body {
  font-family: ${({ theme }) => theme.fonts.primary};
}
a {
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
*::after,
*::before {
  box-sizing: inherit;
}
ul {
  list-style-type: none;
}
h1, h2, h3, h4, h5, h6 {
  padding: 0;
  margin: 0;
}

.slide img {
  height: 100%;
  object-fit: cover;
  border-radius: 7px;

}
.control-dots {
  bottom: 15px !important;
  left: 15px !important;
  text-align: left !important;
  margin: 10px 20px !important;
}
.dot {
  width: 12px !important;
  height: 12px !important;
  box-shadow: none !important;
  background: white !important;
  opacity: 1 !important;
  transition: all 0.2s ease-in-out !important;

}
.dot.selected {
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 12px !important;
  width: 20px !important;
}
.productImage img{
  width: 100%;
}
`;

export default GlobalStyle;
