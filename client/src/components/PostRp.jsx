import React from "react";
import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { useFormik } from "formik";
import * as yup from "yup";
import humanAI from "../images/humanAI.png";
import "../css/InternshipForm.css";
import makeAnimated from "react-select/animated";
import { skillsOptions } from "../docs/research_skills.ts";
import Select from "react-select";
import { toast } from 'react-hot-toast';


const validationSchema = yup.object({
  topic: yup.string("ML Engineer").required("topic is required"),
  eligibility: yup.string("B.Tech").required("Eligibility is required"),
  skills: yup.array().required("Required Field"),
});

const PostRpForm = () => {
  const formik = useFormik({
    initialValues: {
      topic: "",
      eligibility: "",
      skills: [],
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      selectedValues.forEach((item, index) => {
        selectedValues[index] = item.value;
      });
      var skillsString = selectedValues.join(",");

      const formattedValues = {
        ...values,  
        skills: skillsString,
        applyLink: null
      }

      alert(JSON.stringify(formattedValues, null, 2));
      toast.success("Research Internship created");
      sendData(formattedValues);
    },
  });

  const sendData = (rpData) => {
    try {
      var myHeaders = new Headers();

      // myHeaders.append(
      //   "Authorization",
      //   "Token 19942b7733d256acebbfacfb6eeb7e5f55d58ecd"
      // );

      // myHeaders.append("Cookie", "csrftoken=o9U6wKWbEVIt5Ha31j7UIfXxtowMJPR6");

      myHeaders.append("Content-Type", "application/json");

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(rpData), // backend expects json not formdata
        redirect: "follow",
      };

      fetch(
        "http://localhost:8080/api/research",
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) =>
          console.log("Error while posting research internship : ", error)
        );
    } catch (err) {
      throw new Error("Invalid data");
    }
  };

  // adding event listener for responsiveness
  const [width, setWindowWidth] = useState(0);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  const responsiveness = { responsive: width < 1100 };
  const resp = responsiveness.responsive;

  const PostBtn = styled(Button)({
    backgroundColor: "#85D1A0",
    margin: "1rem",
    borderRadius: "0.3rem",
    marginLeft: "1.2rem",
    textDecoration: "none",
    padding: "12px 15px ",
    width: resp ? "42ch" : "50ch",
    height: "3.1875rem",
    color: "white",
    fontSize: "1rem",
    topic: "relative",
    right: resp ? "" : "1.4rem",
    "&:hover": { backgroundColor: "#5E9387", color: "white" },
  });

  const animatedComponents = makeAnimated();

  const [selectedValues, setSelectedValues] = useState([]);

  const handleSelectChange = async (selectedOptions) => {
    setSelectedValues(() => selectedOptions);
  };

  const selectStyles = {
    control: (provided) => ({
      ...provided,
      width: resp ? "42ch" : "50ch",
      // height: selectedValues.length > 3 ? "" : "3.5rem",
      borderRadius: "0.3rem",
    }),
    placeholder: (provided) => ({
      ...provided,
      textAlign: "left", // set the text alignment of the placeholder to left
    }),
  };

  const TopicField = () => {
    return (
      <>
        <TextField
          id="topic"
          type="text"
          label="Topic"
          placeholder="Topic"
          name="topic"
          value={formik.values.topic}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.touched.topic && Boolean(formik.errors.topic)}
          helperText={formik.touched.topic && formik.errors.topic}
          required
          style={{ marginBottom: "1rem", width: resp ? "42ch" : "50ch" }}
        />
      </>
    );
  };

  const EligibilityField = () => {
    return (
      <>
        <TextField
          id="eligibility"
          type="text"
          label="Eligibility"
          placeholder="Eligibility"
          name="eligibility"
          value={formik.values.eligibility}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={
            formik.touched.eligibility && Boolean(formik.errors.eligibility)
          }
          helperText={formik.touched.eligibility && formik.errors.eligibility}
          required
          style={{ marginBottom: "1rem", width: resp ? "42ch" : "50ch"}}
        />
      </>
    );
  };

  const SkillsField = () => {
    return (
      <>
        <Select
          required
          className="skills"
          closeMenuOnSelect={false}
          components={animatedComponents}
          // defaultValue={[skillsOptions[4], skillsOptions[5]]}
          isMulti
          options={skillsOptions}
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: "#b2ebf2",
              primary: "black",
            },
          })}
          value={formik.values.selectedValues}
          styles={selectStyles}
          onChange={handleSelectChange}
          placeholder="Required skills"
        />
      </>
    );
  };

  return (
    <Grid
      container
      spacing={2}
      className="PostRp_main_container"
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: resp ? "1rem 0rem" : "2rem 7rem",
        backgroundColor: "#b2ebf2",
      }}
    >
      <Grid
        item
        xs={12}
        md={6}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form onSubmit={formik.handleSubmit}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: resp ? "center" : "flex-start",
              padding: "1rem",
              topic: "relative",
            }}
          >
            <h1 className="formHeader">Post Research Internship</h1>

            {TopicField()}

            {EligibilityField()}

            {SkillsField()}

            <div>
              <PostBtn type="submit">Post Research Internship</PostBtn>
            </div>
          </Box>
        </form>
      </Grid>
      <Grid item xs={12} md={6}>
        <img
          src={humanAI}
          alt="humanAI"
          style={{
            height: resp ? "35rem" : "38rem",
            width: resp ? "26rem" : "35rem",
          }}
        />
      </Grid>
    </Grid>
  );
};

const PostRp = () => {
  return (
    <React.Fragment>
      <PostRpForm />
    </React.Fragment>
  );
};

export default PostRp;
