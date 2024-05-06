import React from "react";
import {ReactDOM }from "react-dom";
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
import { type } from "@testing-library/user-event/dist/type";
import { skillsOptions } from "../docs/research_skills.ts";
import Select from "react-select";
import { useLocation } from "react-router-dom";

const validationSchema = yup.object({
  topic: yup.string("ML Engineer").required("topic is required"),
  eligibility: yup.string("B.Tech").required("Eligibility is required"),
  skillsRequired: yup.array().required("Required Field"),
});

const UpdateResearchForm = ({id}) => {

    const [researchp, setresearchp] = useState([]);

    const getresearchpDetail = () => {
      try {
        var myHeaders = new Headers();
        myHeaders.append(
          "Authorization",
          "Token f028d8d9a1884a335734170938fb9f794d2cf4e5"
        //   prof ka token
        );
        myHeaders.append("Cookie", "csrftoken=o9U6wKWbEVIt5Ha31j7UIfXxtowMJPR6");
  
        var requestOptions = {
          method: "GET",
          headers: myHeaders,
          redirect: "follow",
        };
  
        fetch(
          `https://ipbackend.pythonanywhere.com/users/Research_ProjectRUD/${id}/`,
          requestOptions
        )
          .then((response) => response.text())
          .then((result) => setresearchp(JSON.parse(result)))
          .catch((error) => console.log("error", error));
      } catch (err) {
        console.log(`Error while fetching the researchp for update : ${err}`);
      }
    };
  
    useEffect(() => {
      getresearchpDetail();
    },[]);

  const formik = useFormik({
    initialValues: {
      topic: "",
      skillsRequired: [],
      eligibility: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      selectedValues.forEach((item, index) => {
        selectedValues[index] = item.value;
      });
      var concat_values = selectedValues.join(",");
      formik.values.skillsRequired = concat_values;
      alert(JSON.stringify(values, null, 2));
      updateRp(values);
    },
  });

  const updateRp = (values) => {
    try {
      var myHeaders = new Headers();

      myHeaders.append(
        "Authorization",
        "Token f028d8d9a1884a335734170938fb9f794d2cf4e5"
        // prof ka token
      );

      myHeaders.append("Cookie", "csrftoken=o9U6wKWbEVIt5Ha31j7UIfXxtowMJPR6");

      var formdata = new FormData();
      formdata.append("skills", values.skillsRequired);
      formdata.append("topic", values.topic);
      formdata.append("eligibility", values.eligibility);

      var requestOptions = {
        method: "PATCH",
        headers: myHeaders,
        body: formdata,
        redirect: "follow",
      };

      fetch(
        `https://ipbackend.pythonanywhere.com/users/Research_ProjectRUD/${id}/`,
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) =>
          console.log("Error while updating research paper : ", error)
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
          label={researchp.topic}
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
          label={researchp.eligibility}
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
          className="skillsRequired"
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
          label={researchp.skills}
        />
      </>
    );
  };

  return (
    <Grid
      container
      spacing={2}
      className="UpdateResearch_main_container"
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
            <h1 className="formHeader">Post Research researchp</h1>

            {TopicField()}

            {EligibilityField()}

            {SkillsField()}

            <div>
              <PostBtn type="submit">Post Research researchp</PostBtn>
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

const UpdateResearch = () => {
    const location = useLocation();
    const pathname = location.pathname;
    const id = pathname.match(/\d+$/)?.[0];
    
  return (
    <React.Fragment>
      <UpdateResearchForm id={id}/>
    </React.Fragment>
  );
};

export default UpdateResearch;
