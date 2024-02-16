import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as yup from "yup"; // Import Yup for validation schema
import { api } from "../../utils/axiosInterceptor/axiosInterceptor";
import { useNavigate } from "react-router-dom";
import CHeader from "../../components/CNavbar/CHeader";
import CForm from "../../components/CForm/CForm";
import { useStyles } from "../../theme/MainTheme";
import CTextField from "../../components/CTextField/CTextField";
import { Button, Grid, Typography, Box } from "@mui/material";
import CFooter from "../../components/CFooter/CFooter";

const validationSchema = yup.object({
  price: yup
    .number("Enter your price")
    .min(20000, "Price must be greater than 20,000")
    .required("Price is Required"),
});

const CreateDeliverables = (props) => {
  const navigate = useNavigate();
  const classes = useStyles();
  const formik = useFormik({
    initialValues: { deliverable_name: "", price: 0, activitiesList: "", ShortTermNextSteps: "" },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      // e.preventDefault();
      // console.log("hi", e);
    },
  });

  const handleBack = () => {
    // Assuming you have a setDeliverable function in context or props
    props.setDeliverable(false);
    navigate("/");
  };
  useEffect(() => {
    props && props.setDeliverable(true)
  }, [])
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <CHeader />
      <div
        style={{ display: "flex", flexDirection: "column", width: "100%" }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container display={'block'} spacing={{ xs: 2, md: 1 }} padding={'20px'} columns={{ xs: 2, sm: 8, md: 12 }}>
            <Grid item xs={2} sm={4} md={4} key={'index'}>
              <Typography fontFamily={'inherit'} fontSize={{ sx: 10, md: 18 }} color={'#212529'}>
                Fill in deliverable variables
              </Typography>
              <Typography fontFamily={'inherit'} fontSize={{ sx: 10, md: 13 }} fontWeight={300} color={'#ADB5BD'}>
                Further instructions in one line
              </Typography>
            </Grid>
            <Grid item xs={2} sm={4} md={4} key={'i3'}>
              <Typography fontFamily={'inherit'} fontSize={{ sx: 10, md: 14 }} color={'#212529'} marginBottom={'8px'}>
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
                placeholder='Deliverable name'
              />
            </Grid>

            <Grid item xs={2} sm={4} md={4} key={'i2'}>
              <Typography fontWeight={'bold'} fontFamily={'inherit'} fontSize={{ sx: 10, md: 14 }} color={'#212529'} marginBottom={'8px'}>
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
                placeholder='Activities List'
              />
            </Grid>
            <Grid item xs={2} sm={4} md={4} key={'i1'}>
              <Typography fontWeight={'bold'} fontFamily={'inherit'} fontSize={{ sx: 10, md: 14 }} color={'#212529'} marginBottom={'8px'}>
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
                placeholder='Price'
              />
            </Grid>
            <Grid item xs={2} sm={4} md={4} key={'i1'}>
              <Typography fontWeight={'bold'} fontFamily={'inherit'} fontSize={{ sx: 10, md: 14 }} color={'#212529'} marginBottom={'8px'}>
                ShortTermNextSteps {formik.values.ShortTermNextSteps && formik.values.ShortTermNextSteps}
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
                placeholder='Short term next steps'
              />
            </Grid>
          </Grid>
          <CFooter onClick={() => formik.handleSubmit()} setDeliverable={props.setDeliverable} />
        </Box>
      </div>
    </div>
  );
};

export default CreateDeliverables;
