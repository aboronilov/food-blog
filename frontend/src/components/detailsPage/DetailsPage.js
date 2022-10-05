import React, { useEffect, useState } from "react";
import {
  Box,
  CardMedia,
  Container,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Categories from "../categories/Categories";
import burger from "../../../src/static/hamburger1.jpg";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import Suggestions from "../suggestions/Suggestions";
import { useParams } from "react-router-dom";
import axios from "axios";

const host = process.env.REACT_APP_API_URL;

const DetailsPage = () => {
  const [detailPage, setDetailPage] = useState([]);
  const [ingridients, setIngridients] = useState("");
  let { slug } = useParams();
  useEffect(() => {
    const DetailPage = async () => {
      try {
        const response = await axios.get(`${host}/api/posts/${slug}`);
        setDetailPage(response.data);
        setIngridients(response.data.ingredients);
      } catch (error) {
        console.log(error);
      }
    };
    DetailPage();
  }, []);
  return (
    <Container>
      <Categories />
      <Typography variant="h3" align="center" mt={4}>
        {detailPage.title}
      </Typography>
      <Typography variant="body2" align="center" color="GrayText" p={4}>
        {detailPage.short_desc}
      </Typography>
      <Typography variant="body1" align="left" mt={2}>
        {detailPage.content_before_image}
      </Typography>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <CardMedia
          sx={{ 
            hight: "500px", 
            width: "500px",
            cursor: "pointer",
            "&:hover": {
              opacity: 0.8,
              transition: `all 0.50s ease`,
              boxSizing: "border-box",
              zIndex: 1, 
          }}}
          component="img"
          image={detailPage.image}
          alt="burger"
        />
      </Box>
      <Typography variant="body1" align="left" mt={2}>
        {detailPage.content_after_image}
      </Typography>
      <Typography variant="h3" align="center" mt={2}>
        Ingridients
      </Typography>
      <List>
        {ingridients.split(", ").map((item) => (
          <ListItemButton>
            <ListItemIcon>
              <DoubleArrowIcon />
            </ListItemIcon>
            <ListItemText primary={item} />
          </ListItemButton>
        ))}
      </List>
      <Typography variant="body1" align="left" mt={2}>
        One of the easiest ways to cut down on dinner costs is to go for cheaper
        cuts of meat, or utilizing more expensive ones in creative ways. Try
        adding ground beef, turkey, or chicken to help bulk out old standbys, on
        the cheap. Try roasting a whole chicken (or buying a rotisserie
        chicken), then utilizing it for everything from pizza to tacos all week
        long. Try adding more expensive seafood or steak to pasta or rice to
        help make smaller, more affordable portions go further, like in our
        Creole jambalaya, our smoked salmon pasta, or our creamy steak
        fettuccine. It’s all about the way you use the protein that matters, not
        avoiding them altogether.
      </Typography>
      <Typography variant="h5" color="white" bgcolor={"black"} align="center">
        You may also like
      </Typography>
      <Suggestions />
    </Container>
  );
};

export default DetailsPage;
