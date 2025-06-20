import { createContext } from "react";
import App from "./App";

type AppContextType = {
  mode: string
}
const AppContext = createContext<AppContextType | null>(null);

export default function ThemedApp() {
  return(
  <AppContext.Provider value={{mode : "dark"}}>
    <App />
  </AppContext.Provider>
  )
}