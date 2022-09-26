import React from "react";
import { Box, Stack, styled, Typography } from "@mui/material";
import drinks from "../../../src/static/drinks.jpg";
import desserts from "../../../src/static/desserts.jpg";
import dinners from "../../../src/static/dinners.jpg";
import breakfests from "../../../src/static/breakfests.jpg";

const Suggestions = () => {
  const StyledCard = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    cursor: "pointer",
    overflow: "hidden",
    width: "100px",
    [theme.breakpoints.up("md")]: {
      height: 100,
    },
    [theme.breakpoints.down("md")]: {
      height: 75,
      width: 75,
    },
    "&:hover": {
      opacity: 0.8,
      boxSizing: "border-box",
      zIndex: 1,
      transition: `all 0.45s ease`,
    },
  }));

  const StyledTypography = styled(Typography)({
    textAlign: "center",
    color: "black",
    fontSize: 20,
  });

  const CardBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  });
  return (
    <Stack
      Container
      direction="row"
      justifyContent="center"
      alignItems="center"
      mt={4}
      spacing={3}
      ml={3}
      sx={{ overflow: "auto" }}
    >
      <CardBox>
        <StyledCard sx={{ backgroundImage: `url(${drinks})` }} />
        <StyledTypography>Drinks</StyledTypography>
      </CardBox>
      <CardBox>
        <StyledCard sx={{ backgroundImage: `url(${desserts})` }} />
        <StyledTypography>Desserts</StyledTypography>
      </CardBox>
      <CardBox>
        <StyledCard sx={{ backgroundImage: `url(${dinners})` }} />
        <StyledTypography>Dinners</StyledTypography>
      </CardBox>
      <CardBox>
        <StyledCard sx={{ backgroundImage: `url(${breakfests})` }} />
        <StyledTypography>Breakfests</StyledTypography>
      </CardBox>
    </Stack>
  );
};

export default Suggestions;
