import { Button } from '@mui/material'
import React from 'react'
import { useStyles } from '../../theme/MainTheme'

const CButton = (props) => {
    const classes = useStyles()
    return (
        <Button
            className={props.className} sx={{ color: props.color ? props.color : 'auto', backgroundColor: props.backgroundColor ? props.backgroundColor : '' }} variant={props.variant} onClick={props.onClick} size={props.size}>
            {props.label}
        </Button>
    )
}

export default CButton