import { createContext, useState } from 'react'

export const Context = createContext()

export const ContextProvider = ({children}) => {
  const [cart, setCart] = useState([])
  
  let detail = {
    cart, setCart
  }
  
  return(
    <Context.Provider
      value={detail}
    >
      {children}
    </Context.Provider>
  )
}
