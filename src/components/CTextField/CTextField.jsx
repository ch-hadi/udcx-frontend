import { TextField } from "@mui/material";
import React from "react";

const CTextField = (props) => {
  return (
    <TextField
      sx={{
        margin: props.margin ? props.margin : 0,
        width: props.width ? props.width : "30%",
      }}
      size={props.size}
      id="outlined-basic"
      placeholder="Search"
      variant="outlined"
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlure}
      error={props.error}
      helperText={props.helperText}
    />
  );
};

export default CTextField;
