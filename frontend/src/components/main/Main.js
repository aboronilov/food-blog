import { Box, Container, Stack } from "@mui/material";
import Hero from "../hero/Hero";
import Posts from "../posts/Posts";
import Rightbar from "../rightbar/Rightbar";
import Categories from '../categories/Categories';

const Main = () => {
  return (
    <>
      <Hero />
      <Categories />
      <Container>
        <Stack direction="row" spacing={1} mt={3}>
          <Box flex={3}>
            <Posts />
          </Box>
          <Box flex={1} display={{ xs: "none", md: "block" }}>
            <Rightbar />
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default Main;
