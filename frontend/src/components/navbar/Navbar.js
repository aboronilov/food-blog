import React, { useState } from "react";
import {
  AppBar,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  styled,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  });

  const MenuBox = styled(Box)({
    display: "flex",
    gap: 30,
    cursor: "pointer",
  });

  const MenuItems = [
    { Name: "Home", Link: "/" },
    { Name: "Recipes", Link: "/" },
    { Name: "About us", Link: "/" },
    { Name: "Subscribe", Link: "/" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <AppBar color="default" position="sticky" elevation={4}>
        <StyledToolbar>
          <Box>
            <Typography
              sx={{
                fontSize: { xs: 18, sm: 22, md: 28, lg: 32 },
                fontFamily: "Sacramento, cursive",
              }}
              color={"tomato"}
            >
              Boronilov Blog
            </Typography>
          </Box>
          <MenuBox sx={{ display: { xs: "none", md: "flex" } }}>
            {MenuItems.map((item) => (
              <Typography variant="body2" key={item.Name}>
                {item.Name}
              </Typography>
            ))}
          </MenuBox>
          <Box display="flex" alignItems="center">
            <TextField
              sx={{
                width: { xs: 150 },
                padding: 0,
              }}
              color="warning"
              label="Search"
              variant="outlined"
              margin="dense"
            />
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, cursor: "pointer" }}>
            <MenuIcon onClick={() => setIsMenuOpen(!isMenuOpen)} />
          </Box>
        </StyledToolbar>
        <Drawer
          anchor={"right"}
          open={isMenuOpen}
          onClose={() => setIsMenuOpen(!isMenuOpen)}
        >
          <List>
            <ListItem
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                fontSize: { xs: 12, sm: 16, md: 25 },
              }}
            >
              {MenuItems.map((item) => (
                <ListItemButton key={item.Name}>{item.Name}</ListItemButton>
              ))}
            </ListItem>
          </List>
        </Drawer>
      </AppBar>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: { xs: "column", md: "row" },
          padding: 1,
        }}
      >
        <Typography
          align="center"
          variant="h5"
          mr={{ xs: 0, md: 1 }}
          fontSize={{ xs: 12, sm: 16, md: 25, lg: 30 }}
        >
          A party without cake is just a meeting
        </Typography>
        <Typography
          variant="h5"
          color="tomato"
          align="center"
          sx={{
            fontSize: { xs: 18, sm: 22, md: 28, lg: 32 },
            fontFamily: "Sacramento, cursive",
          }}
        >
          Awesome recipes for developers
        </Typography>
      </Box>
    </>
  );
};

export default Navbar;
