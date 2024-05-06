import React from "react";
import ReactDOM from "react-dom";
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
import { skillsOptions } from "../docs/internship_skills.ts";
import Select from "react-select";
import { useAsyncError, useParams , useLocation} from "react-router-dom";

const validationSchema = yup.object({
  position: yup.string("ML Engineer").required("Position is required"),
  internship_Type: yup
    .string("internship_Type")
    .required("Internship type is required"),
  start_date: yup
    .date()
    .min(new Date(), "Selected date must be in future")
    .required("Start date is required"),
  end_date: yup
    .date()
    .min(new Date(), "Selected date must be in future")
    .required("End date is required"),
  stipend: yup.number(1000).required("Stipend is required"),
  eligibility: yup.string("B.Tech").required("Eligibility is required"),
  organization: yup.string("B.Tech").required("Organization is required"),
  location: yup.string("Mumbai"),
  positionsOpen: yup.number(1).required("Number of positions is required"),
  skillsRequired: yup.array().required("Required Field"),
});

const UpdateInternshipForm = ({id}) => {

  const [internship, setInternship] = useState([]);

  const getInternshipDetail = () => {
    try {
      var myHeaders = new Headers();
      myHeaders.append(
        "Authorization",
        "Token 19942b7733d256acebbfacfb6eeb7e5f55d58ecd"
      );
      myHeaders.append("Cookie", "csrftoken=o9U6wKWbEVIt5Ha31j7UIfXxtowMJPR6");

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch(
        `https://ipbackend.pythonanywhere.com/internship-detail/${id}/`,
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => setInternship(JSON.parse(result)))
        .catch((error) => console.log("error", error));
    } catch (err) {
      console.log(`Error while fetching the internship for update : ${err}`);
    }
  };

  useEffect(() => {
    getInternshipDetail();
    // console.log(internship.id);
  },[]);

  const formik = useFormik({
    initialValues: {
      position: "",
      internship_Type: "",
      positionsOpen: "",
      stipend: "",
      skillsRequired: [],
      start_date: "",
      end_date: "",
      eligibility: "",
      organization: "",
      location: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      selectedValues.forEach((item, index) => {
        selectedValues[index] = item.value;
      });
      var concat_values = selectedValues.join(",");
      formik.values.skillsRequired = concat_values;
      alert(JSON.stringify(values, null, 2));
      UpdateData(values, id);
    },
  });

  const UpdateData = (values, id) => {
    try {
      var myHeaders = new Headers();

      myHeaders.append(
        "Authorization",
        "Token 19942b7733d256acebbfacfb6eeb7e5f55d58ecd"
        // prof. ka token
      );

      // myHeaders.append("Cookie", "csrftoken=o9U6wKWbEVIt5Ha31j7UIfXxtowMJPR6");

      var formdata = new FormData();
      formdata.append("skills", values.skillsRequired);
      formdata.append("internship_Title", values.position);
      formdata.append("internship_Type", values.internship_Type);
      formdata.append("start_date", values.start_date);
      formdata.append("end_date", values.end_date);
      formdata.append("stipend", values.stipend);
      formdata.append("eligibility", values.eligibility);
      formdata.append("organization", values.organization);
      formdata.append("location", values.location);
      formdata.append("no_Of_Openings", values.positionsOpen);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow",
      };

      fetch(
        `https://ipbackend.pythonanywhere.com/internship-update/${id}/`,
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) =>
          console.log("Error while updatign internship : ", error)
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
          id="start_date"
          type={focus_startDate ? "date" : "text"}
          placeholder="start Date"
          label={internship.start_date}
          onFocus={onFocusStartDate}
          name="start_date"
          value={formik.values.start_date}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.touched.start_date && Boolean(formik.errors.start_date)}
          helperText={formik.touched.start_date && formik.errors.start_date}
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
          id="end_date"
          type={focus_endDate ? "date" : "text"}
          placeholder="End Date"
          label={internship.end_date}
          onFocus={onFocusendDate}
          // onBlur={onBlur}
          name="end_date"
          value={formik.values.end_date}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.touched.end_date && Boolean(formik.errors.end_date)}
          helperText={formik.touched.end_date && formik.errors.end_date}
          required
          style={{ marginBottom: "1rem", width: resp ? "20ch" : "24ch" }}
        />
      </>
    );
  };

  const OrganizationField = () => {
    return (
      <>
        <TextField
          id="organization"
          type="text"
          placeholder="Organization"
          label={internship.organization}
          name="organization"
          value={formik.values.organization}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={
            formik.touched.organization && Boolean(formik.errors.organization)
          }
          helperText={formik.touched.organization && formik.errors.organization}
          required
          style={{ margin: "0 1rem 1rem 0", width: resp ? "20ch" : "24ch" }}
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
          placeholder="Location"
          label={internship.location}
          name="location"
          value={formik.values.location}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.touched.location && Boolean(formik.errors.location)}
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
          placeholder="Position"
          label={internship?.internship_Title}
          name="position"
          value={formik.values.position}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.touched.position && Boolean(formik.errors.position)}
          helperText={formik.touched.position && formik.errors.position}
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
          id="internship_Type"
          type="text"
          placeholder="Internship Type"
          label={internship.internship_Type}
          name="internship_Type"
          value={formik.values.internship_Type}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={
            formik.touched.internship_Type &&
            Boolean(formik.errors.internship_Type)
          }
          helperText={
            formik.touched.internship_Type && formik.errors.internship_Type
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
          placeholder="Positions Open"
          label={internship.no_Of_Openings}
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
          placeholder="Stipend"
          label={internship.stipend}
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
          placeholder="Eligibility"
          label={internship.eligibility}
          name="eligibility"
          value={formik.values.eligibility}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={
            formik.touched.eligibility && Boolean(formik.errors.eligibility)
          }
          helperText={formik.touched.eligibility && formik.errors.eligibility}
          required
          style={{ marginBottom: "1rem", width: resp ? "42ch" : "50ch" }}
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
          label={internship.skills}
        />
      </>
    );
  };

  return (
    <>
          <Grid
      container
      spacing={2}
      className="UpdateInternship_main_container"
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
            <h1 className="formHeader">Update Internship</h1>

            {PositonField()}

            {InternshipTypeField()}

            <div style={{ display: "flex" }}>
              {StartDateField()}
              {EndDateField()}
            </div>

            <div style={{ display: "flex" }}>
              {OrganizationField()}
              {LocationField()}
            </div>

            <div style={{ display: "flex" }}> 
              {PositionsOpenField()}
              {StipendField()}
            </div>

            {EligibilityField()}

            {SkillsField()}

            <div>
              <PostBtn type="submit">Update Internship</PostBtn>
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
    </>
  );
};

const UpdateInternship = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const id = pathname.match(/\d+$/)?.[0];

  return (
    <React.Fragment>
      <UpdateInternshipForm id={id} />
    </React.Fragment>
  );
};

export default UpdateInternship;
