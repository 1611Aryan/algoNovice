import styled from "@emotion/styled"
import { useSize } from "../../Context/SizeProvider"

const Header = () => {
  const { size, setSize } = useSize()

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSize(parseInt(e.target.value))
  }

  return (
    <StyledHeader>
      <h1>AlgoNovice</h1>

      <nav>
        <div className="inputField">
          <input
            type="number"
            min={25}
            max={100}
            value={size}
            name="arraySize"
            onChange={changeHandler}
          />
          <label htmlFor="arraySize">Size</label>
        </div>
      </nav>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  width: 100vw;
  padding: 1em 2em;
  background: teal;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2rem;
    color: #fff;
  }

  nav {
    margin-top: 1em;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    .inputField {
      display: flex;
      justify-content: center;
      align-items: center;

      > * + * {
        margin-left: 0.5em;
      }

      input {
        border: 0;
        font-size: 1em;
        padding: 0.2em;
        &:focus {
          outline: none;
        }
      }

      label {
        color: yellow;
        font-size: 1.2em;
      }
    }
  }
`

export default Header
