import ResponsiveDrawer from "../utility/ResponsiveDrawer";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import courseImg from "../images/courseImg.png";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AccessTimeFilledOutlinedIcon from "@mui/icons-material/AccessTimeFilledOutlined";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import * as React from "react";
import { Paper } from "@mui/material";
import star from "../images/star.png";
import time from "../images/time.png";
import Footer from "../utility/Footer";
import { useEffect, useState } from "react";
import NavBar from "../utility/NavBar"

const Courses = () => {
  // checking local Storage after each update
  var [isDrawerOpen, setIsDrawerOpen] = useState(true);

  window.onstorage = () => {
    setIsDrawerOpen(JSON.parse(window.localStorage.getItem("drawerOpen")));
  };

  return (
    <>
    <div style={{display:'flex', flexDirection:'column', backgroundColor:'#e0e0e0'}}>

      {/* <NavBar/> */}
      <ResponsiveDrawer drawerHeading={'All Courses'}/>
      {/* {ResponsiveDrawer({ drawerHeading: 'All Courses' })} */}
      <div
        className="coursesContainer"
        style={{ marginLeft: isDrawerOpen ? "245px" : "10px" }}
      >
        <Card
          sx={{
            padding: "1rem",
            maxWidth: 345,
            width: "22rem",
            height: "22rem",
            margin:'0.5rem'
          }}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            style={{ borderRadius: "0.5rem", marginBottom: "0" }}
            image={courseImg}
          />

          <CardContent>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              <button
                style={{
                  width: "8rem",
                  height: "1.8rem",
                  color: "#85D1A0",
                  backgroundColor: "rgb(215 236 222)",
                  borderRadius: "0.4rem",
                  margin: "0 1.5rem 0 0",
                  border: "none",
                }}
              >
                Web 
              </button>
              <span style={{ textAlign: "right" }}>Harvard University</span>
            </div>

            <Typography
              style={{
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "1.2rem",
                textAlign: "start",
                // float:'left'
                // lineHeight: "1rem",
              }}
            >
              ReactJS with Node
            </Typography>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                margin: "1rem 0",
              }}
            >
              <img
                src={star}
                alt="star"
                style={{ width: "1.3rem", height: "1.3rem" }}
              />
              <span style={{ margin: "0 20px 0 4px" }}>4.5</span>
              <img
                src={time}
                alt="time"
                style={{ width: "1.3rem", height: "1.3rem" }}
              />
              <span style={{ margin: "0 20px 0 4px" }}>3 months</span>
              <Button
                style={{
                  borderRadius: "4px",
                  backgroundColor: "#85D1A0",
                  color: "white",
                  // marginLeft:'1.5rem'
                }}
              >
                Interested
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      </div>
    </>
  );
};

export default Courses;
