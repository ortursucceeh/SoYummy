import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
}

:root {
  --color-white-0: #fff;
  --color-white-100: #f0f0f0;
  --color-white-200: #fafafa;

  --color-grey-0: #bdbdbd;
  --color-grey-100: #f3f4f6;

  --color-green-0: #8BAA36;
  --color-green-100: #3CBC81;

  --color-dark-0:  #22252A;
  --color-dark-100:  #23262A;
  --color-dark-200:  #22252A;
  --color-dark-300:  #1E1F28;
  --color-dark-400:  #001833;
  --color-dark-500:  #000000;

  --color-orange-0: #E74A3B;

}

body {
  font-family: "Poppins", sans-serif;
  color: #22252A;

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
  position: relative;
  
}


input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}


a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;
}
`;

export default GlobalStyles;
