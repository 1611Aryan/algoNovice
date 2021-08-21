import styled from "@emotion/styled"
import React from "react"
import Array from "./Components/Array"
import Header from "./Components/Header"

function App() {
  return (
    <StyledApp>
      <Header />
      <Array />
    </StyledApp>
  )
}

const StyledApp = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`

export default App
