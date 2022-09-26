import chef from "../../static/women.jpg";
import {
  Box,
  CardMedia,
  createTheme,
  IconButton,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Send as SendIcon } from "@mui/icons-material";

const Rightbar = () => {
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
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" align="center" mt={5}>
        Hey, I'm Hong Thaimee - chief cook.
      </Typography>
      <CardMedia
        component="img"
        height="100%"
        image={chef}
        alt="burger"
        sx={{
          // width: "400px",
          cursor: "pointer",
          "&:hover": {
            opacity: 0.8,
            transition: `all 0.50s ease`,
            boxSizing: "border-box",
            zIndex: 1,
          },
        }}
      />
      <ThemeProvider theme={theme}>
        <Typography align="left" variant="h5" mt={2} color="text.secondary">
          Born in Thailand with an initial career in modeling, she later landed
          in pharmaceuticals working for Merck. But neither job gave her the
          fulfillment she sought. <br /> <br /> Thaimee then started from
          scratch and worked her way into some of New York’s best restaurants:
          Kittichai, Jean George’s Spice Market, and Jean George’s Perry St. In
          2011 she opened Ngam in the East Village, with a menu that celebrates
          the flavors of Thailand and a mission to spread her genuine fondness
          of others. <br /> <br />
          Now one of the most visible faces of Thai food in the US, Hong has
          been invited to cook at some of the most prestigious venues around the
          world such as New York’s Metropolitan Museum of Art, the James Beard
          House, The St. Regis Maldives, The Hoxton Paris, Sofitel Bangkok, and
          many more. She has appeared on TV in the US and across Southeast Asia,
          including on Food Network’s “Iron Chef America,” in a major TV
          campaign for Air Asia, and as a judge on a prominent Thai cooking
          series. <br /> <br />
          In the Fall of 2020, Hong debuted her latest venture, Thaimee Love.
          After a successful pop-up restaurant to trial the concept, her
          permanent new restaurant, Thaimee Love opened in October 2021, in New
          York’s W Houston Street, specializing in “Baan Baan” cuisine,
          replicating the comforting, home-style Northern Thai dishes. <br />{" "}
          <br />
          Hong lives in Midtown Manhattan’s with her partner, Conor. In her
          spare time, she enjoys dancing ballet, tennis, and reading about
          gardening, architecture, and design, with the hopes of one day owning
          her own farm
        </Typography>
      </ThemeProvider>
      {/* <Typography align="left" variant="body1" mt={5}>
        Don't forget to subscribe to Boronilov Blog ! <br></br>{" "}
        <a href="https://www.tripadvisor.com/Restaurant_Review-g297920-d6845431-Reviews-Fon_Muang_Ngam_Restaurant-Chiang_Rai_Chiang_Rai_Province.html">Read More</a>
      </Typography> */}
      <Typography
        variant="subtitle2"
        mt={1}
        align="center"
        color="white"
        bgcolor="tomato"
      >
        Subscribe via email
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextField
          helperText="email"
          label="Enter your email address"
          variant="standard"
          color="warning"
        />
        <IconButton>
          <SendIcon sx={{ color: "tomato" }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Rightbar;
