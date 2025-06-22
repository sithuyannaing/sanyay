import { createContext, useContext, useMemo, useState } from "react";
import { 
  CssBaseline, 
  ThemeProvider, 
  createTheme,
 } from "@mui/material";
import { deepPurple, grey } from "@mui/material/colors";
import AppDrawer from "./components/AppDrawer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Template from "./Template";
import Home from "./pages/Home";
import { PaletteColor } from '@mui/material/styles';
import { AppContextType } from "./types/types";


declare module '@mui/material/styles' {
  interface Palette {
    banner: PaletteColor;
  }

  interface PaletteOptions {
    banner: string;
  }
}

const AppContext = createContext<AppContextType | null>(null);
export function useApp() {
  const context = useContext(AppContext);
  if(!context){
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}

 const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    children: [
      {
        path: "/",
        element: <Home />,
      }
    ],
  },
 ]);


export default function ThemedApp() {
  const [showDrawer, setShowDrawer] = useState(true);
  const [auth, setAuth] = useState(true);
  //const [globelMsg, setGlobelMsg] = useState(undefined);
  const [showForm, setShowForm] = useState(false);
  const [mode, setMode] = useState("dark");
  const theme = useMemo(() => {
    return createTheme({
    palette: {
      mode: "dark",
      primary: deepPurple,
      banner: mode === "dark" ? grey[800] : grey[200],
      text: {
        disabled: grey[500],
      },
    }
    });
  },[mode])
  return(
  <ThemeProvider theme={theme}>
    <AppContext.Provider value={{showDrawer,setShowDrawer,auth,setAuth,showForm,setShowForm,mode,setMode}}>
      <RouterProvider router={router}></RouterProvider>
      <AppDrawer />
      <CssBaseline />
    </AppContext.Provider>
  </ThemeProvider>
  )
}