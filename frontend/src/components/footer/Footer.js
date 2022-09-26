import React from "react";
import { Box, Container, Stack, styled, Typography } from "@mui/material";

const Footer = () => {
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
  return (
    <Box sx={{ bgcolor: "tomato", height: "200px" }}>
      <Container>
        <Stack
          direction="row"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <MenuBox sx={{ display: { xs: "none", md: "flex" } }}>
            {MenuItems.map((item) => (
              <Typography variant="body2" color="white" key={item.Name}>
                {item.Name}
              </Typography>
            ))}
          </MenuBox>
          <Box color="white">© Boronilov Blog 2002</Box>
        </Stack>
        <Typography variant="h4" align="center" color="white" sx={{mt:{xs: 2, md: 4, lg: 8}}}>
          “After a good dinner one can forgive anybody, even one’s own relatives.” <br></br> – Oscar Wilde
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
