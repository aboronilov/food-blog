import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Grid, TextField } from "@mui/material";
import axios from "axios";
import CardItem from "../posts/CardItem";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  maxHeight: 600,
  minHeight: 600,
  overflow: "auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const host = process.env.REACT_APP_API_URL;

const Search = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [blog, setBlog] = React.useState([]);
  const [lookup, setLookup] = React.useState("");

  React.useEffect(() => {
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

  return (
    <div>
      <Box display="flex" alignItems="center">
        <TextField
          sx={{
            width: { xs: 150 },
            padding: 0,
          }}
          color="warning"
          label="Search"
          variant="outlined"
          margin="dense"
          onClick={() => setOpen(!open)}
        />
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box display="flex" alignItems="center">
            <TextField
              sx={{
                display: "flex",
                width: "100%",
              }}
              color="warning"
              label="Search"
              variant="standard"
              onChange={(event) => setLookup(event.target.value)}
            />
          </Box>
          {blog
            .filter((search) => search.title.toLowerCase().includes(lookup))
            .map((search) => (
              lookup.length ? (
                <Grid key={search.id} item md={6} xs={6}>
                <CardItem
                  myDirection={"flex"}
                  title={search.title}
                  shortDesc={search.short_desc}
                  image={search.image}
                  blogHref={`/details/${search.slug}`}
                />
              </Grid>
              ) : ""
            ))}
        </Box>
      </Modal>
    </div>
  );
};

export default Search;
