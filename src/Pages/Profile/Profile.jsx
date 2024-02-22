import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import Home from "../Home/Home";
import { BrowserRouter, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Sidebar from "../../components/CNavbar/Sidebar";
import CreateDeliverables from "../Deliverable/CreateDeliverables";
import { theme } from './../../theme/index'
import { ThemeProvider } from '@mui/material/styles';
import { useStyles } from "../../theme/MainTheme";

const Profile = () => {
    const classes = useStyles();
    const { user, isAuthenticated, isLoading, logout } = useAuth0();
    const [deliverable, setDeliverable] = useState(false);

    return (
        isAuthenticated && (
            <BrowserRouter>
                <ThemeProvider theme={theme} >
                    <div style={{ display: 'flex', flex: 1, flexDirection: 'row', }}>
                        {!deliverable && <Sidebar />}
                        {<Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/create-deliverable" element={<CreateDeliverables setDeliverable={setDeliverable} classes={classes} />} />
                        </Routes>}

                    </div>
                    <Routes>
                    </Routes>
                </ThemeProvider>
            </BrowserRouter>

        )
    );
};

export default Profile;