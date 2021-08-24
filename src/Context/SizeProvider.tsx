import { useState } from "react"
import { useContext, createContext } from "react"

const SizeContext = createContext<{
  size: number
  setSize: React.Dispatch<React.SetStateAction<number>>
}>({
  size: 50,
  setSize: () => {},
})

export const useSize = () => useContext(SizeContext)

export const SizeProvider: React.FC<{
  children: JSX.Element | JSX.Element[]
}> = ({ children }) => {
  const [size, setSize] = useState(50)

  return (
    <SizeContext.Provider value={{ size, setSize }}>
      {children}
    </SizeContext.Provider>
  )
}
