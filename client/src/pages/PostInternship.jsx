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
import { skillsOptions } from "../docs/internship_skills";
import Select from "react-select";
import { toast } from 'react-hot-toast';

const validationSchema = yup.object({
  jobTitle: yup.string("ML Engineer").required("Position is required"),
  jobType: yup
    .string("internship_type")
    .required("Internship type is required"),
  startDate: yup
    .date()
    .min(new Date(), "Selected date must be in future")
    .required("Start date is required"),
  endDate: yup
    .date()
    .min(new Date(), "Selected date must be in future")
    .required("End date is required"),
  stipend: yup.number(1000).required("Stipend is required"),
  eligibility: yup.string("B.Tech").required("Eligibility is required"),
  companyName: yup.string("B.Tech").required("companyName is required"),
  location: yup.string("Mumbai"),
  positionsOpen: yup.number(1).required("Number of positions is required"),
  skills: yup.array().required("Required Field"),
});

const PostInternshipForm = () => {
  const formik = useFormik({
    initialValues: {
      jobTitle: "",
      companyName: "",
      location: "",
      stipend: "",
      jobType: "",
      skills: [],
      positionsOpen: "",
      startDate: "",
      endDate: "",
      eligibility: "",
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
        startDate: new Date(values.startDate).toISOString().split('T')[0],
        endDate: new Date(values.endDate).toISOString().split('T')[0]
      };

      // alert(JSON.stringify(formattedValues, null, 2));
      toast.success("Internship created");
      sendData(formattedValues);
    },
  });

  // const calculateMonthDuration = (startDate, endDate) => {
  //   const start = new Date(startDate);
  //   const end = new Date(endDate);

  //   let months = (end.getFullYear() - start.getFullYear()) * 12;
  //   months -= start.getMonth();
  //   months += end.getMonth();

  //   // Adjust for same month but different day
  //   if (end.getDate() < start.getDate()) {
  //     months--;
  //   }
  //   console.log(months);

  //   return months <= 0 ? "0" : months+" MONTHS";
  // }

  const sendData = (internshipData) => {
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
        body: JSON.stringify(internshipData), // backend expects json not formdata
        redirect: "follow",
      };

      fetch(
        "http://localhost:8080/api/internships",
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) =>
          console.log("Error while posting internship : ", error)
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

  const responsiveness2 = { responsive: width < 850 };
  const resp2 = responsiveness2.responsive;

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
    position: "relative",
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

  const [focus_startDate, setFocusedStartDate] = useState(false);
  const onFocusStartDate = () => setFocusedStartDate(true);

  const [focus_endDate, setFocusedendDate] = useState(false);
  const onFocusendDate = () => setFocusedendDate(true);

  const StartDateField = () => {
    return (
      <>
        <TextField
          id="startDate"
          type={focus_startDate ? "date" : "text"}
          label="start Date"
          placeholder="start Date"
          onFocus={onFocusStartDate}
          name="startDate"
          value={formik.values.startDate}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.touched.startDate && Boolean(formik.errors.startDate)}
          helperText={formik.touched.startDate && formik.errors.startDate}
          required
          style={{ margin: "0 1rem 1rem 0", width: resp ? "20ch" : "24ch" }}
        />
      </>
    );
  };

  const EndDateField = () => {
    return (
      <>
        <TextField
          id="endDate"
          type={focus_endDate ? "date" : "text"}
          label="End Date"
          placeholder="End Date"
          onFocus={onFocusendDate}
          // onBlur={onBlur}
          name="endDate"
          value={formik.values.endDate}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.touched.endDate && Boolean(formik.errors.endDate)}
          helperText={formik.touched.endDate && formik.errors.endDate}
          required
          style={{ marginBottom: "1rem", width: resp ? "20ch" : "24ch" }}
        />
      </>
    );
  };

  const companyNameField = () => {
    return (
      <>
        <TextField
          id="companyName"
          type="text"
          label="companyName"
          placeholder="companyName"
          name="companyName"
          value={formik.values.companyName}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={
            formik.touched.companyName && Boolean(formik.errors.companyName)
          }
          helperText={formik.touched.companyName && formik.errors.companyName}
          required
          style={{margin: "0 1rem 1rem 0", width: resp ? "20ch" : "24ch" }}
        />
      </>
    );
  };

  const LocationField = () => {
    return (
      <>
        <TextField
          id="location"
          type="text"
          label="Location"
          placeholder="Location"
          name="location"
          value={formik.values.location}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={
            formik.touched.location && Boolean(formik.errors.location)
          }
          helperText={formik.touched.location && formik.errors.location}
          required
          style={{ marginBottom: "1rem", width: resp ? "20ch" : "24ch" }}
        />
      </>
    );
  };

  const PositonField = () => {
    return (
      <>
        <TextField
          id="position"
          type="text"
          label="Position"
          placeholder="Position"
          name="jobTitle"
          value={formik.values.jobTitle}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.touched.jobTitle && Boolean(formik.errors.jobTitle)}
          helperText={formik.touched.jobTitle && formik.errors.jobTitle}
          required
          style={{ marginBottom: "1rem", width: resp ? "42ch" : "50ch" }}
        />
      </>
    );
  };

  const InternshipTypeField = () => {
    return (
      <>
        <TextField
          id="internship_type"
          type="text"
          label="Internship Type"
          placeholder="Remote/Onsite"
          name="jobType"
          value={formik.values.jobType}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={
            formik.touched.jobType &&
            Boolean(formik.errors.jobType)
          }
          helperText={
            formik.touched.jobType && formik.errors.jobType
          }
          required
          style={{ marginBottom: "1rem", width: resp ? "42ch" : "50ch" }}
        />
      </>
    );
  };

  const PositionsOpenField = () => {
    return (
      <>
        <TextField
          id="positionsOpen"
          type="number"
          label="Positions Open"
          placeholder="Positions Open"
          name="positionsOpen"
          value={formik.values.positionsOpen}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={
            formik.touched.positionsOpen && Boolean(formik.errors.positionsOpen)
          }
          helperText={
            formik.touched.positionsOpen && formik.errors.positionsOpen
          }
          required
          style={{ margin: "0 1rem 1rem 0", width: resp ? "20ch" : "24ch" }}
        />
      </>
    );
  };

  const StipendField = () => {
    return (
      <>
        <TextField
          id="stipend"
          type="number"
          label="Stipend"
          placeholder="Stipend per month"
          name="stipend"
          value={formik.values.stipend}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.touched.stipend && Boolean(formik.errors.stipend)}
          helperText={formik.touched.stipend && formik.errors.stipend}
          required
          style={{ marginBottom: "1rem", width: resp ? "20ch" : "24ch" }}
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
      className="postInternship_main_container"
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
              position: "relative",
            }}
          >
            <h1 className="formHeader">Post Internship</h1>

            {PositonField()}

            {InternshipTypeField()}

            <div style={{ display: "flex" }}>
              {StartDateField()}
              {EndDateField()}
            </div>

            <div style={{ display: "flex" }}>
              {companyNameField()}
              {LocationField()}
            </div>

            <div style={{ display: "flex" }}> 
              {PositionsOpenField()}
              {StipendField()}
            </div>

            {EligibilityField()}

            {SkillsField()}

            <div>
              <PostBtn type="submit">Post Internship</PostBtn>
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

const PostInternship = () => {
  return (
    <React.Fragment>
      <PostInternshipForm />
    </React.Fragment>
  );
};

export default PostInternship;
