import React from "react";
import { useState, useEffect } from "react";
import { Grid, Typography, Chip, Stack, Button } from "@mui/material";
import ResponsiveDrawer from "../utility/ResponsiveDrawer";
import Avatar from "@mui/material/Avatar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import gojo from "../images/gojo.png";
import Pagination from "@mui/material/Pagination";

const EditResearch = () => {
  // checking local Storage after each update
  var [isDrawerOpen, setIsDrawerOpen] = useState(true);

  const [researchPapers, setResearchPapers] = useState([]);

  const getResearchPapers = () => {
    try {
      var myHeaders = new Headers();
      myHeaders.append(
        "Authorization",
        "Token f028d8d9a1884a335734170938fb9f794d2cf4e5"
        // above is professor ka token
      );
      myHeaders.append("Cookie", "csrftoken=o9U6wKWbEVIt5Ha31j7UIfXxtowMJPR6");

      var urlencoded = new URLSearchParams();

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch(
        "https://ipbackend.pythonanywhere.com/users/Research_ProjectLC/",
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => setResearchPapers(JSON.parse(result)))
        .catch((error) => console.log("error", error));
    } catch (err) {
      console.log("Error while fetching research papers : ", err);
    }
  };

  //   useState var that when changed leads to load research papers again
  const [triggerEffect, setTriggerEffect] = useState(false);

  const DelResearch = (id, token) => {
    try {
      var myHeaders = new Headers();
      myHeaders.append(
        "Authorization",
        `Token f028d8d9a1884a335734170938fb9f794d2cf4e5`
        // sme upar k prof. ka token
      );
      myHeaders.append("Cookie", "csrftoken=o9U6wKWbEVIt5Ha31j7UIfXxtowMJPR6");

      var formdata = new FormData();

      var requestOptions = {
        method: "DELETE",
        headers: myHeaders,
        body: formdata,
        redirect: "follow",
      };

      fetch(
        `https://ipbackend.pythonanywhere.com/users/Research_ProjectRUD/${id}/`,
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => console.log(`Result after deleting rp : ${result}`))
        .catch((error) => console.log("error", error));

      setTriggerEffect((prevState) => !prevState);
    } catch (err) {
      console.log(`Error while deleting the research paper : ${err}`);
    }
  };

  useEffect(() => {
    getResearchPapers();
  }, [triggerEffect]);

  window.onstorage = () => {
    setIsDrawerOpen(JSON.parse(window.localStorage.getItem("drawerOpen")));
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#4A2145",
      },
      secondary: {
        main: "#85D1A0",
      },
    },
  });

  const ResearchCard = ({ items }) => {
    return (
      <ThemeProvider theme={theme}>
        <Grid md={12}>
          {researchPapers.map((researchp, index) => {
            var skills = researchp.skills.split(",");
            skills = skills.filter((element) => element !== "");
            if (items.includes(researchp.id)) {
              return (
                <Grid
                  key={researchp.id}
                  container
                  elevation={2}
                  style={{
                    border: "1px solid gray",
                    borderRadius: "5px",
                    width: "45rem",
                    padding: "1rem",
                    margin: "2rem 0 0 5rem",
                  }}
                >
                  <Grid
                    item
                    xs={12}
                    sm={3}
                    md={3}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src={gojo}
                      sx={{ width: 56, height: 56 }}
                    />
                  </Grid>
                  <Grid item md={5}>
                    <Typography variant="h5" gutterBottom align="left">
                      {researchp.topic}
                    </Typography>
                    <Typography variant="body2" gutterBottom align="left">
                      Sridhar Iyer
                    </Typography>
                    <Stack
                      direction="row"
                      spacing={1}
                      style={{ marginTop: "0.5rem" }}
                    >
                      {skills.map((skill) => (
                        <Chip
                          key={skill}
                          label={skill.trim()}
                          color="primary"
                        />
                      ))}
                    </Stack>
                  </Grid>
                  <Grid
                    item
                    md={2}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Link to={`/updateresearch/${researchp.id}`}>
                    <Button variant="contained" color="secondary">
                      Edit
                    </Button>
                    </Link>
                  </Grid>
                  <Grid
                    item
                    md={2}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => DelResearch(researchp.id)}
                    >
                      Delete
                    </Button>
                  </Grid>
                </Grid>
              );
            }
            return null;
          })}
        </Grid>
      </ThemeProvider>
    );
  };

  function extractIdsFromList(list) {
    const idList = [];

    for (let i = 0; i < list.length; i++) {
      const item = list[i];
      const id = item.id;

      idList.push(id);
    }

    return idList;
  }

  const AllResearchCards = ({ itemsPerPage }) => {
    // implemented pagination functionality

    //  const items = Array.from(
    //   { length: researchPapers.length },
    //   (_, index) => index + 1
    // );

    const items = extractIdsFromList(researchPapers);

    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;

    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);

    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    const [page, setPage] = useState(1);

    // Invoke when user click to request another page.
    const handleChange = (event, page) => {
      const index = page - 1;
      const newOffset = (index * itemsPerPage) % items.length;
      setItemOffset(newOffset);
      const currentItems = items.slice(itemOffset, endOffset);
      setPage(page);
    };

    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <ResearchCard items={currentItems} />

        <Stack spacing={2} style={{ display: "flex", alignItems: "center" }}>
          <Pagination
            className="pagination"
            shape="rounded"
            count={pageCount}
            color="success"
            page={page}
            onChange={handleChange}
          />
        </Stack>
      </div>
    );
  };

  return (
    <>
      <div>
        <ResponsiveDrawer drawerHeading={"All Research Paper"} />
        <div
          className="researchContainer"
          style={{ marginLeft: isDrawerOpen ? "245px" : "10px" }}
        >
          <AllResearchCards itemsPerPage={4} />
        </div>
      </div>
    </>
  );
};

export default EditResearch;
