import { useTheme } from "@mui/material/styles";
import React from "react";
import CenteredContainer from "../../components/CenteredContainer/CenteredContainer";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";


const Login = () => {
  const theme = useTheme();
  const { loginWithRedirect } = useAuth0();

  return <Button className="login_btn" onClick={() => loginWithRedirect()}>Log In</Button>;
};

export default Login;
