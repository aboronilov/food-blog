import { Box, Grid, Pagination, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CardItem from "./CardItem";
import axios from "axios";

const host = process.env.REACT_APP_API_URL;

const Posts = () => {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const posts = await axios.get(`${host}/api/posts/`);
        setBlog(posts.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const [popular, setPopular] = useState([]);
  useEffect(() => {
    const fetchPopular = async () => {
      try {
        const response = await axios.get(`${host}/api/popular-posts/`);
        setPopular(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPopular();
  }, []);

  return (
    <Box>
      <Typography variant="h4" align="center">
        Latest Recipies
      </Typography>
      <Grid container columnSpacing={{ xs: 0, sm: 1 }} direction="column">
        {blog.map((item) => (
          <Grid key={item.id} item md={6} xs={6}>
            <CardItem
              myDirection={"flex"}
              title={item.title}
              shortDesc={item.short_desc}
              image={item.image}
              blogHref={`/details/${item.slug}`}
            />
          </Grid>
        ))}
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

      <Grid container columnSpacing={{ xs: 0, sm: 1, md: 1 }} direction="row">
        {popular.map((pop) => (
          <Grid item key={pop.id} md={6} xs={6}>
            <CardItem
              myDirection={"block"}
              title={pop.title}
              shortDesc={pop.short_desc}
              image={`${host}${pop.image}`}
              blogHref={`/details/${pop.slug}`}
            />
          </Grid>
        ))}
      </Grid>

      <Stack
        spacing={2}
        mt={3}
        mb={3}
        justifyContent="center"
        alignItems="center"
      >
        <Pagination count={10} color="warning" />
      </Stack>
    </Box>
  );
};

export default Posts;
