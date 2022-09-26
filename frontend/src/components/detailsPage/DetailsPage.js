import React from "react";
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

const DetailsPage = () => {
  return (
    <Container>
      <Categories />
      <Typography variant="h3" align="center" mt={4}>
        Title of the recipe
      </Typography>
      <Typography variant="body2" align="center" color="GrayText" p={4}>
        This recipes may contain affiliate links. Please read the disclosure
        policy
      </Typography>
      <Typography variant="body1" align="left" mt={2}>
        Step 1<br />
        In a bowl, mix ground beef, egg, onion, bread crumbs, Worcestershire,
        garlic, 1/2 teaspoon salt, and 1/4 teaspoon pepper until well blended.
        Divide mixture into four equal portions and shape each into a patty
        about 4 inches wide. <br />
        <br />
        Step 2<br /> Lay burgers on an oiled barbecue grill over a solid bed of
        hot coals or high heat on a gas grill (you can hold your hand at grill
        level only 2 to 3 seconds); close lid on gas grill. Cook burgers,
        turning once, until browned on both sides and no longer pink inside (cut
        to test), 7 to 8 minutes total. Remove from grill. <br />
        <br />
        Step 3<br /> Lay buns, cut side down, on grill and cook until lightly
        toasted, 30 seconds to 1 minute. <br />
        <br />
        Step 4<br /> Spread mayonnaise and ketchup on bun bottoms. Add lettuce,
        tomato, burger, onion, and salt and pepper to taste. Set bun tops in
        place.
      </Typography>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <CardMedia
          sx={{ hight: "500px", width: "500px" }}
          component="img"
          image={burger}
          alt="burger"
        />
      </Box>
      <Typography variant="body1" align="left" mt={2}>
        If you want absolute bacteria safety, you need to cook your burgers to
        160°. This recipe will keep them moist.
      </Typography>
      <Typography variant="h3" align="center" mt={2}>
        Ingridients
      </Typography>
      <List>
        <ListItemButton>
          <ListItemIcon>
            <DoubleArrowIcon />
          </ListItemIcon>
          <ListItemText primary="Meat" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <DoubleArrowIcon />
          </ListItemIcon>
          <ListItemText primary="Cheese" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <DoubleArrowIcon />
          </ListItemIcon>
          <ListItemText primary="Onion" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <DoubleArrowIcon />
          </ListItemIcon>
          <ListItemText primary="Burger Bread" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <DoubleArrowIcon />
          </ListItemIcon>
          <ListItemText primary="Burger Sauce" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <DoubleArrowIcon />
          </ListItemIcon>
          <ListItemText primary="Meat" />
        </ListItemButton>
      </List>
      <Typography variant="body1" align="left" mt={2}>
        Sink your teeth into a delicious restaurant-style, hamburger recipe made
        from lean beef. Skip the prepackaged patties and take the extra time to
        craft up your own, and that little extra effort will be worth it. To
        make cheeseburgers, about 1 minute before burgers are done, top with
        sliced cheese; continue cooking until cheese begins to melt.
      </Typography>
      <Typography variant="h5" color="white" bgcolor={"black"} align="center">
        You may also like
      </Typography>
      <Suggestions />
    </Container>
  );
};

export default DetailsPage;
