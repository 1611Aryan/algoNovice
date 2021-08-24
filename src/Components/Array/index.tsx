import styled from "@emotion/styled"
import { useState, useEffect } from "react"
import { useConfig } from "../../Context/ConfigProvider"
import { useSize } from "../../Context/SizeProvider"

const Main = () => {
  const { size } = useSize()
  const { config, setConfig } = useConfig()

  const [array, setArray] = useState<
    {
      value: number
      active: boolean
    }[]
  >()

  const [init, setInit] = useState(false)

  useEffect(() => {
    const tempArray = Array.isArray(array) ? array : []

    let length = size - tempArray.length

    if (!init) {
      length = size
      setInit(true)
    }

    if (tempArray.length - size > 0) {
      tempArray.pop()
      return setArray([...tempArray])
    }

    for (let i = 0; i < length; i++) {
      const value = Math.random() * 90 + 10
      tempArray.push({
        value,
        active: false,
      })
    }

    setArray([...tempArray])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size])

  useEffect(() => {
    if (config.start) {
      config.sortType === "bubble" && bubbleSort()
      config.sortType === "insertion" && insertionSort()
      config.sortType === "selection" && selectionSort()
      config.sortType === "quick" && quickSort()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config])

  const bubbleSort = async () => {
    const tempArray = array || []
    const size = tempArray ? tempArray.length : 0

    for (let i = 0; i < size; i++)
      for (let j = 0; j < size - i - 1; j++) {
        tempArray[j].active = true
        if (tempArray[j].value > tempArray[j + 1].value)
          [tempArray[j], tempArray[j + 1]] = [tempArray[j + 1], tempArray[j]]
        setArray([...tempArray])
        await new Promise(resolve => setTimeout(resolve, 1))
        tempArray[j].active = false
      }

    setConfig(config => ({ ...config, start: false }))
  }

  const insertionSort = async () => {
    const tempArray = array || []
    const size = tempArray ? tempArray.length : 0
    for (let key = 1; key < size; key++) {
      const element = tempArray[key]
      for (let i = key; i > 0; i--) {
        tempArray[i].active = true
        if (tempArray[i].value < tempArray[i - 1].value) {
          tempArray[i] = tempArray[i - 1]
          tempArray[i - 1] = element
        }
        setArray([...tempArray])
        await new Promise(resolve => setTimeout(resolve, 1))
        tempArray[i].active = false
      }
    }

    setConfig(config => ({ ...config, start: false }))
  }

  const selectionSort = async () => {
    const tempArray = array || []
    const size = tempArray ? tempArray.length : 0

    for (let i = 0; i < size; i++) {
      let leftElement = tempArray[i]
      let min = {
        value: leftElement.value,
        index: i,
      }
      for (let j = i; j < size; j++) {
        if (tempArray[j].value < min.value)
          min = {
            value: tempArray[j].value,
            index: j,
          }
        tempArray[i].active = true
        setArray([...tempArray])
        await new Promise(resolve => setTimeout(resolve, 1))
        tempArray[i].active = false
      }

      if (min.value !== leftElement.value)
        [tempArray[i], tempArray[min.index]] = [
          tempArray[min.index],
          tempArray[i],
        ]
    }

    setConfig(config => ({ ...config, start: false }))
  }

  const quickSort = async () => {
    const tempArray = array || []

    const newArray = (async function sort(
      array: {
        value: number
        active: boolean
      }[]
    ): Promise<any> {
      const length = array.length
      if (length < 1) return array
      const pivot = array[Math.floor(Math.random() * length)]

      const left: {
        value: number
        active: boolean
      }[] = []
      const right: {
        value: number
        active: boolean
      }[] = []

      for (let i = 0; i < length; i++) {
        array[i].active = true
        array[i].value < pivot.value && left.push(array[i])
        array[i].value > pivot.value && right.push(array[i])
        setArray(old => {
          return old
            ? [...array, ...old.filter(a => a.value !== array[i].value)]
            : [...array]
        })
        await new Promise(resolve => setTimeout(resolve, 5))
        array[i].active = false
      }

      return [...(await sort(left)), pivot, ...(await sort(right))]
    })(tempArray)

    setArray([...(await newArray)])
    setConfig(config => ({ ...config, start: false }))
  }
  return (
    <StyledArray>
      <ul>
        {array &&
          array.map((entry, index) => {
            return (
              <StyledListItem
                height={entry.value}
                color={!entry.active ? "#456" : "green"}
                key={index}
              ></StyledListItem>
            )
          })}
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

const StyledListItem = styled.li<{ height: number; color: string }>`
  flex: 1;
  color: #fff;
  height: ${props => props.height}%;
  background: ${props => props.color};
  border: clamp(0.1px, 0.1vw, 1px) solid white;
  text-align: center;
`

export default Main
