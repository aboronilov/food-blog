import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  createTheme,
  Link,
  ThemeProvider,
  Typography,
} from "@mui/material";
import burger from "../../static/hamburger2.jpg";

const CardItem = ({ myDirection }) => {
  const theme = createTheme();

  theme.typography.h5 = {
    color: "text.secondary",
    fontSize: "0.8rem",
    "@media (min-width:600px)": {
      fontSize: "1.2rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.5rem",
    },
  };
  return (
    <Container>
      <Box mt={3}>
        <Link
          href="http://localhost:3000/details"
          sx={{ textDecoration: "none" }}
        >
          <Card>
            <Box
              sx={{
                display: {
                  xs: "block",
                  sm: `${myDirection}`,
                  md: `${myDirection}`,
                },
                flexDirection: "row",
              }}
            >
              <CardMedia
                component="img"
                // height="300"
                image={burger}
                alt="burger"
                sx={{
                  width: { xs: "350px", md: "400px" },
                  display: { xs: "flex" },
                  alignItems: { xs: "center" },
                  cursor: "pointer",
                  "&:hover": {
                    opacity: 0.8,
                    transition: `all 0.50s ease`,
                    boxSizing: "border-box",
                    zIndex: 1,
                  },
                }}
              />
              <CardContent>
                <Typography gutterBottom variant="h4" align="center">
                  Royal Burger
                </Typography>
                <ThemeProvider theme={theme}>
                  <Typography variant="h5" gutterBottom color="text.secondary">
                    When ready to cook, brush and oil the grill grate. Place the
                    burgers on the hot grate, onion side down. Grill the burgers
                    until cooked to taste, 3 to 4 minutes per side for
                    medium-rare.
                  </Typography>
                </ThemeProvider>
                <CardActions>
                  <Button sx={{ color: "tomato" }} size="large">
                    Share
                  </Button>
                  <Button sx={{ color: "tomato" }} size="large">
                    Learn More
                  </Button>
                </CardActions>
              </CardContent>
            </Box>
          </Card>
        </Link>
      </Box>
    </Container>
  );
};

export default CardItem;
