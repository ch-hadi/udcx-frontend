import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as yup from "yup"; // Import Yup for validation schema

import { useNavigate } from "react-router-dom";
import CHeader from "../../components/CNavbar/CHeader";
import { useStyles } from "../../theme/MainTheme";
import CTextField from "../../components/CTextField/CTextField";
import { Button } from "@mui/material";

const validationSchema = yup.object({
  email: yup
    .string("Enter your Email")
    .email("Enter a valid Email")
    .required("Email is Required"),
  password: yup
    .string("Enter your password")
    .min(3, "Password should be of minimum 8 characters long")
    .required("Password is Required"),
});

const CreateDeliverables = (props) => {
  const navigate = useNavigate();
  const classes = useStyles();
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
  const initialValues = {
    user_name: "",
    price: "",
  };

  const handleBack = () => {
    // Assuming you have a setDeliverable function in context or props
    props.setDeliverable(false);
    navigate("/");
  };

  return (
    <div>
      <CHeader />
      <form onSubmit={formik.handleSubmit}>
        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <CTextField
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlure={formik.handleBlur}
            error={Boolean(formik.errors.email)}
            size="small"
            width="100%"
            helperText={formik.errors.email}
          />
          <Button variant="outlined" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateDeliverables;
