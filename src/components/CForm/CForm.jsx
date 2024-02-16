import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Label } from '@mui/icons-material';
import { Typography } from '@mui/material';
import CTextField from '../CTextField/CTextField';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function CForm() {
    const initialValues = {
        name: '',
        email: '',
        password: '',
    };
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    });
    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            // Handle form submission here
            console.log('Submitted values:', values);
        },
    });

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container display={'block'} spacing={{ xs: 2, md: 3 }} padding={'20px'} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={2} sm={4} md={4} key={'index'}>
                    <Typography fontFamily={'inherit'} fontSize={{ sx: 10, md: 18 }} color={'#212529'}>
                        Fill in deliverable variables
                    </Typography>
                    <Typography fontFamily={'inherit'} fontSize={{ sx: 10, md: 13 }} fontWeight={300} color={'#ADB5BD'}>
                        Further instructions in one line
                    </Typography>
                </Grid>
                <form onSubmit={handleSubmit} style={{ padding: '0px 20px' }}>
                    <Grid item xs={2} sm={4} md={4} key={'i3'}>
                        <Typography fontFamily={'inherit'} fontSize={{ sx: 10, md: 14 }} color={'#212529'} marginBottom={'8px'}>
                            Deliverable Name
                        </Typography>
                        <CTextField
                            type="text"
                            id="name"
                            name="name"
                            size='small' width='100%' />
                    </Grid>

                    <Grid item xs={2} sm={4} md={4} key={'i2'}>
                        <Typography fontWeight={'bold'} fontFamily={'inherit'} fontSize={{ sx: 10, md: 14 }} color={'#212529'} marginBottom={'8px'}>
                            ActivitiesList
                        </Typography>
                        <CTextField size='small' width='100%' />
                    </Grid>
                    <Grid item xs={2} sm={4} md={4} key={'i1'}>
                        <Typography fontWeight={'bold'} fontFamily={'inherit'} fontSize={{ sx: 10, md: 14 }} color={'#212529'} marginBottom={'8px'}>
                            Price
                        </Typography>
                        <CTextField size='small' width='100%' />
                    </Grid>
                    <button type="submit">Submit</button>
                </form>
            </Grid>

        </Box>
    );
}