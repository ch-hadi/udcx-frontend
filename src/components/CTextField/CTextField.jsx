import { TextField } from "@mui/material";
import React from "react";
import { useStyles } from "../../theme/MainTheme";

const CTextField = (props) => {
  const classes = useStyles()
  return (
    <TextField
      sx={{
        margin: props.margin ? props.margin : 0,
        width: props.width ? props.width : "30%",
      }}
      className={classes.helperText}
      size={props.size}
      id="outlined-basic"
      placeholder={props.placeholder}
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
