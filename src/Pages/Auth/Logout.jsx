import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';
import CButton from '../../components/CButton/CButton';
import { useStyles } from '../../theme/MainTheme';

function Logout() {
    const classes = useStyles();
    const {
        isAuthenticated,
        logout,
    } = useAuth0();

    return isAuthenticated && (
        <CButton onClick={() => {
            logout({
                logoutParams: {
                    returnTo: window.location.origin
                }
            });
        }} label='Log out'
            className={classes.logoutButton}
            size='small'
            variant='outlined'
        />
    );
}

export default Logout;