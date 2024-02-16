import { makeStyles } from '@mui/styles';
import { red, deepOrange } from '@mui/material/colors'
export const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
    color: {
        color: red[300],
        deep: deepOrange[300]
    },
    helperText: {
        '& MuiFormHelperText-root': {
            display: 'none !important'
        }
    },
    link: {
        textDecoration: 'none',
        color: '#212529',
        fontSize: '14px',
        fontWeight: 500,
        cursor: 'pointer'
    },
    generateButton: {
        fontSize: '12px',
        textTransform: 'capitalize !important',
        padding: '5px 15px !important',
        fontFamily: 'Inter !important',
        borderRadius: 8,
        '&:hover': {
            background: '#2B279A !important'
        }
    },
    footerButtons: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '24px 25px',
    }

});