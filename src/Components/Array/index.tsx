import styled from "@emotion/styled"
import { useState, useEffect } from "react"
import { useSize } from "../../Context/SizeProvider"

const Array = () => {
  const { size } = useSize()

  const [array, setArray] = useState<number[]>([0])

  useEffect(() => {
    const tempArray = []

    for (let i = 0; i < size; i++) {
      const value = Math.floor(Math.random() * 98 + 2)
      tempArray.push(value)
    }

    setArray([...tempArray])
  }, [size])

  return (
    <StyledArray>
      <ul>
        {array &&
          array.map((entry, index) => (
            <StyledListItem height={entry} key={index}>
              {entry}
            </StyledListItem>
          ))}
      </ul>
    </StyledArray>
  )
}

const StyledArray = styled.main`
  width: 100vw;
  overflow: hidden;
  flex: 1;
  ul {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: flex-end;

    list-style-type: none;

    padding: 1em 0 0;
  }
`

const StyledListItem = styled.li<{ height: number }>`
  flex: 1;
  color: #fff;
  height: ${props => props.height}%;
  background: red;
  border: 1px solid white;
  text-align: center;
`

export default Array
