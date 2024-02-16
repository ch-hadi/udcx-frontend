import { useTheme } from "@mui/material/styles";
import React from "react";
import CenteredContainer from "../../components/CenteredContainer/CenteredContainer";

const Login = () => {
  const theme = useTheme();
  return <div style={{ background: theme.palette.login.main, height: '100vh' }}>
    <CenteredContainer />
  </div>;
};

export default Login;
