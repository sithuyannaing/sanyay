import { Box, Container } from "@mui/material";
import Header from "./components/Header";
import AppDrawer from "./components/AppDrawer";
import { Outlet } from "react-router-dom";

export default function Template() {
    return(
    <Box>
      <Header />
      <AppDrawer />
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Outlet />
      </Container>
    </Box>
    )
}