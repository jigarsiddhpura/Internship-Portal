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
import React from "react";
import "../css/Login.css";
import undrawImg from "../images/undraw_Welcome_.png";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";

import { useAuth } from "../contexts/authContext";
import { doSignIn, doSignInWithGoogle } from "../firebase/auth";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const Login = () => {

  const {userLoggedIn} = useAuth();
  const navigate = useNavigate();
  // formik

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // alert(JSON.stringify(values, null, 2));
      try {

        // FIREBASE CODE
        // doSignIn(values.email, values.password);

        axios.post('http://localhost:8080/auth/api/signin', {
          email: values.email,
          password: values.password
        })
        .then(response => {
          console.log('User signed in:', response.data);
        })
        .catch(error => {
          console.error('There was an error signing in!', error);
        });
        

        navigate('/');

      } catch (error) {
        alert("Issue sign in with email and password");
      }
    },
  });

  const onGoogleSignIn = (e) => {
    e.preventDefault();
    doSignInWithGoogle().catch(err => {
      alert("Issue sign in with google");
    })
  }

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

  const responsiveness2 = { responsive: width < 850 };
  const resp2 = responsiveness2.responsive;

  const responsiveness3 = { responsive: width >= 850 && width < 900 };
  const resp3 = responsiveness3.responsive;
  //

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const SignupButton = styled(Button)({
    backgroundColor: "#85D1A0",
    margin: "1rem",
    borderRadius: "0.3rem",
    marginLeft: "1.2rem",
    textDecoration: "none",
    padding: "12px 15px ",
    width: resp ? "22rem" :  "28rem",
    height: "3.1875rem",
    color: "white",
    fontSize: "1rem",
    position: "relative",
    right: resp ? "" : "1.4rem",
    "&:hover": { backgroundColor: "#5E9387", color: "white" },
  });

  const Login = () => {
    return (
      <Grid
        container
        spacing={0}
        className="login_main_container"
        style={{
          display: resp2 ? "flex" : "",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          item
          xs={6}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // border : '2px solid red',
            position:'relative',
            top : resp2 ?  '6rem' : '',
          }}
        >
          <form onSubmit={(e) => {e.preventDefault(); formik.handleSubmit(e);}}>
            <Box
              sx={{
                maxWidth: "31.25rem",
                width: "31.25rem",
                height: "31.25rem",
                // border: "2px solid black",
                display: "flex",
                flexDirection: "column",
                alignItems: resp ? "center" : "flex-start",
                padding: "1rem",
                position: "relative",
                // left:'4rem',
              }}
            >
              <h1 style={{ margin: "2rem 0", color: "#4A2145" }}>Sign In</h1>
              <FormControl
                style={{
                  margin:
                    formik.touched.email && formik.errors.email
                      ? "0"
                      : "0 0 1rem 0",
                  width: resp ? "40ch" : "50ch",
                }}
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
                  id="email"
                  endAdornment={
                    <InputAdornment position="end">
                      <EmailOutlinedIcon />
                    </InputAdornment>
                  }
                  type="email"
                  label="Email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </FormControl>
              {formik.touched.email && formik.errors.email ? (
                <div style={{ color: "red", marginBottom: "2rem" }}>
                  {formik.errors.email}
                </div>
              ) : null}

              <FormControl
                sx={{ width: resp ? "40ch" : "50ch", margin: "1rem 0 0.5 0" }}
                variant="outlined"
                //   value={user.password}
                //   onChange={handleChange}
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                required
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  label="Password"
                  name="password"
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
                <div style={{ color: "red" }}>{formik.errors.password}</div>
              ) : null}

              <div style={{ display: "flex" }}>
                <SignupButton type="submit">Log in</SignupButton>
              </div>

              <div style={{ }}>
                <span style={{ color: "gray", margin: "0.6rem 0" }}>
                  Don't have an account?
                  <Link to="/Signup" style={{ textDecoration: "none" }}>
                    <a
                      href="/"
                      style={{
                        textDecoration: "none",
                        color: "#4A2145",
                        margin: "0 0.7rem",
                        fontWeight: "32.25rem",
                      }}
                      // onClick={changeFRegStat}
                    >
                      Sign Up
                    </a>
                  </Link>
                </span>
              </div>
            </Box>
          </form>
        </Grid>
        <Grid item xs={6} className="img1 c">
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
              Welcome Back
            </h3>
            <p style={{ color: "white", margin: "0" }}>
              Just a couple of clicks and we start
            </p>
          </div>
        </Grid>
      </Grid>
    );
  };

  return (
    <>
      {userLoggedIn && (<Navigate to={'/'} replace={true} />)}
      {Login()}
    </>
  );
};

export default Login;