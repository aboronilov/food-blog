import { Container, Grid, Pagination, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CardItem from "../posts/CardItem";
import axios from "axios";
import { useParams } from "react-router-dom";
import Hero from "../hero/Hero";

const host = process.env.REACT_APP_API_URL;

const CategoryDetails = () => {
  const [blog, setBlog] = useState([]);
  const { pk } = useParams();
  console.log(pk);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const posts = await axios.get(`${host}/api/categories-posts/${pk}`);
        setBlog(posts.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [pk]);

  return (
    <Container>
      <Hero />
      <Typography variant="h4" align="center">
        Categories page
      </Typography>
      <Grid container columnSpacing={{ xs: 0, sm: 1 }} direction="column">
        {blog.map((item) => (
          <Grid key={item.id} item md={6} xs={6}>
            <CardItem
              myDirection={"flex"}
              title={item.title}
              shortDesc={item.short_desc}
              image={`${host}${item.image}`}
              blogHref={`/details/${item.slug}`}
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
    </Container>
  );
};

export default CategoryDetails;
