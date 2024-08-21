import React, { useEffect, useState, useContext } from "react";
import { Grid, Typography, Chip, Stack, Button } from "@mui/material";
import ResponsiveDrawer from "../utility/ResponsiveDrawer";
import Avatar from "@mui/material/Avatar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import AppContext from "../contexts/AppContext";

import gojo from "../images/gojo.png";
import Pagination from "@mui/material/Pagination";
import { number } from "yup";

const ApplyInternship = () => {
  // checking local Storage after each update

  const [internships, setInternships] = useState([]);

  const getInternships = () => {
    try {
      // var myHeaders = new Headers();

      // myHeaders.append(
      //   "Authorization",
      //   "Token 57e32c9351107fbc6b6d171e48472567d223fa7e"
      //   // student ka token
      // );

      var requestOptions = {
        method: "GET",
        // headers: myHeaders,
        redirect: "follow",
      };

      fetch(
        "http://localhost:8080/api/internships",
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => setInternships(JSON.parse(result)))
        .catch((error) => console.log("error", error));
    } catch (err) {
      console.log("Error while fetching internships : ", err);
    }
  };

  useEffect(() => {
    getInternships();
  }, []);

  var [isDrawerOpen, setIsDrawerOpen] = useState(true);

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

  const { selectedTags, setSelectedTags } = useContext(AppContext)
  const [filteredInternships, setFilteredInternships] = useState(internships)

  function isNumberInStipendRange(stipendRange, stipend) {

    // replacing comma and splitting the stipend range
    const sanitizedStipendRange = stipendRange.replace(/,/g, '');
    const [minStipend, maxStipend] = sanitizedStipendRange.split(' - ').map(Number);
    const numericNumber = Number(stipend)
    return numericNumber >= minStipend && numericNumber <= maxStipend
  }

  // Filter internships whenever selectedTags change
  useEffect(() => {
    console.log(selectedTags);
    if (selectedTags.length === 0) {
      setFilteredInternships(internships);
    } else {
      const filtered = internships.filter((internship) =>
        (
          selectedTags.some((tag) => internship.skills.split(",").includes(tag)) // filtering skills
        ) ||
        (
          selectedTags.includes(internship.internship_Type) // filtering internship type
        ) ||
        (
          selectedTags.some((tag) => isNumberInStipendRange(tag, internship.stipend)) // filtering stipend
        )
      );
      setFilteredInternships(filtered);
    }
  }, [selectedTags, internships]);

  const InternshipCard = ({ items }) => {
    return (
      <ThemeProvider theme={theme}>
        <Grid md={12}>
          {filteredInternships.map((internship, index) => {
            var skills = internship.skills ? internship.skills.split(",") : "";
            // skills = skills.filter((element) => element !== "");
            // var skills = null;
            if (items.includes(internship.id)) {
              return (
                <Grid
                  key={index}
                  container
                  elevation={2}
                  style={{
                    border: "1px solid gray",
                    borderRadius: "5px",
                    width: "50rem",
                    padding: "1rem",
                    margin: "2rem 0 0 5rem",
                  }}
                >
                  <Grid
                    item
                    xs={12}
                    sm={3}
                    md={2}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Avatar
                      alt="internship-logo"
                      src={
                        internship.internshipLogoUrl && internship.internshipLogoUrl.toString().includes("placeholder")
                          ? gojo
                          : internship.internshipLogoUrl || ""
                      }
                      sx={{ width: 56, height: 56 }}
                    />

                  </Grid>
                  <Grid item md={4}>
                    <Typography variant="h5" gutterBottom align="left">
                      {internship.jobTitle}
                    </Typography>
                    <Typography variant="body2" gutterBottom align="left">
                      {internship.location}
                    </Typography>
                    {
                      (internship.jobType) ?
                        <Stack
                          direction="row"
                          spacing={1}
                          style={{
                            marginTop: "0.5rem",
                            width: "16rem",
                            // border: "2px solid red",
                            flexWrap: "wrap",
                          }}
                        >
                          <Chip
                            label={internship.jobType}
                            color="primary"
                            variant="outlined"
                            style={{ marginBottom: "5px" }}
                          />
                          {skills && skills.map((skill) => (
                            <Chip
                              key={skill}
                              label={skill.trim()}
                              color="primary"
                            />
                          ))}
                        </Stack>
                        : <></>
                    }
                  </Grid>
                  <Grid item md={3} paddingLeft={3}>
                    <Stack direction="column" spacing={2}>
                      <Stack direction="row" spacing={2}>
                        <CalendarMonthIcon color="success" />
                        <span
                          style={{ color: "black", marginBottom: "0.3rem" }}
                        >
                          {internship.duration}
                        </span>
                      </Stack>
                      <Stack direction="row" spacing={2}>
                        <CorporateFareIcon color="success" />{" "}
                        <span
                          style={{ color: "black", marginBottom: "0.3rem" }}
                        >
                          {internship.companyName}
                        </span>
                      </Stack>
                      <Stack direction="row" spacing={2}>
                        <CurrencyRupeeIcon color="success" />{" "}
                        <span
                          style={{ color: "black", marginBottom: "0.3rem" }}
                        >
                          {internship.stipend.substring(2)}
                        </span>
                      </Stack>
                    </Stack>
                  </Grid>
                  <Grid
                    item
                    md={3}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Button variant="contained" color="secondary" href={internship ? internship.applyLink : null}>
                      Apply
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

  const AllInternshipCards = ({ itemsPerPage }) => {
    // implemented pagination functionality

    // const items = Array.from(
    //   { length: internships.length },
    //   (_, index) => index + 1
    // );

    const items = extractIdsFromList(filteredInternships)

    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;

    console.log(`Loading items from ${itemOffset} to ${endOffset}`);

    const currentItems = items.slice(itemOffset, endOffset);
    console.log(currentItems);
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
      <div style={{ display: "flex", alignItems: "center", flexDirection: 'column' }} >
        <InternshipCard items={currentItems} />

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
        <ResponsiveDrawer drawerHeading={"All Internships"} />
        <div
          className="InternshipContainer"
          style={{ marginLeft: isDrawerOpen ? "245px" : "10px" }}
        >
          <AllInternshipCards itemsPerPage={4} />
        </div>
      </div>
    </>
  );
};

export default ApplyInternship;
