import { TextField } from '@mui/material'
import React from 'react'

const CTextField = (props) => {
    return (
        <TextField
            sx={{
                width: props.width ? props.width : '30%',
                '& .MuiOutlinedInput-root': {
                    borderRadius: '5px',
                    border: 'none', // Remove the border
                    // boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)', // Add shadow
                    height: 35
                },
                '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                    border: 0.5, // Remove border on hover
                    opacity: '10%'
                },
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    // border: 'none', // Remove border on focus
                },

            }}

            name={props.name} size={props.size} id="outlined-basic" placeholder="Search" variant="outlined" />
    )
}

export default CTextField