import { Box, Container, Link, Stack, styled, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const host = process.env.REACT_APP_API_URL;
    const fetchCatetories = async () => {
      try {
        const response = await axios.get(`${host}/api/categories/`);
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
          <Link href={`category/${item.id}`} sx={{textDecoration: "none"}}>
            <CardBox key={item.id}>
              <StyledCard sx={{ backgroundImage: `url(${item.image})` }} />
              <StyledTypography>{item.name}</StyledTypography>
            </CardBox>
          </Link>
        ))}
      </Stack>
    </Box>
  );
};

export default Categories;
