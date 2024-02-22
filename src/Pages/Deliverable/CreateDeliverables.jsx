import React, { useState, useEffect, useRef } from "react";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as yup from "yup"; // Import Yup for validation schema
import { api } from "../../utils/axiosInterceptor/axiosInterceptor";
import { useNavigate } from "react-router-dom";
import CHeader from "../../components/CNavbar/CHeader";
import { useStyles } from "../../theme/MainTheme";
import CTextField from "../../components/CTextField/CTextField";
import { Grid, Typography, Box } from "@mui/material";
import CFooter from "../../components/CFooter/CFooter";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
const validationSchema = yup.object({
  price: yup
    .number("Enter your price")
    .min(20000, "Price must be greater than 20,000")
    .required("Price is Required"),
});

const CreateDeliverables = (props) => {
  const previewRef = useRef(null);

  const navigate = useNavigate();
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      deliverable_name: "",
      price: 0,
      activitiesList: "",
      ShortTermNextSteps: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      // e.preventDefault();

      const res = await api.get(`${process.env.REACT_APP_URL_LINK}/user/pdf`);
      if (res.success) {
        const htmlContent = `
    <div style={{ height: '100svh', width: '900px', margin: '0 auto' }}><div style="width: 100%;background: white;border-radius: 20px; position: relative;"><div style="padding: 40px;"><p>Project Status Report | Hammad Ahmed | Word Project | 20 April 2022</p><br> <br><p style="font-size: 35px; font-family: Inter; font-weight: 500;">Word Project Status Report</p><div style="margin: 20px 0px; display: inline-flex; padding: 0px; width: 100%; border: 1px solid rgb(43, 39, 154);"><div style="width: 50%; display: inline-flex; align-items: center;"><div style="width: 20%; padding: 3px; display: flex; align-items: center; background: rgb(37, 55, 97); color: rgb(255, 255, 255);"><p>Project Name</p></div><div style="width: 80%; padding: 3px 10px; display: flex; align-items: center;"><p>World Project</p></div></div><div style="width: 50%; display: inline-flex; align-items: center;"><div style="width: 20%; height: -webkit-fill-available; padding: 3px 10px; display: flex; align-items: center; background: rgb(37, 55, 97); color: rgb(255, 255, 255);"><p>Customer</p></div><div style="width: 80%; padding: 3px 10px; display: flex; align-items: center;"><p>Hammad Ahmed Riaz</p></div></div></div><div style="margin: 20px 0px; display: inline-flex; padding: 0px; width: 100%; border: 1px solid rgb(43, 39, 154);"><div style="width: 100%; display: block; align-items: center;"><div style="display: flex; align-items: center; color: rgb(0, 0, 0);"><div style="width: 20%; border-right: 1px solid rgb(37, 55, 97); position: relative;"><div style="background: rgb(37, 55, 97); padding-left: 5px; color: rgb(255, 255, 255);"><p>Project Status</p></div><div style="padding-left: 5px;"><p>Completed</p></div></div><div style="width: 20%; border-right: 1px solid rgb(37, 55, 97); position: relative;"><div style="background: rgb(37, 55, 97); padding-left: 5px; color: rgb(255, 255, 255);"><p>Date</p></div><div style="padding-left: 5px;"><p>21 April 2025</p></div></div><div style="width: 30%; position: relative;"><div style="background: rgb(37, 55, 97); padding-left: 5px; color: rgb(255, 255, 255);"><p>Hours Remaining</p></div><div style="padding-left: 5px;"><p>20 hours </p></div></div><div style="width: 30%; position: relative; border-left: 1px solid rgb(37, 55, 97);"><div style="background: rgb(37, 55, 97); padding-left: 5px; color: rgb(255, 255, 255);"><p>Prepared By</p></div><div style="padding-left: 5px;"><p>Hammad Ahmed Riaz </p></div></div></div></div></div><div><div style="font-size: 18px; color: rgb(66, 92, 151);"><p>Scope:</p></div><div><p>Scope of the Project.</p></div></div><div style="margin: 20px 0px;"><div style="font-size: 18px; color: rgb(66, 92, 151);"><h2>Activities Completed this week:</h2></div><div><p>Activities List</p></div></div><div style="margin: 20px 0px;"><div style="font-size: 18px; color: rgb(66, 92, 151);"><h2>Project Next Scope:</h2></div><div><p>Short Term Next Scope.</p></div></div></div></div>
   </div> `;
        await new Promise((resolve) => setTimeout(resolve, 100));
        if (previewRef.current) {
          previewRef.current.innerHTML = htmlContent;
          html2canvas(previewRef.current).then(canvas => {
            const pdf = new jsPDF('p', 'mm', 'a4');
            const imgData = canvas.toDataURL('image/png');
            pdf.addImage(imgData, 'PNG', 0, 0);
            // pdf.save('generated.pdf');
            const pdfDataUri = pdf.output("datauristring");

            // Create a new embed element
            const embedElement = document.createElement("embed");
            embedElement.src = pdfDataUri;
            embedElement.width = "100%";
            embedElement.height = "100%";

            // Append the embed element to the preview container
            previewRef.current.appendChild(embedElement);
          });
        }
      }

    }
  });

  const handleBack = () => {
    // Assuming you have a setDeliverable function in context or props
    props.setDeliverable(false);
    navigate("/");
  };
  useEffect(() => {
    props && props.setDeliverable(true);
  }, []);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <CHeader />
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Box sx={{ flexGrow: 1, display: 'flex' }}>
          <div style={{ width: '40%', }}>
            <Grid
              container
              display={"block"}
              spacing={{ xs: 2, md: 1 }}
              padding={"20px"}
              columns={{ xs: 2, sm: 4, md: 4 }}
            >
              <Grid item xs={2} sm={4} md={4} key={"index"}>
                <Typography
                  fontFamily={"inherit"}
                  fontSize={{ sx: 10, md: 18 }}
                  color={"#212529"}
                >
                  Fill in deliverable variables
                </Typography>
                <Typography
                  fontFamily={"inherit"}
                  fontSize={{ sx: 10, md: 13 }}
                  fontWeight={300}
                  color={"#ADB5BD"}
                >
                  Further instructions in one line
                </Typography>
              </Grid>
              <Grid item xs={2} sm={4} md={4} key={"i3"}>
                <Typography
                  fontFamily={"inherit"}
                  fontSize={{ sx: 10, md: 14 }}
                  color={"#212529"}
                  marginBottom={"8px"}
                >
                  Deliverable Name
                </Typography>
                <CTextField
                  name="deliverable_name"
                  value={formik.values.deliverable_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  // error={Boolean(formik.errors.deliverable_name)}
                  size="small"
                  width="100%"
                  helperText={formik.errors.deliverable_name}
                  placeholder="Deliverable name"
                />
              </Grid>

              <Grid item xs={2} sm={4} md={4} key={"i2"}>
                <Typography
                  fontWeight={"bold"}
                  fontFamily={"inherit"}
                  fontSize={{ sx: 10, md: 14 }}
                  color={"#212529"}
                  marginBottom={"8px"}
                >
                  ActivitiesList
                </Typography>
                <CTextField
                  name="activitiesList"
                  value={formik.values.activitiesList}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={Boolean(formik.errors.activitiesList)}
                  size="small"
                  width="100%"
                  helperText={formik.errors.activitiesList}
                  placeholder="Activities List"
                />
              </Grid>
              <Grid item xs={2} sm={4} md={4} key={"i1"}>
                <Typography
                  fontWeight={"bold"}
                  fontFamily={"inherit"}
                  fontSize={{ sx: 10, md: 14 }}
                  color={"#212529"}
                  marginBottom={"8px"}
                >
                  Price {formik.values.price}
                </Typography>
                <CTextField
                  name="price"
                  value={formik.values.price}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={Boolean(formik.errors.price)}
                  size="small"
                  width="100%"
                  helperText={formik.errors.price}
                  placeholder="Price"
                />
              </Grid>
              <Grid item xs={2} sm={4} md={4} key={"i1"}>
                <Typography
                  fontWeight={"bold"}
                  fontFamily={"inherit"}
                  fontSize={{ sx: 10, md: 14 }}
                  color={"#212529"}
                  marginBottom={"8px"}
                >
                  ShortTermNextSteps{" "}
                  {formik.values.ShortTermNextSteps &&
                    formik.values.ShortTermNextSteps}
                </Typography>
                <CTextField
                  name="ShortTermNextSteps"
                  value={formik.values.ShortTermNextSteps}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={Boolean(formik.errors.ShortTermNextSteps)}
                  size="small"
                  width="100%"
                  helperText={formik.errors.ShortTermNextSteps}
                  placeholder="Short term next steps"
                />
              </Grid>
            </Grid>
          </div>
          <div style={{ width: '60%', background: '#ebebe485', padding: '30px' }}>
            <h3 style={{ textAlign: 'center', padding: '5px 0px' }}>Preview</h3>
            <div ref={previewRef}></div>
          </div>
        </Box>
        <CFooter
          onClick={() => formik.handleSubmit()}
          setDeliverable={props.setDeliverable}
        />
      </div>
    </div>
  );
};

export default CreateDeliverables;
