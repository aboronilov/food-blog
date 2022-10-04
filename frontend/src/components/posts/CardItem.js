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

const CardItem = ({ myDirection, blogHref, image, title, shortDesc }) => {
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
          href={blogHref}
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
                
                image={image}
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
              <CardContent sx={{minHeight:'260px'}}>
                <Typography sx={{ typography: {md: "h4", sm: 'h6' } }} align="center">
                  {title}
                </Typography>
                <ThemeProvider theme={theme}>
                  <Typography variant="h5" gutterBottom color="text.secondary">
                    {shortDesc}
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
