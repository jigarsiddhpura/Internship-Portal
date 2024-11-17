import * as yup from "yup";
import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { blue } from "@mui/material/colors";
import React from "react";
import "../css/Login.css";
import undrawImg from "../images/undraw_Welcome_.png";
import { useFormik } from "formik";
import axios from "axios";

import { useAuth } from "../contexts/authContext";
import { doCreateUser } from "../firebase/auth";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = yup.object({
  firstName: yup
    .string("Enter your first Name")
    .max(12, "Must be 15 characters or less")
    .required("Required"),
  lastName: yup
    .string("Enter your last Name")
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  sapid: yup
    .string("Enter your SapId")
    .min(11, "Must be 11 characters only")
    .required("Required"),
  contact: yup
    .string("Enter your last Name")
    .matches(phoneRegExp, "Contact in not valid")
    .required("Required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  confirmPassword: yup
    .string("Confirm Password")
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Password is required"),
});

const Signup = () => {
  const {userLoggedIn} = useAuth();
  const navigate = useNavigate();
  
  // adding event listener for responsiveness
  const [width, setWindowWidth] = useState(0);

  const color = "#4A2145";

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  const responsiveness = { responsive: width < 1043 };
  const resp = responsiveness.responsive;

  const responsiveness2 = { responsive: width < 900 };
  const resp2 = responsiveness2.responsive;
  //


  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      sapid: "",
      contact: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      // console.log(values.email, values.password);

      // FIREBASE CODE
      // doCreateUser(values.email, values.password).catch(() => {
      //   alert("Issue sign in with email and password");
      // });

      // var myHeaders = new Headers();
      // myHeaders.append("Content-Type", "application/json");

      axios.post('http://localhost:8080/api/auth/signin', {
        sapId: values.sapid,
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        contact: values.contact,
        password: values.password,
        role: "STUDENT" // Or 'PROFESSOR', 'ADMIN'
      })
      .then(response => {
        console.log('User signed up:', response.data);
        navigate('/login');
      })
      .catch(error => {
        // console.error('There was an error signing up!', error);
        alert('There was an error signing up!', error)
      });
      
    },
  });

  const CreateButton = styled(Button)({
    backgroundColor: "#85D1A0",
    borderRadius: "0.3rem",
    textDecoration: "none",
    padding: "12px 15px ",
    width: "27.8rem",
    height: "3.1875rem",
    color: "white",
    fontSize: "0.8rem",
    marginTop: "0.5rem",
    position:'relative',
    right: resp? '' : '5.5rem',
    "&:hover": { backgroundColor: "#5E9387", color: "white" },
  });

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const [showCPassword, setShowCPassword] = useState(false);
  const handleClickShowCPassword = () => setShowCPassword((show) => !show);

  return (
    <>
      {userLoggedIn && (<Navigate to={"/"} replace={true} />)}
      <Grid container spacing={0} className="signUp_main_container"
      style = {{overflow : 'hidden'}}
      >
        <Grid item xs={6} className="img2 c">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              position:'relative',
              top:'10%'
            }}
          >
            <p id="internText">Internship</p>
            <img src={undrawImg} alt="internship_image" />
            <h3 style={{ color: "white", margin: "2rem 0 0.5rem 0" }}>
              Welcome Aboard
            </h3>
            <p style={{ color: "white", margin: "0" }}>
              Just a couple of clicks and we start
            </p>
          </div>
        </Grid>
        <Grid
          item
          xs={6}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: 'center',
            // position : 'relative',
            // left: resp2 ? '20rem' : ''
          }}
        >
          <form onSubmit={(e) => {e.preventDefault();  formik.handleSubmit(e);}}>
            <Box
              sx={{
                maxWidth: '31.25rem',
                width: resp ? '100vw' : '31.25rem',
                height: '31.25rem',
                display: "flex",
                flexDirection: "column",
                alignItems:"flex-start",
                justifyContent : 'center',
                padding:  "1rem",
                position:resp ? 'relative' : '',
                left:resp2 ? '26%' : '2rem',

              }}
            >
              <h2 style={{ margin: "0.4rem 0" , color:'#4A2145'}}>Create new account</h2>
              <span style={{ color: "gray", margin: "0.4rem 0" }}>
                Already A Member?{" "}
                <Link to="/Login" style={{textDecoration: "none",}}>
                  <a href="/Login" style={{ textDecoration: "none", color: '#4A2145', fontWeight:500 }}>
                    Log in
                  </a>{" "}
                </Link>
              </span>
              <div style={{ display: "flex" }}>
                <div>
                  <TextField
                    id="firstName"
                    required
                    type="text"
                    label="FirstName"
                    placeholder="First Name"
                    name="firstName"
                    onChange={formik.handleChange}
                    error={
                      formik.touched.firstName &&
                      Boolean(formik.errors.firstName)
                    }
                    helperText={
                      formik.touched.firstName && formik.errors.firstName
                    }
                    style={{
                      margin: "1rem 0",
                      width:   resp ? "20ch" : "24ch",
                    }}
                  />
                </div>
                <div>
                  <TextField
                    id="lname"
                    type="text"
                    label="Lastname"
                    placeholder="Last Name"
                    name="lastName"
                    //   value={signupUser.lname}
                    //   onChange={signupHandleChange}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.lastName && Boolean(formik.errors.lastName)
                    }
                    helperText={
                      formik.touched.lastName && formik.errors.lastName
                    }
                    required
                    style={{ margin: "1rem ", width: resp ? "20ch" : "24ch" }}
                  />
                </div>
              </div>

              <FormControl
                style={{ margin: "0.5rem 0", width: resp ? "42ch" : "50ch" }}
                variant="outlined"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Email
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-email"
                  endAdornment={
                    <InputAdornment position="end">
                      <EmailOutlinedIcon />
                    </InputAdornment>
                  }
                  type="email"
                  label="Email"
                  placeholder="Email"
                  name="email"
                  required
                />
              </FormControl>
              {formik.touched.email && formik.errors.email ? (
                <div style={{ color: "red", marginBottom: "0.5rem" }}>
                  {formik.errors.email}
                </div>
              ) : null}

              <div style={{ display: "flex" }}>
                <TextField
                  id="sapid"
                  required
                  type="number"
                  label="Sap ID"
                  placeholder="Sap Id"
                  name="sapid"
                  onChange={formik.handleChange}
                  error={formik.touched.sapid && Boolean(formik.errors.sapid)}
                  helperText={formik.touched.sapid && formik.errors.sapid}
                  style={{
                    margin: "1rem 0",
                    width: resp ? "20ch" : "24ch",
                  }}
                />
                <TextField
                  id="lname"
                  type="number"
                  label="contact"
                  placeholder="contact"
                  name="contact"
                  onChange={formik.handleChange}
                  error={
                    formik.touched.contact && Boolean(formik.errors.contact)
                  }
                  helperText={formik.touched.contact && formik.errors.contact}
                  required
                  style={{ margin: "1rem ", width: resp ? "20ch" : "24ch" }}
                />
              </div>

              <div style={{ display: "flex" }}>
                <div
                  style={{
                    position:
                      formik.touched.password && formik.errors.password
                        ? "relative"
                        : "",
                  }}
                >
                  <FormControl
                    sx={{ margin: "1rem 0 ", width: resp ? "20ch" : "24ch" }}
                    variant="outlined"
                    onChange={formik.handleChange}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                    required
                  >
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      label="Password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            // onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  {formik.touched.password && formik.errors.password ? (
                    <div
                      style={{
                        color: "red",
                        margin: "-0.7rem 2rem 1rem 0",
                        fontSize: "0.9rem",
                        width: resp ? "20ch" : "24ch" ,
                      }}
                    >
                      {formik.errors.password}
                    </div>
                  ) : null}
                </div>
                <div
                  style={{
                    position:
                      formik.touched.confirmPassword &&
                      formik.errors.confirmPassword
                        ? "relative"
                        : "relative",
                    left:'1rem',
                  }}
                >
                  <FormControl
                    sx={{ margin: "1rem 0 ", width: resp ? "20ch" : "24ch" }}
                    variant="outlined"
                    onChange={formik.handleChange}
                    error={
                      formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)
                    }
                    helperText={
                      formik.touched.confirmPassword && formik.errors.confirmPassword
                    }
                    required
                  >
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      label="Password"
                      name="confirmPassword"
                      type={showPassword ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            // onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                    <div
                      style={{
                        color: "red",
                        margin: "-0.7rem 2rem 1rem 0",
                        fontSize: "0.9rem",
                        alignContent: "start",
                      }}
                    >
                      {formik.errors.confirmPassword}
                    </div>
                  ) : null}
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width:resp ? "42ch" : "70ch",
                }}
              >
                <CreateButton type="submit">Create account</CreateButton>
              </div>
            </Box>
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default Signup;