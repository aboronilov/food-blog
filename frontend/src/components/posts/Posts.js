import { Box, Grid, Pagination, Stack, Typography } from "@mui/material";
import React from "react";
import CardItem from "./CardItem";

const Posts = () => {
  return (
    <Box>
      <Typography variant="h4" align="center">
        Latest Recipies
      </Typography>
      <Grid container columnSpacing={{ xs: 0, sm: 1 }} direction="column">
        <Grid item xs>
          <CardItem myDirection={"flex"} />
        </Grid>
        <Grid item xs>
          <CardItem myDirection={"flex"} />
        </Grid>
        <Grid item xs>
          <CardItem myDirection={"flex"} />
        </Grid>
      </Grid>
      <Typography
        variant="h4"
        bgcolor={"tomato"}
        color={"white"}
        align="center"
        mt={4}
        mb={4}
      >
        Most Popular
      </Typography>
      <Grid container columnSpacing={{ xs: 0, sm: 1 }} direction="row">
        <Grid item md={6} sm={6}>
          <CardItem myDirection={"block"} />
        </Grid>
        <Grid item md={6} sm={6}>
          <CardItem myDirection={"block"} />
        </Grid>
        <Grid item md={6} sm={6}>
          <CardItem myDirection={"block"} />
        </Grid>
      </Grid>
      <Stack spacing={2} mt={3} mb={3} justifyContent="center" alignItems="center">
        <Pagination count={10} color="warning"/>
      </Stack>
    </Box>
  );
};

export default Posts;
