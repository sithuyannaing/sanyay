import { Box, Container } from "@mui/material";
import Header from "./components/Header";
import AppDrawer from "./components/AppDrawer";
import { Outlet } from "react-router-dom";
import { useApp } from "./ThemedApp";

export default function Template() {
    const {auth} = useApp();
    return(
    <Box>
      {
       auth && <Header />
      }
      {
       auth && <AppDrawer />
      }
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Outlet />
      </Container>
    </Box>
    )
}