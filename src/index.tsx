import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

import { Global, css } from "@emotion/react"
import { SizeProvider } from "./Context/SizeProvider"

const GlobalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100vh;
    background: #242424;

    font-family: "Urbanist", sans-serif;
    font-display: fallback;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <Global styles={GlobalStyle} />
    <SizeProvider>
      <App />
    </SizeProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
