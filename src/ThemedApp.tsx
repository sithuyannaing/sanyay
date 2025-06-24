import { createContext, useContext, useMemo, useState } from "react";
import { 
  CssBaseline, 
  ThemeProvider, 
  createTheme,
 } from "@mui/material";
import { deepPurple, grey } from "@mui/material/colors";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Template from "./Template";
import Home from "./pages/Home";
import { PaletteColor } from '@mui/material/styles';
import { AppContextType } from "./types/types";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Comments from "./pages/Comments";
import { QueryClientProvider, QueryClient } from "react-query";


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
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/comments",
        element: <Comments />,
      }
    ],
  },
 ]);

 export const queryClient = new QueryClient();


export default function ThemedApp() {
  const [showDrawer, setShowDrawer] = useState(true);
  const [auth, setAuth] = useState(false);
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
      <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
      <CssBaseline />
    </AppContext.Provider>
  </ThemeProvider>
  )
}