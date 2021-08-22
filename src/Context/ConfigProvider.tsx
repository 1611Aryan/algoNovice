import { useState } from "react"
import { useContext, createContext } from "react"

const ConfigContext = createContext<{
  config: {
    sortType: string
    start: boolean
  }
  setConfig: React.Dispatch<
    React.SetStateAction<{
      sortType: string
      start: boolean
    }>
  >
}>({
  config: {
    sortType: "bubble",
    start: false,
  },
  setConfig: () => {},
})

export const useConfig = () => useContext(ConfigContext)

export const ConfigProvider: React.FC<{
  children: JSX.Element | JSX.Element[]
}> = ({ children }) => {
  const [config, setConfig] = useState<{
    sortType: string
    start: boolean
  }>({
    sortType: "bubble",
    start: false,
  })

  return (
    <ConfigContext.Provider value={{ config, setConfig }}>
      {children}
    </ConfigContext.Provider>
  )
}
