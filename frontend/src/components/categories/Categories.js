import { Box, Container, Stack, styled, Typography } from "@mui/material";
import drinks from "../../static/drinks.jpg";
import desserts from "../../static/desserts.jpg";
import dinners from "../../static/dinners.jpg";
import breakfests from "../../static/breakfests.jpg";
import salads from "../../static/salads.jpg";
import healthy from "../../static/healthy.jpeg";
import appetizers from "../../static/appetizers.jpg";
import instant from "../../static/instant.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const host = process.env.REACT_APP_API_URL;
    const fetchCatetories = async () => {
      try {
        const response = await axios.get(`${host}/api/categories/`);
        console.log(response)
        setCategories(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCatetories();
  }, []);

  const StyledCard = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    borderRadius: "100%",
    cursor: "pointer",
    overflow: "hidden",
    width: "100px",
    [theme.breakpoints.up("md")]: {
      height: 100,
    },
    [theme.breakpoints.down("md")]: {
      height: 100,
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
    <Box display="flex" justifyContent="center" alignItems="center">
      <Stack
        Container
        direction="row"
        mt={4}
        spacing={3}
        ml={3}
        sx={{ overflow: "auto" }}
      >
        {categories.map((item) => (
          <CardBox key={item.id}>
            <StyledCard sx={{ backgroundImage: `url(${item.image})` }} />
            <StyledTypography>{item.name}</StyledTypography>
          </CardBox>
        ))}
      </Stack>
    </Box>
  );
};

export default Categories;
