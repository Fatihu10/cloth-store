import { createContext, useContext, useState } from 'react'

export const Context = createContext()

export const ContextProvider = ({children}) => {
  const [cart, setCart] = useState([])
  
  return(
    <Context.Provider
      value={{cart, setCart}}
    >
      {children}
    </Context.Provider>
  )
}
