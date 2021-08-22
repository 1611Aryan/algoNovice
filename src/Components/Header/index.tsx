import styled from "@emotion/styled"
import React from "react"
import { useConfig } from "../../Context/ConfigProvider"
import { useSize } from "../../Context/SizeProvider"

const Header = () => {
  const { size, setSize } = useSize()
  const { config, setConfig } = useConfig()

  const sizeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSize(parseInt(e.target.value))
  }

  const sortTypeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setConfig(config => ({ ...config, sortType: e.target.value }))
  }

  const start = () => {
    if (!config.start) setConfig(config => ({ ...config, start: true }))
  }

  return (
    <StyledHeader>
      <h1>AlgoNovice</h1>

      <nav>
        <div className="inputField">
          <input
            type="number"
            min={5}
            max={75}
            value={size}
            name="arraySize"
            onChange={sizeHandler}
          />
          <label htmlFor="arraySize">Size</label>
        </div>

        <div className="inputField">
          <select name="algorithm" onChange={sortTypeHandler}>
            <option value="bubble">Bubble Sort</option>
            <option value="insertion">Insertion Sort</option>
            <option value="selection">Selection Sort</option>
          </select>
          <label htmlFor="algorithm">Algorithm</label>
        </div>
        <div className="inputField">
          <button
            className={config.start ? "button-active" : ""}
            onClick={start}
          >
            Sort✔
          </button>
        </div>
      </nav>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  width: 100vw;
  padding: 1em clamp(1em, 3vw, 2em);
  background: teal;

  display: flex;
  flex-direction: column;

  overflow: hidden;

  h1 {
    font-size: clamp(1.25rem, 3vw, 2rem);
    color: #fff;
  }

  nav {
    margin-top: clamp(0.5rem, 2vw, 1rem);

    display: flex;
    align-items: center;
    justify-content: flex-start;

    > .inputField + .inputField {
      margin-left: clamp(1em, 3vw, 2em);
    }

    .inputField {
      display: flex;
      justify-content: center;
      align-items: center;

      > * + * {
        margin-left: clamp(0.25em, 1vw, 0.5em);
      }

      label {
        color: yellow;
        font-size: clamp(0.9em, 2vw, 1.2em);
      }

      input,
      select {
        border: 0;
        font-size: clamp(0.65rem, 1vw, 1rem);
        padding: 0.2em;
        background: #fff;
        &:focus {
          outline: none;
        }
      }

      button {
        padding: 0.2em 0.5em;
        cursor: pointer;
        border: 0;
        font-size: clamp(0.65rem, 1vw, 1rem);
        background: #fff;

        &:focus {
          outline: none;
        }
      }

      .button-active {
        cursor: not-allowed;
      }
    }
  }
`

export default Header
